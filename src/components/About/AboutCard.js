import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rajat Singh </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />
            I have around 5 years of intense development experience. 
            <br />
            I am currently employed as a Sr. software engineer at a Trading firm. 
            <br />
            Previously I was with Slice.
            <br />
            I have completed my Engineering in Computer science from Jaypee Institute of Information Technology, Noida.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Love to play Guitar.
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rajat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
