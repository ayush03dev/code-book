import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../../actions/authActions";
import { closeLogin, openRegister } from "../../../actions/modalActions";

function LoginModal({ loginModal, closeLogin, openRegister, login }) {
  if (!loginModal) return <></>;
  const defaultState = { email: "", password: "" };
  const [fields, setFields] = useState(defaultState);

  const onChange = (event) => {
    setFields({...fields, [event.target.name]: event.target.value});
  };

  const handleClose = () => {
    closeLogin();
  }

  const openRegisterModal = () => {
    openRegister();
  }

  const attemptLogin = () => {
    login(fields.email, fields.password);
  }

  return (
    <>
      <Modal show={loginModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login to CodeBook</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                autoFocus
                required
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                required
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={attemptLogin} variant="primary">
            Submit
          </Button>
          <Button variant="secondary" onClick={openRegisterModal}>
            Don't have an account?
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

export default connect(mapStateToProps, { login, openRegister, closeLogin })(LoginModal);
