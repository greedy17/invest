import React, {useState, useEffect} from 'react';
import jwt_decode from "jwt-decode";
import {Jumbotron,Image,Dropdown,Badge,Button,Tooltip,OverlayTrigger,Form} from 'react-bootstrap';
import placeholder from '../../assets/images/placeholder.jpeg';
import CurrentUserProducts from './CurrentUserProducts/currentUserProducts';
import './profile.css';
import {Link} from 'react-router-dom';
import useForm from '../UseForm/useForm';
import axios from 'axios';


const Profile = props => {

    const { values, handleChange} = useForm();
    const userApi = "http://localhost:5000/api/user/users/"
    const [userInfo, setUserInfo] = useState([]);
    const [editShow, setEditShow] = useState(true);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Click bio to edit.
        </Tooltip>
    )
    
    const showBioEdit = () => setEditShow(editShow === true ? false: true);

    var token = localStorage.getItem('jwtToken');
    
    const getUserInfo = () =>{
        if(token){
            var decoded = jwt_decode(token);
            const newUrl = userApi + decoded._id;
            axios.get(newUrl)
            .then( res => {
            setUserInfo(res.data);
            })
        }
    }

    useEffect(() => {
        getUserInfo();
    },);

const  updateUser = (e) => {
        e.preventDefault();

        var decoded = jwt_decode(token);
        const updatedUrl = userApi + decoded._id;

        const updatedUser = {
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
            bio: values.bio,
            role: userInfo.role
        }

        axios.put(updatedUrl, updatedUser)
        .then(res => {
            showBioEdit();
        })
        .catch(err => console.log(err));

    }
    
        return(
            <div>
                <Jumbotron className="profile">
                    <div className="bio">
                        <div>
                        <Image rounded src={placeholder} height={"170"}></Image>
                        </div>
                        <div className="top">
                            <div className="name">
                                <h3>{userInfo.name} <span className="type">({userInfo.role})</span></h3>
                                <Dropdown className="notifications">
                                    <Dropdown.Toggle className="toggle">
                                        Notifications <Badge variant="light">0</Badge>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="1">No notifications at the moment</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <div className="bio lorem">
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                            <Button className="bio-button" onClick={()=> showBioEdit()} hidden={!editShow}>{userInfo.bio}</Button>
                            </OverlayTrigger>
                            <Form onSubmit={updateUser}>
                            <Form.Group controlId="bio" hidden={editShow}>
                                <Form.Label>Edit Bio</Form.Label>
                                <Form.Control as="textarea" type="text" rows={2} name="bio" value={values.bio} onChange={handleChange}/>
                                <Button className="green" onClick={()=> showBioEdit()}>Cancel</Button><Button type="submit" className="green">Submit</Button>
                            </Form.Group>
                            </Form>
                            </div>
                            
                        </div>
                    </div>
                </Jumbotron>
    
                <Jumbotron className="about">
                    <div className="center product-scroll products">
                    {userInfo.role === "investor" ? (
                    <h1 className="type new-products">My Investments</h1>
                    ): <h1 className="type new-products">My Products</h1>}

                    <CurrentUserProducts/>
                    
                    </div>

                    <div className="center lorem">
                    {userInfo.role === "investor" ? (
                    <Button className="add"><Link className="link" to='/products'>Find products</Link></Button>
                    ): <Button className="add"><Link className="link" to='/businessPlan'>Create new product</Link></Button>}
                    </div>

                </Jumbotron>
            </div>
        )
}
    

export default Profile; 

