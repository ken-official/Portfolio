import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import "./Experience.css";

const experiences = [
  {
    year: "2017",
    title: "Mikrotik Session",
    company: "Mikrotik",
    description:
      "Mikrotik Session is a plenary session that educates the participants the basic functionality and configuration of Mikrotik. In addition, a configuration event was done after the plenary session to test the learning zone of the partcipants",
  },
  {
    year: "2019",
    title: "Ubiquiti: The Innovative Lenght of Technology",
    company: "Ubiquiti Inc.",
    description:
      "Ubiquiti offers a plenary session that conducts at Cebu City. The session often features keynote presentations by industry experts, live demonstrations, and opportunities for interactive discussions, fostering collaboration and knowledge-sharing among participants.",
  },
  {
    year: "2024",
    title: "OJT - Process Engineer Back End",
    company: "Ibiden Phlipinnes Inc.",
    description:
      "During the summer OJT, we were accepted in IPI as an OJT. As part of computer engineering, we were assigned on the Backend to capitalize our knowledge on computer since they primary use gadgets as data gathering material and encoding for data sets inluding summarization of the previous logs of machines. Also, learned how to operate the machines they are using including calibrating them.",
  },
];

function Experience() {
  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll(".timeline-item");
      timelineItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <Container fluid className="experience-section">
        <Particle />
        <Container>
          <h1 className="experience-title">My <strong className="purple">Experience</strong></h1>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                key={index}
              >
                <div className="timeline-content">
                  <h3>{exp.year}</h3>
                  <h4>{exp.title}</h4>
                  <h5>{exp.company}</h5>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Experience;
