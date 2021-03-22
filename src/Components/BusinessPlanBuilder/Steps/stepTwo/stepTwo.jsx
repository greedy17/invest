import React from 'react';
import {Jumbotron,Form,ProgressBar} from 'react-bootstrap';
import './stepTwo.css';

const StepTwo = (props) => {
    if (props.currentStep !== 2) {
      return null
    }else{
      return(
        <div>
          <Jumbotron className="step-two container">
          <ProgressBar striped variant="warning" now={40} />
            <div className="company">
              <h1>Company Description</h1>
            </div>
              <Form.Group controlId="mission">
                <Form.Label>Mission Statement</Form.Label>
                <Form.Control as="textarea" defaultValue={props.missionStatement} onChange={props.handleChange} rows={3} />
              </Form.Group>
              <Form.Group controlId="members">
                <Form.Label>Principal Members</Form.Label>
                <Form.Control as="textarea" defaultValue={props.principalMembers} onChange={props.handleChange} rows={3} />
              </Form.Group>
              <Form.Group controlId="location">
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