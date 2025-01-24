import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Robotic Arm"
              description="This project involves designing and implementing an embedded system to control a robotic arm. The system will utilize microcontrollers and sensors to achieve precise and reliable movement, enabling the arm to perform tasks autonomously or through user input. The project aims to explore the integration of hardware and software in robotic applications, focusing on real-time control, sensor feedback, and motion planning."
              ghLink="https://github.com/ken-official/Robotic-Arm-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AGILA Inventory System"
              description="This inventory system provides a streamlined solution for managing and tracking stock levels. It enables efficient monitoring of items, including quantities, locations, and related transactions. The system aims to optimize inventory control, minimize stockouts, and improve overall operational efficiency for businesses where Users can easily access and update inventory data, generate reports, and automate reordering processes."
              ghLink="https://github.com/ken-official/Inventory-System-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PIC Programmer"
              description="A PIC Programmer is a device used to transfer machine code from a computer to a PIC (Peripheral Interface Controller) microcontroller. It acts as an interface between the development environment and the microcontroller, allowing engineers to program, erase, and debug the chip. PIC Programmers are essential tools in embedded systems development, enabling customization and functionality testing of microcontrollers."
              ghLink="https://github.com/ken-official/PIC-Programmer"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
