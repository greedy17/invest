import React from 'react';
import {Jumbotron,Form,ProgressBar} from 'react-bootstrap';

const StepTwo = (props) => {
    if (props.currentStep !== 2) {
      return null
    }else{
      return(
        <div>
          <Jumbotron className="step-two container">
          <ProgressBar striped variant="warning" now={40} />
            <h1>Company Description</h1>
              <Form.Group controlId="">
                <Form.Label>Mission Statement</Form.Label>
                <Form.Control as="textarea" defaultValue={props.missionStatement} onChange={props.handleChange} rows={3} />
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Principal Members</Form.Label>
                <Form.Control as="textarea" defaultValue={props.principalMembers} onChange={props.handleChange} rows={3} />
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Primary Location</Form.Label>
                <Form.Control as="textarea" defaultValue={props.primaryLocation} onChange={props.handleChange} rows={3} />
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

export default StepTwo;