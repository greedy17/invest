import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import './centeredModal.css';

const CenteredModal = props => {

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
          {props.name}'s Investments:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <p>
          Investment 1.
        </p>
        <p>
          Investment 2.
        </p>
        <p>
          Investment 3.
        </p>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <Button className="article-button" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CenteredModal;