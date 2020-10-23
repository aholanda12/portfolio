import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Project from "../components/ProjectCard";
import projects from "../projects.json";

class Projects extends Component {
  state = {
    projects
  };

  render() {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
        {this.state.projects.map(project => (
          <Project
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            deployed={project.deployed}
            github={project.github} 
            /> 
            ))}
        </Col>
      </Row>
    </Container >
  );
}
}


export default Projects;
