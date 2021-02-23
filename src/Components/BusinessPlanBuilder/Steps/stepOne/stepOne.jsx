import React from 'react';
import {Jumbotron,Form,Popover, OverlayTrigger,ProgressBar} from 'react-bootstrap';
import './stepOne.css';

const StepOne = (props) => {

  const productPop = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Product</Popover.Title>
      <Popover.Content>
      What's the <strong>name</strong> of your company/product or service ?
      </Popover.Content>
    </Popover>);
  
  const customerPop = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Customer</Popover.Title>
      <Popover.Content>
      What's the <strong>name</strong> of your company/product or service ?
      </Popover.Content>
    </Popover>);

  const visionPop = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Vision</Popover.Title>
      <Popover.Content>
      What's the <strong>name</strong> of your company/product or service ?
      </Popover.Content>
    </Popover>);  

    if (props.currentStep !== 1) {
      return null
    }else{
      return(
        <div>
          <Jumbotron className="step-one container">
            <ProgressBar variant="danger" now={20} />
            <div className="exec">
            <h1>Executive Summary</h1><p className="click">(click on the titles for tips!)</p>
            </div>
              <Form.Group controlId="product">
                <OverlayTrigger trigger="click" placement="left" overlay={productPop}>
                  <Form.Label>Product</Form.Label>
                </OverlayTrigger>
                <Form.Control as="textarea" defaultdefaultValue={props.product} onChange={props.handleChange} rows={3} />
              </Form.Group>

              <Form.Group controlId="customers">
                <OverlayTrigger trigger="click" placement="left" overlay={customerPop}>
                  <Form.Label>Customers</Form.Label>
                </OverlayTrigger>
                <Form.Control as="textarea" defaultValue={props.customers} onChange={props.handleChange} rows={3} />
              </Form.Group>

              <Form.Group controlId="vision">
              <OverlayTrigger trigger="click" placement="left" overlay={visionPop}>
                  <Form.Label>Vision</Form.Label>
                </OverlayTrigger>
                <Form.Control as="textarea" defaultValue={props.vision} onChange={props.handleChange} rows={3} />
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

export default StepOne;