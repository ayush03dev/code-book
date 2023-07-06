import React, { useLayoutEffect } from "react";
import "./Snippet.css";
import { Row, Col, Container, Spinner } from "react-bootstrap";
import CodeBox from "../../components/CodeBox/CodeBox";
import InfoBox from "../../components/InfoBox/InfoBox";
import InputBox from "../../components/InputBox/InputBox";
import OutputBox from "../../components/OutputBox/OutputBox";
import TitleBar from "../../components/TitleBar/TitleBar";
import LoginModal from "../../components/AuthModal/LoginModal/LoginModal";
import RegisterModal from "../../components/AuthModal/RegisterModal/RegisterModal";
import { connect } from "react-redux";
import { retrieveSnippet } from "../../actions/snippetActions";
import { useParams } from "react-router-dom";
import Navigation from "../../components/NavBar/Navigation";

function Snippet({ snippet, retrieveSnippet }) {
  const { id } = useParams();

  useLayoutEffect(() => {
    retrieveSnippet(id);
  }, []);

  return (
    <>
      <Navigation />

      {snippet.loading ? (
        <Spinner />
      ) : (
        <Container fluid>
          <TitleBar isSnippet={true} defaultValue={snippet.title} />
          <Row>
            <Col lg={6}>
              <InfoBox text={snippet.description} disabled={true} />
            </Col>

            <Col lg={6}>
              <CodeBox defaultValue={snippet.code} snippetLang={snippet.language} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg={6}>
              <InputBox defaultValue={snippet.input} />
            </Col>

            <Col lg={6}>
              <OutputBox />
            </Col>
          </Row>
        </Container>
      )}
      <LoginModal />
      <RegisterModal />
    </>
  );
}

const mapStateToPros = (state) => ({
  snippet: state.snippet,
});

export default connect(mapStateToPros, { retrieveSnippet })(Snippet);
