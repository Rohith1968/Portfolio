import React from "react";
import "./Publications.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Publications() {
  return (
    <Container fluid className="publications-section">
      <h1 className="heading">
        📚 <strong className="purple">Publications</strong>
      </h1>
      <Row style={{ justifyContent: "center" }}>
        <Col md={8} className="publication-card">
          <Card className="publication-card-view">
            <Card.Body>
              <Card.Title>
                <strong>Comparative Analysis of Algorithmic Approaches in Recommendations</strong> (July 2024)
              </Card.Title>
              <Card.Text>
                Performed an in-depth comparative analysis of advanced algorithmic methodologies in personalized recommendation systems, assessing their performance and adaptability across diverse use cases.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8} className="publication-card">
          <Card className="publication-card-view">
            <Card.Body>
              <Card.Title>
                <strong>Predicting Sales Using Machine Learning Techniques</strong> (May 2024)
              </Card.Title>
              <Card.Text>
                Conducted research to develop a predictive sales forecasting model using various machine learning algorithms by analyzing historical sales data, market trends, and external factors.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Publications;
