import React from "react";
import "./Internships.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Internships() {
  return (
    <Container fluid className="internships-section">
      <h1 className="heading">
        💼 <strong className="purple">Internships & Experience</strong>
      </h1>
      <Row style={{ justifyContent: "center" }}>
        <Col md={8} className="internship-card">
          <Card className="internship-card-view">
            <Card.Body>
              <Card.Title><strong>Product Development Intern</strong> - Farm To Plate (Jan 2025 - Present)</Card.Title>
              <Card.Text>
                Working on innovative product development strategies to enhance user experience and optimize workflow automation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8} className="internship-card">
          <Card className="internship-card-view">
            <Card.Body>
              <Card.Title><strong>Software Engineer Intern</strong> - Rashtriya Ispat Nigam Limited (Aug 2023 - Oct 2023)</Card.Title>
              <Card.Text>
                Developed scalable software solutions, implemented automation strategies, and enhanced backend API performance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Internships;
