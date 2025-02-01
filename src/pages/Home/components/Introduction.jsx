import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
// import Tilt from 'react-parallax-tilt';
import myImg from '../../../assets/rajat_singh_avatar.png';

function IntroductionComponent() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6rem' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have around 6 years of experience in fullstack development,
              leading teams, and delivering high-performance applications across
              diverse industries. I am highly familiar with JavaScript and its
              ecosystem, and excel in building high-performance, maintainable,
              and scalable apps.
              <br />
              <br />
              While I love building
              <i>
                <b className="purple"> applications</b>
              </i>
              , I&apos;m equally passionate about{' '}
              <i>
                <b className="purple">Mentorship</b>
              </i>
              .
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple">
                  {' '}
                  Modern Javascript Library and Frameworks.
                </b>
              </i>
              <br />
              <br />
              On the frontend, I excel in
              <i>
                <b className="purple">
                  {' '}
                  VanillaJs, React.js, Next.js, HTML, CSS.
                </b>
              </i>
              <br />
              For backend development, I am proficient in
              <i>
                <b className="purple"> Node.js and Nest.js.</b>
              </i>
              <br />
              My database expertise extends to
              <i>
                <b className="purple"> MySQL, MongoDB and PostgreSQL.</b>
              </i>
              <br />I am also well-versed in utilizing{' '}
              <i>
                <b className="purple">AWS</b>
              </i>{' '}
              for cloud services.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt> */}
            <img src={myImg} className="img-fluid" alt="avatar" />
            {/* </Tilt> */}
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
                  href="https://iamrajatsingh.medium.com/"
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
export default IntroductionComponent;
