import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/rajat_singh_avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiMedium } from "react-icons/si";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              In the last 5 years, I worked primarily on complex Javascript web applications.
              In this period I become intimately familiar with Javascript, its ecosystem, and writing high-performance, maintainable, and scalable web apps.
              <br />
              <br />

              While I love building
              <i><b className="purple">{" "}Web applications</b></i>,
              I'm equally passionate about <i><b className="purple">Mentorship</b></i>.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks.
                </b>
              </i>
              <br />
              <br />
              On the frontend, I excel in
              <i>
                <b className="purple">{" "}VanillaJs, React.js, and Next.js</b>
              </i>.
              For backend development, I am proficient in
              <i>
                <b className="purple">{" "}Node.js and Nest.js</b>
              </i>.
              My database expertise extends to
              <i>
                <b className="purple">{" "}MongoDB and PostgreSQL</b>
              </i>,
              while I am well-versed in utilizing <i><b className="purple">AWS</b></i> for cloud services."
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/iamrajatsingh1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/iamrajatsingh1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://iamrajatsingh1.medium.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiMedium />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
