import React, { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { connect } from "react-redux";
import { updateCode, updateLanguage } from "../../actions/codeActions";

import "./CodeBox.css";

function CodeBox({ updateCode, updateLanguage, language, code, snippetLang }) {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function handleChange(value, event) {
    updateCode(value);
  }

  function handleLanguageChange(event) {
    const lang = event.target.value;
    updateLanguage(lang);
    if (lang === "java") {
      updateCode(`import java.util.*;

      class Program {
          public static void main(String[] args) {
           System.out.println("Hello World!");
          }
      }`);
    } else if (lang === "python") {
      updateCode(`print("Hello World!")`);
    } else if (lang === "cpp") {
      updateCode(`#include <iostream>
      using namespace std;
        
      int main()
      {
          cout << "Hello World";
      }`)
    }
  }

  return (
    <div>
      <div className="title">
        <span className="output">Code Editor</span>
        <select style={{ float: "right" }} disabled={snippetLang} defaultValue={snippetLang ? snippetLang : "java"} onChange={handleLanguageChange} name="languages" id="languages">
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
        </select>
      </div>
      <Editor
        className="editor"
        height="25rem"
        theme="vs-dark"
        defaultLanguage={language}
        value={code}
        onMount={handleEditorDidMount}
        onChange={handleChange}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  language: state.code.language,
  code: state.code.code
});

export default connect(mapStateToProps, { updateCode, updateLanguage })(CodeBox);
