import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import "./Education.css"; // Import the new styles for Education

const educationDetails = [
  {
    year: "2009 - 2015",
    title: "Cauayan West Central School",
    institution: "Cauayan West Central School",
    description:
      "Graduated as a Salutatorian during my 6th Grade and a consistent Honor Student",
  },
  {
    year: "2015 - 2021",
    title: "Cauayan City National High School - Main Campus",
    institution: "Cauayan City National High School - Main Campus",
    description:
      "Graduated with high honors in Science, Technology, Engineering and Mathematics during Junior and Senior High School. Active participant in school’s tech club.",
  },
  {
    year: "2021 - PRESENT",
    title: "Cagayan State University - Carig Campus",
    institution: "Cagayan State University - Carig Campus",
    description:
      "Currently taking Bachelor of Computer Engineering and an active ICPEP.SE Officer during my 1st Year up to current ",
  },
];

function Education() {
  return (
    <section>
      <Container fluid className="education-section">
        <Particle /> {/* Keep the particles background */}
        <Container>
          <h1 className="education-title">My <strong className="purple">Education</strong></h1>
          <div className="flashcards-container">
            {educationDetails.map((edu, index) => (
              <div className="flashcard" key={index}>
                <div className="flashcard-inner">
                  <div className="flashcard-front">
                    <h3>{edu.year}</h3>
                    <h4>{edu.title}</h4>
                  </div>
                  <div className="flashcard-back">
                    <h4>{edu.institution}</h4>
                    <p>{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Education;
