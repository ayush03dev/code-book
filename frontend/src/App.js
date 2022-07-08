import "./App.css";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CodeBox from "./components/CodeBox/CodeBox";
import InfoBox from "./components/InfoBox/InfoBox";
import InputBox from "./components/InputBox/InputBox";
import OutputBox from "./components/OutputBox/OutputBox";
import TitleBar from "./components/TitleBar/TitleBar";

function App() {
  return (
    <>
      <Container fluid>
        <TitleBar />

        <Row>
          <Col lg={6}>
            <InfoBox text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
          </Col>

          <Col lg={6}>
            <CodeBox />
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={6}>
            <InputBox />
          </Col>

          <Col lg={6}>
            <OutputBox />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
