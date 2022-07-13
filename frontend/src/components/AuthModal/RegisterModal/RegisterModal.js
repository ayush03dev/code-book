import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { openLogin, closeRegister } from "../../../actions/modalActions";

function RegisterModal({ registerModal, openLogin, closeRegister }) {
  if (!registerModal) return <></>;
  const handleClose = () => {
    closeRegister();
  };

  const openLoginModal = () => {
    closeRegister();
    openLogin();
  }

  return (
    <>
      <Modal show={registerModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register with CodeBook</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
          <Button onClick={openLoginModal} variant="secondary">
            Already have an account?
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => ({
  loginModal: state.modal.login,
  registerModal: state.modal.register,
});

export default connect(mapStateToProps, { closeRegister, openLogin })(
  RegisterModal
);
