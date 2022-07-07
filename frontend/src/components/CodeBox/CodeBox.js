import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import { connect } from "react-redux";
import { updateCode } from "../../actions/codeActions";
import "./CodeBox.css";

function CodeBox({ updateCode }) {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function handleChange(value, event) {
    updateCode(value);
  }

  const defaultCode = `import java.util.*;

  class Program {
      public static void main(String[] args) {
       // Write code here
      }
  }`;
  return (
    <div>
      <div className="title">
        <span className="output">Code Editor</span>
      </div>
   
      <Editor
        className="editor"
        height="25rem"
        theme="vs-dark"
        defaultLanguage="java"
        defaultValue={defaultCode}
        onMount={handleEditorDidMount}
        onChange={handleChange}
      />
    </div>
  );
}

export default connect(null, { updateCode })(CodeBox);
