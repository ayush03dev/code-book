import React from "react";
import { Form } from "react-bootstrap"; 
import { connect } from "react-redux";
import { updateInfo } from "../../actions/codeActions";
import "./InfoBox.css";

function InfoBox({ text, updateInfo }) {
  const onChange = event => {
    updateInfo(event.target.value);
  }

  return (
    <div className="info-box">
      <div className="title">
        <span className="info">Description</span>
      </div>
      <Form.Control onChange={onChange} style={{height: '100%' }} as="textarea" className="bg-dark text-white" />
    </div>
  );
}

export default connect(null, {updateInfo})(InfoBox);
