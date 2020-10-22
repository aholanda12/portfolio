import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function Project() {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <h1>About Page</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
        <h3>{props.title}</h3>
        <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
          <p>{props.department}</p>
          <p>{props.email}</p>
          <p>{props.phone}</p>
      </div>
        </Col>
      </Row>
    </Container >
  );
}

export default Project;
