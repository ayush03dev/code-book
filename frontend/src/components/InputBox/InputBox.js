import React from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { updateInput } from "../../actions/codeActions";
import "./InputBox.css";

function InputBox({ updateInput, defaultValue }) {
  const onChange = (event) => {
    updateInput(event.target.value);
  };

  return (
    <>
      <div className="title">
        <span className="output">Input</span>
      </div>

      <Form.Control
        as="textarea"
        onChange={onChange}
        className="text-white input-box "
        defaultValue={defaultValue}
        style={{ resize: "none", border: "none", background: "#1e1e1e" }}
      />
    </>
  );
}

export default connect(null, { updateInput })(InputBox);
