import React from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { updateInput } from "../../actions/codeActions";
import "./InputBox.css";

function InputBox({updateInput}) {

  const onChange = (event) => {
    updateInput(event.target.value);
  }

  return (
    <>
      <div className="title">
        <span className="output">Input</span>
      </div>

      <Form.Control as="textarea" onChange={onChange} className="bg-dark text-white input-box " />
    </>
  );
}

export default connect(null, {updateInput})(InputBox);
