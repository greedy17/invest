import React, {useState, useEffect} from 'react';
import jwt_decode from "jwt-decode";
import {Jumbotron,Image,Dropdown,Badge,Card,CardGroup,Button,Container} from 'react-bootstrap';
import placeholder from '../../assets/images/placeholder.jpeg';
import './profile.css';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Profile = props => {
    const userApi = "http://localhost:5000/api/user/users/"

    const [userInfo, setUserInfo] = useState([]);

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
                             {userInfo.bio}
                            </div>
                        </div>
                    </div>
                </Jumbotron>
    
                <Jumbotron className="about">
                <div className="center">
                    <h1 className="type products">Products</h1>
                </div>
                <Container>
                    <CardGroup>
                    <Card className="card">
                        <Card.Body>
                        <Card.Title className="card-title">Tech</Card.Title>
                        <Card.Text>
                        All about my product. All about my product. All about my product. All about my product.
                        </Card.Text>
                        </Card.Body>
                        <Button className="plan-button">View plan</Button>
                        <Card.Footer>
                        <small className="text-muted">added 2/9/2021</small>
                        </Card.Footer>
                    </Card>
                        <Card className="card">
                            <Card.Body>
                            <Card.Title className="card-title">Beauty</Card.Title>
                            <Card.Text>
                            All about my product. All about my product. All about my product. All about my product.
                            </Card.Text>
                            </Card.Body>
                            <Button className="plan-button">View plan</Button>
                            <Card.Footer>
                            <small className="text-muted">added 2/9/2021</small>
                            </Card.Footer>
                        </Card>
                        <Card className="card">
                            <Card.Body>
                            <Card.Title className="card-title">Fashion</Card.Title>
                            <Card.Text>
                            All about my product. All about my product. All about my product. All about my product.
                            </Card.Text>
                            </Card.Body>
                            <Button className="plan-button">View plan</Button>
                            <Card.Footer>
                            <small className="text-muted">added 2/9/2021</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Container>     
                <div className="center">
                <Button className="add"><Link className="link" to='/businessPlan'>Add product</Link></Button>
                </div>
                </Jumbotron>
    
            </div>
        )
}
    

export default Profile; 

