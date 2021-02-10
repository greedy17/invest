import React from 'react';
import {Form,Col,Row,Container,Jumbotron,Button} from 'react-bootstrap';
import './signUp.css'

const SignUp = () => {
    return(
        <div>
            <Container className="center">
                <Jumbotron className="jumbo">
                <div className="center i-am"><h2>I am...</h2></div>
                <Form className="checkbox-text">
                <Form.Control as="select" size="lg">
                    <option>Creating a product</option>
                    <option>Looking for investment opportunities</option>
                </Form.Control>
                <div className="center">
                    <Button className="continue-button">Continue</Button>
                </div>
                </Form>
                </Jumbotron>
            </Container>
        </div>
    )
}

export default SignUp;