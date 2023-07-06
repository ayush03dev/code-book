import React from "react";
import "./Home.css";
import { Row, Col, Container } from "react-bootstrap";
import CodeBox from "../../components/CodeBox/CodeBox";
import InfoBox from "../../components/InfoBox/InfoBox";
import InputBox from "../../components/InputBox/InputBox";
import OutputBox from "../../components/OutputBox/OutputBox";
import TitleBar from "../../components/TitleBar/TitleBar";
import LoginModal from "../../components/AuthModal/LoginModal/LoginModal";
import RegisterModal from "../../components/AuthModal/RegisterModal/RegisterModal";
import Navigation from "../../components/NavBar/Navigation";
import LinkModal from "../../components/LinkModal/LinkModal";

function Home() {
  return (
    <>
      <Navigation />

      <Container fluid>
        <TitleBar defaultValue="Enter title of snippet" />
        <Row>
          <Col lg={6}>
            <InfoBox text="You can add your own information for this snippet here" disabled={false} />
          </Col>

          <Col lg={6}>
            <CodeBox />
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={6}>
            <InputBox defaultValue="Enter your own input here. Erase this line for entering your own inputs!" />
          </Col>

          <Col lg={6}>
            <OutputBox />
          </Col>
        </Row>
      </Container>
      <LoginModal />
      <RegisterModal />
      <LinkModal />
    </>
  );
}

export default Home;
