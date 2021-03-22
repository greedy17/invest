import React from 'react';
import {Jumbotron,Form,ProgressBar} from 'react-bootstrap';
import './stepFive.css'

const StepFive = (props) => {
    if (props.currentStep !== 5) {
      return null
    }else{
      return(
        <div>
          <Jumbotron className="step-four container">
          <ProgressBar variant="success" now={100} />
            <div className="market-sales">
            <h1>Marketing and sales</h1>
            </div>
              <Form.Group controlId="growth">
                <Form.Label>Growth strategy</Form.Label>
                <Form.Control as="textarea" defaultValue={props.growthStrategy} onChange={props.handleChange} rows={3} />
              </Form.Group>
              <Form.Group controlId="communication">
                <Form.Label>Communication</Form.Label>
                <Form.Control as="textarea" defaultValue={props.communication} onChange={props.handleChange} rows={3} />
              </Form.Group>
              <Form.Group controlId="hays">
                <Form.Label>How are you selling ?</Form.Label>
                <Form.Control as="textarea" defaultValue={props.howWillYouSale} onChange={props.handleChange} rows={3} />
              </Form.Group>
              <div className="five">
                <div className="right">
                  {props.prev}
                </div>
                <button className="add-product">Add Product!</button>
              </div>
          </Jumbotron>
        </div>
      )
    }

  }

export default StepFive;