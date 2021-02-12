import React from 'react';
import {Form,Col,Row,Container,Jumbotron,Button} from 'react-bootstrap';
import './ownerSignUp.css'

const OwnerSignUp = () => {
    return(
        <div>
            <Container>
                <Jumbotron className="owner-sign">
                <div className="center owner"><h2>Owner sign up</h2></div>
                <Form className="owner-form">
                <Form.Group>
                    <Col>
                    <Form.Control placeholder="First Name" />
                    </Col>
                </Form.Group>
                <Form.Group>  
                    <Col>
                    <Form.Control placeholder="Last Name" />
                    </Col>
                </Form.Group>
                <Form.Group controlId="formHorizontalEmail">
                    <Col >
                    <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
                <Form.Group controlId="formHorizontalPassword">
                    <Col >
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                    <div className="center">
                        <Button className="create">Create Account</Button>
                    </div>
                </Form>
                </Jumbotron>
            </Container>
        </div>
    )
}

export default OwnerSignUp;