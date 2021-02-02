import React from 'react';
import {Form,Col,Row,Container,Jumbotron,Button} from 'react-bootstrap';
import './ownerSignUp.css'

const OwnerSignUp = () => {
    return(
        <div>
            <Container>
                <Jumbotron className="owner-sign">
                <div className="center owner"><h2>Owner</h2></div>
                <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                    First Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control placeholder="First Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                    Last Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control placeholder="Last Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Confirm Password
                    </Form.Label>
                    <Col sm={10}>
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