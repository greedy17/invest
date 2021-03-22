import React from 'react';
import {Jumbotron,Form,ProgressBar} from 'react-bootstrap';
import './stepFour.css'

const StepFour = (props) => {
    if (props.currentStep !== 4) {
      return null
    }else{
      return(
        <div>
          <Jumbotron className="step-four container">
            <ProgressBar striped variant="success" now={80} />
            <div className="service">
            <h1>Service line</h1>
            </div>
              <Form.Group controlId="prodserv">
                <Form.Label>Product or Service</Form.Label>
                <Form.Control as="textarea" defaultValue={props.serviceOrProduct} onChange={props.handleChange} rows={3} />
              </Form.Group>
              <Form.Group controlId="pricing">
                <Form.Label>Pricing</Form.Label>
                <Form.Control as="textarea" defaultValue={props.pricing} onChange={props.handleChange} rows={3} />
              </Form.Group>
              <Form.Group controlId="research">
                <Form.Label>Research</Form.Label>
                <Form.Control as="textarea" defaultValue={props.research} onChange={props.handleChange} rows={3} />
              </Form.Group>
              <div className="prev-and-next">
                {props.prev}
                <div className="next">
                {props.next}
                </div>   
              </div>
          </Jumbotron>
        </div>
      )
    }
  }

export default StepFour;