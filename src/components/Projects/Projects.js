import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agrovision from "../../Assets/Projects/agrovision.png";
import learnflow from "../../Assets/Projects/Learnflow.jpg";
import salesPrediction from "../../Assets/Projects/sales.jpg";
import searchify from "../../Assets/Projects/searchify.jpg";
import farmtech from "../../Assets/Projects/FARM.png";
import cabpriorityfinder from "../../Assets/Projects/CAB.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some innovative projects I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agrovision}
              isBlog={false}
              title="AgroVision: AI-Based Crop Disease Detection"
              description="Frequent crop failures due to delayed disease detection cause massive losses. This project leverages thermal imaging, deep learning, and LLMs to identify diseases early, providing actionable insights and data-driven decisions for farmers."
              ghLink="https://github.com/Rohith1968/agrovision"
              demoLink="https://agrovision.ai"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learnflow}
              isBlog={false}
              title="LearnFlow: Scalable Learning Platform"
              description="Traditional educational platforms lack interactivity and scalability. LearnFlow is a robust platform with role-based access, threaded discussions, and interactive content delivery. It enhances user engagement and fosters a dynamic learning experience."
              ghLink="https://github.com/Rohith1968/learnflow"
              demoLink="https://learnflow.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salesPrediction}
              isBlog={false}
              title="Sales Prediction System"
              description="Developed a machine learning-powered system to predict sales trends and enhance agricultural decision-making. Integrated real-time data, weather APIs, and disease detection tools. Designed intuitive Power BI dashboards for better inventory planning."
              ghLink="https://github.com/Rohith1968/sales-prediction"
              demoLink="https://salesprediction.tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={searchify}
              isBlog={false}
              title="Searchify: DSA Search Engine"
              description="Finding relevant DSA problems quickly can be difficult for learners. Searchify, powered by TF-IDF and BM25 algorithms, provides an efficient search engine tailored for DSA topics. It streamlines access to curated problems and improves learning outcomes."
              ghLink="https://github.com/Rohith1968/searchify"
              demoLink="https://searchify.dev"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farmtech}
              isBlog={false}
              title="FarmTech App: Smart Agricultural System"
              description="Farmers often face inefficiencies due to a lack of real-time data and automated solutions. FarmTech App integrates IoT and machine learning, offering real-time guidance and automated resource management, empowering smarter agricultural practices."
              ghLink="https://github.com/Rohith1968/farmtech-app"
              demoLink="https://farmtech.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cabpriorityfinder}
              isBlog={false}
              title="CabPriorityFinder"
              description="Developed an intelligent cab allocation system to optimize ride-sharing for commuters and drivers. Implements priority-based queueing and predictive analysis to assign cabs efficiently, reducing waiting time and optimizing driver utilization."
              ghLink="https://github.com/Rohith1968/cabpriorityfinder"
              demoLink="https://cabpriorityfinder.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
