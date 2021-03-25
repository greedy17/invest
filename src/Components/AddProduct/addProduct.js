import React, {useState,useEffect} from 'react';
import {Form,Col,Jumbotron,Button} from 'react-bootstrap';
import './addProduct.css';
import axios from 'axios';
import useForm from '../UseForm/useForm';
import jwt_decode from 'jwt-decode';

const AddProduct = props => {

    const userApi = "http://localhost:5000/api/user/users/"
    const [userInfo, setUserInfo] = useState([]);
    const [newProduct, setNewProduct] = useState([]);
    var token = localStorage.getItem('jwtToken');
    const [editShow, setEditShow] = useState(true);

    const showBioEdit = () => setEditShow(editShow === true ? false: true);

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
    },[]);

    const myProduct = () => {

        const url = "http://localhost:5000/api/user/products"
  
          const product = {
              name: values.name,
              description: values.description,
              category: values.category,
              progress: values.progress,
              goal: values.goal
          }
          
          axios.post(url, product)
          .then(res => {
            console.log(res);
            setNewProduct(res.data);
            showBioEdit();
          })
          .catch(err => console.log(err));
      }

      const  updateUser = () => {

        var decoded = jwt_decode(token);
        const updatedUrl = userApi + decoded._id;

        const updatedUser = {
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
            role: userInfo.role,
            products: newProduct,
            bio: userInfo.bio,
            profileImg: userInfo.profileImg
        }

        axios.put(updatedUrl, updatedUser)
        .then(res => {
            console.log(res)
            props.history.push("/profile");
        })
        .catch(err => console.log(err));

    }

      const { values, handleSubmit, handleChange } = useForm(myProduct);

    return(

                <Jumbotron className="new-product container">
                <div className="center exec">
                    <h2>Tell us a little bit about your product.</h2>
                </div>
                <div className="center">
                    <p>(You can add your business plan later)</p>
                </div>
                    <div className="product-space">
                        <Form onSubmit={handleSubmit} hidden={!editShow}>
                            <Form.Group controlId="name">
                                <Col className="icons">
                                <Form.Control className="field" type="text" name="name" placeholder="Product name" required={true} onChange={handleChange} value={values.name}/>
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Col className="icons">
                                <Form.Control className="field" type="text" name="description" placeholder="Brief description" required={true} onChange={handleChange} value={values.description}/>
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="category">
                                <Col className="icons">
                                <Form.Control className="field" type="text" name="category" placeholder="Category e.g (gaming, tech, transportation, travel, agriculture, etc.)" onChange={handleChange} value={values.category}/>
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="progress">
                                <Col className="icons">
                                <Form.Control  className="field" type="text" name="progress" placeholder="Current dollar amount you have for your product" onChange={handleChange} value={values.progress}/>
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="goal">
                                <Col className="icons">
                                <Form.Control  className="field" type="text" name="goal" placeholder="Total dollar amount needed for your product"  onChange={handleChange} value={values.goal}/>
                                </Col>
                            </Form.Group>
                            <div className="center">
                                <Button className="create" type="submit">Add product</Button>
                            </div>
                        </Form>
                        <div hidden={editShow} >
                        <h3>Are you sure you want to add this product ?</h3>
                        <Button className="create" onClick={() => updateUser()}>Add</Button> <Button className="create" onClick={() => showBioEdit()}>Cancel</Button>
                        </div>    
                    </div>
                </Jumbotron>
    )
}

export default AddProduct;