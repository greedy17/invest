import React from 'react';
import {Form, Button, Container, Image} from 'react-bootstrap';
import whitelogo from '../../assets/images/whiteLogo.png';
import './logIn.css';

const LogIn = () => {
    return(
        <div>
            <Container className="login-form">
                <div className="center">
                    <Image src={whitelogo} height={80}></Image>
                </div>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="label-font">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="label-font">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="remember me" />
                </Form.Group>
                <div className="center">
                    <Button className="login-button" type="submit">Log in</Button>
                </div>
                </Form>
                </Container>
        </div>
    )
}

export default LogIn;