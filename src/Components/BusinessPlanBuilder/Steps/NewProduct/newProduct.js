import React from 'react';
import {Form,Col,Jumbotron} from 'react-bootstrap';
import './newProduct.css';

const NewProduct = props => {

    if (props.currentStep !== 1) {
        return null
      }else{
    return(
                <Jumbotron className="new-product container">

                <div className="center exec">
                    <h3>First, tell us a little bit about your product.</h3>
                </div>

                <div className="product-space">
                <Form.Group controlId="name">
                    <Col className="icons">
                    <Form.Control className="field" type="text" name="name" placeholder="Product name" required={true} onChange={props.handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group controlId="description">
                    <Col className="icons">
                    <Form.Control className="field" type="text" name="description" placeholder="Brief description" required={true} onChange={props.handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group controlId="category">
                    <Col className="icons">
                    <Form.Control className="field" type="text" name="category" placeholder="Category e.g (gaming, tech, transportation, travel, agriculture, etc.)" onChange={props.handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group controlId="progress">
                    <Col className="icons">
                    <Form.Control  className="field" type="text" name="progress" placeholder="Current dollar amount you have for your product" onChange={props.handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group controlId="goal">
                    <Col className="icons">
                    <Form.Control  className="field" type="text" name="goal" placeholder="Total dollar amount needed for your product"  onChange={props.handleChange}/>
                    </Col>
                </Form.Group>
                </div>

                <div className="prev-and-next">
                    {props.prev}
                    <div className="next">
                        {props.next}
                    </div>   
                </div>
                </Jumbotron>
    )}
}

export default NewProduct;