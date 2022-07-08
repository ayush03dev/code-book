import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { updateTitle } from "../../actions/codeActions";

import "./TitleBar.css";

function TitleBar({ updateTitle }) {
  const onChange = (event) => {
    updateTitle(event.target.value);
  };

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
          <Button variant="success" style={{ float: "right" }}>
            Save
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default connect(null, { updateTitle })(TitleBar);
