import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { execute } from "../../actions/codeActions";
import "./OutputBox.css";

function OutputBox({ code, execute, loading }) {

  const onRun = () => {
    execute(code.code, code.input, code.language);
  }

  return (
    <>
      <div className="title">
        <span className="output">Output</span>
        <Button className="submit-btn" variant="primary" disabled={loading.loading} onClick={onRun}>
          Run
        </Button>
      </div>

      <div className="output-box text-white" style={{ background: "#1e1e1e", overflow: "auto" }}>{loading.loading ? "Executing..."
        : code.output ? [code.output.split("\n").map(
          (line, idx) => <p>{line}</p>)] : <></>} </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  code: state.code,
  loading: state.loading
});

export default connect(mapStateToProps, { execute })(OutputBox);
