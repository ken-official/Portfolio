import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle"; 
import "./Achievements.css"; 

import certificateImage1 from '../../Assets/Projects/8.png'; 
import certificateImage2 from '../../Assets/Projects/Me.PNG';
import certificateImage3 from '../../Assets/Projects/232.png';

const achievementsDetails = [
  {
    title: "Deans Lister Certificate",
    institution: "CSU-Carig Campus",
    year: "2023",
    description:
      "This certificate is awarded in recognition of outstanding academic achievement, signifying the recipient's inclusion on the Dean's List for exemplary performance during the specified term. It honors their dedication, perseverance, and excellence in maintaining a high grade point average, setting a standard of academic distinction.",
    certificateImage: certificateImage2, 
  },
  {
    title: "KiCAD PCB Design Workshop Certificate",
    institution: "ICPEP.SE",
    year: "2024 - Organizer",
    description:
      "This certificate is awarded to recognize of being an organizer in the KiCAD PCB Design Workshop, a specialized event dedicated to KiCad, the open-source PCB design software. It highlights the recipient’s commitment to learning, sharing, and advancing their skills in electronic design and innovation.",
    certificateImage: certificateImage1, 
  },
  {
    title: "KiCAD PCB Design Workshop Certificate",
    institution: "ICPEP.SE",
    year: "2024 - Participant",
    description:
      "This certificate is awarded to recognize of being an attendee in the KiCAD PCB Design Workshop, a specialized event dedicated to KiCad, the open-source PCB design software. It highlights the recipient’s commitment to learning, sharing, and advancing their skills in electronic design and innovation.",
    certificateImage: certificateImage3, 
  },
  
];

function Achievements() {

  const openCertificate = (image) => {
    window.open(image, "_blank"); 
  };

  return (
    <section>
      <Container fluid className="achievements-section">
        <Particle /> {/* Keep the particles background from Education section */}
        <Container>
          <h1 className="achievements-title">
            My <strong className="purple">Achievements</strong>
          </h1>
          <div className="achievements-container">
            {achievementsDetails.map((achievement, index) => (
              <div className="achievement-card" key={index}>
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <h4>{achievement.institution}</h4>
                  <h5>{achievement.year}</h5>
                  <p>{achievement.description}</p>
                  <div
                    className="certificate-holder"
                    onClick={() => openCertificate(achievement.certificateImage)} 
                    role="button" 
                    tabIndex={0} 
                    onKeyPress={(e) =>
                      e.key === "Enter" && openCertificate(achievement.certificateImage)
                    } 
                  >
                    <img
                      src={achievement.certificateImage}
                      alt={`${achievement.title} Certificate`}
                      className="certificate-image"
                    />
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

export default Achievements;
