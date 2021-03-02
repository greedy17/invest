import React from "react";
import { Link, withRouter } from "react-router-dom";
import {Form, Button, Container, Image} from 'react-bootstrap';
import {FiMail, FiLock} from 'react-icons/fi';
import whitelogo from '../../assets/images/whiteLogo.png';
import setAuthToken from '../../utils/setAuthToken';
import useForm from '../UseForm/useForm';
import axios from 'axios';
import './logIn.css';


const LogIn = (props) => {

    const { values, handleChange } = useForm()

    const checkLoginStatus = (e) => {

        e.preventDefault();
      
        const url = 'http://localhost:5000/api/user/'
  
        const loginCredentials = {
            email: values.email,
            password: values.password,
        }
  
        axios.post(url+'login', loginCredentials)
        .then(res => {
            const token = res.data;
            console.log(token);
            localStorage.setItem('jwtToken', token);
  
            setAuthToken(token);
            props.handleSuccessfulLogin();
            props.history.push("/news");
        })
        .catch(err => {
            console.log(err);
            alert("Invalid email or password!");
            props.handleUnsuccessfulLogin();
        });
    }

    return(
        <div>
            <Container className="login-form">
                <div className="center">
                    <Image src={whitelogo} height={80}></Image>
                </div>
                <Form onSubmit={checkLoginStatus}>
                <Form.Group controlId="email">
                    <Form.Label className="label-font">Email address</Form.Label>
                    <span className="small-icon"><FiMail/></span><Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} value={values.email} required={true}/> 
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label className="label-font">Password</Form.Label>
                    <span className="small-icon"><FiLock/></span><Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} value={values.password} required={true}/>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="remember me" />
                </Form.Group>
                <div className="center">
                    <Button className="login-button" type="submit">Log in</Button>
                    <p className="sign-up"><Link className="sign-up" to='/signup'>Dont have an account ? Sign up</Link></p>
                </div>
                </Form>
            </Container>
        </div>
    )
}

export default withRouter(LogIn);