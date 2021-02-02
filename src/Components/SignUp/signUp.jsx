import React from 'react';
import {Form,Col,Row,Container,Jumbotron,Button} from 'react-bootstrap';
import './signUp.css'

const SignUp = () => {
    return(
        <div>
            <Container className="center">
                <div className="center are-you"><h2>Select one of the following</h2></div>
                <Jumbotron className="center jumbo">
                <Form>
                <Form.Group as={Row}>
                <Col sm={10}>
                    <Form.Check
                    type="radio"
                    label="Owner"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    />
                    <br/>
                    <Form.Check
                    type="radio"
                    label="Investor"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    />
                </Col>
                </Form.Group>
                <Button className="continue">Continue</Button>
                </Form>
                </Jumbotron>
            </Container>
        </div>
    )
}

export default SignUp;