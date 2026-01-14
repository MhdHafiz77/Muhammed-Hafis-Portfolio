import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="EDGER – E-Learning Platform"
              description="Full-stack academic e-learning platform built using Django, React, HTML, CSS, and Bootstrap. Implemented role-based authentication for Admin, Instructor, and Student users. Developed 30+ courses with quizzes, optimized database queries, and applied caching to improve page load performance by 40%."
              demoLink="#!"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="KREATIVE – Talent Casting Platform"
              description="Full-stack talent casting and location discovery platform using React, Node.js, Express, and MongoDB. Managed 100+ talents and 50+ filming locations with advanced filtering. Implemented media uploads up to 500MB and an automated booking system, reducing production planning time by 30%."
              demoLink="#!"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Commerce Web Application"
              description="Developed a full-stack e-commerce website with product listing, cart, checkout, and admin management. Implemented user authentication, REST APIs, and responsive UI using React, Node.js, Express, MongoDB, and Tailwind CSS."
              demoLink="#!"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Billing & Invoice System"
              description="Designed and developed a billing and invoicing system for a plywood company. Features include GST calculation, item-wise billing, customer management, printable invoices, and sales summaries using modern web technologies."
              demoLink="#!"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI For Social Good"
              description="Detects suicide-related posts using Natural Language Processing to help prevent suicides online."
              demoLink="#!" // Replace with actual demo later
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="CNN classifier trained on FER-2013 dataset using Keras and TensorFlow. Detects emotions in faces with OpenCV integration for face detection."
              demoLink="#!"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
