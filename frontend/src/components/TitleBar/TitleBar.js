import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { updateTitle } from "../../actions/codeActions";
import { openLogin } from "../../actions/modalActions";
import { saveSnippet } from "../../actions/snippetActions";

import "./TitleBar.css";

function TitleBar({
  updateTitle,
  openLogin,
  auth,
  code: { title, description, code, language, input },
  saveSnippet,
  isSnippet,
  defaultValue
}) {
  const onChange = (event) => {
    updateTitle(event.target.value);
  };

  const login = () => {
    openLogin();
  };

  const onSaveSnippet = () => {
    saveSnippet(code, language, title, description, input, auth.token);
  };

  return (
    <div className="title-bar">
      <Row>
        <Col>
          <input
            type="text"
            className="title-name"
            defaultValue={defaultValue}
            onChange={onChange}
            disabled={isSnippet}
            style={{ fontSize: '2rem' }}
          />
        </Col>
        {!isSnippet ? (
          <Col>
            {!auth.auth ? (
              <Button
                onClick={login}
                variant="success"
                style={{ float: "right" }}
              >
                Login to Save
              </Button>
            ) : (
              <Button
                onClick={onSaveSnippet}
                variant="success"
                style={{ float: "right" }}
              >
                Save
              </Button>
            )}
          </Col>
        ) : (
          <></>
        )}
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  code: state.code,
});

export default connect(mapStateToProps, {
  updateTitle,
  openLogin,
  saveSnippet,
})(TitleBar);
