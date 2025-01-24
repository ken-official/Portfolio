import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mc Kenny D. Cuaresma </span>
            from <span className="purple"> Cauayan City, Isabela.</span>
            <br />
            I am a Computer Engineering Student.
            <br />
            I’m passionate about technology and enjoy working on projects like coding applications, building hardware systems, and exploring new innovations in the tech world.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Tinkering with Gadgets
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Videos related to Technology
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sundar Pichai, CEO of Google and Alphabet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
