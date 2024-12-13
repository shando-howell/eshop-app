import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

// To add functionality

function EmailPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Need A Discount?
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Email Address Below</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
                type="email"
                placeholder="Your email here"
            >    
            </Form.Control>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Claim Your Discount</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EmailPopup;