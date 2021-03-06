import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import './investModal.css';

const InvestModal = props => {

    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-background"
    >
      <Modal.Header closeButton className="modal-header">
        <Modal.Title id="contained-modal-title-vcenter">
          Invest in {props.name}:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <p>
         How much are you investing ?
        </p>
        <input type={Range}/>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <Button className="article-button">Submit</Button><Button className="article-button" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default InvestModal;