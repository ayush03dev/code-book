import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { updateTitle } from "../../actions/codeActions";
import { openLogin } from "../../actions/modalActions";

import "./TitleBar.css";

function TitleBar({ updateTitle, openLogin }) {
  const onChange = (event) => {
    updateTitle(event.target.value);
  };

  const login = () => {
    openLogin();
  }

  return (
    <div className="title-bar">
      <Row>
        <Col>
          <input
            type="text"
            className="title-name"
            defaultValue="Unnamed Snippet"
            onChange={onChange}
          />
        </Col>
        <Col>
          <Button onClick={login} variant="success" style={{ float: "right" }}>
            Save
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default connect(null, { updateTitle, openLogin })(TitleBar);
