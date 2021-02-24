import React from 'react';
import axios from 'axios';
import {Container,Form,Col,Jumbotron,Button} from 'react-bootstrap';
import useForm from '../../UseForm/useForm';

const NewProduct = props => {
    
const addProduct = (e) => {

    const productUrl = "http://localhost:5000/api/user/products/"
    
    const newProduct = {
        name: values.name,
        description: values.description,
        category: values.category,
        plan: values.plan,
        progress: values.progress,
        goal: values.goal,
    }

    axios.post(productUrl, newProduct)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
}    
    const { values, handleSubmit, handleChange } = useForm(addProduct);

    return(
        <div>
            <Container>
                <Form onSubmit={handleSubmit}>
                <Jumbotron className="owner-sign">
                <div>
                <Form.Group controlId="name">
                    <Col className="icons">
                    <Form.Control className="field" type="text" name="name" placeholder="" required={true} value={values.name} onChange={handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group controlId="email">
                    <Col className="icons">
                    <Form.Control className="field" type="text" name="description" placeholder="" required={true} value={values.description} onChange={handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group controlId="password">
                    <Col className="icons">
                    <Form.Control className="field" type="text" name="category" placeholder="" value={values.category} onChange={handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group controlId="bio">
                    <Col className="icons">
                    <Form.Control  className="field" type="text" name="plan" placeholder="" value={values.plan} onChange={handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group controlId="bio">
                    <Col className="icons">
                    <Form.Control  className="field" type="text" name="progress" placeholder="" value={values.progress} onChange={handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group controlId="bio">
                    <Col className="icons">
                    <Form.Control  className="field" type="text" name="goal" placeholder="" value={values.goal} onChange={handleChange}/>
                    </Col>
                </Form.Group>
                    <div className="center">
                        <Button className="create" type="submit">Add Product</Button>
                    </div>
                </div>
                </Jumbotron>
                </Form>
            </Container>

        </div>
    )
};

export default NewProduct;