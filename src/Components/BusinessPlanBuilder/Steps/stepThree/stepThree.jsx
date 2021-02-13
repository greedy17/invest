import React from 'react';
import {Jumbotron,Form,ProgressBar} from 'react-bootstrap';

const StepThree = (props) => {
    if (props.currentStep !== 3) {
      return null
    }else{
      return(
        <div>
          <Jumbotron className="step-three container">
          <ProgressBar variant="warning" now={60} />
            <h1>Market Research</h1>
              <Form.Group controlId="">
                <Form.Label>Industry</Form.Label>
                <Form.Control as="textarea" defaultValue={props.industry} onChange={props.handleChange} rows={3} />
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Customer Description</Form.Label>
                <Form.Control as="textarea" defaultValue={props.customerDescription} onChange={props.handleChange} rows={3} />
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Company Advantages</Form.Label>
                <Form.Control as="textarea" defaultValue={props.companyAdvantages} onChange={props.handleChange} rows={3} />
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

export default StepThree;