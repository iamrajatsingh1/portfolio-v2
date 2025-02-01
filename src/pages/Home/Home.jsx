import { Container, Row, Col } from 'react-bootstrap';
import Avatar from '../../temp-assets/rajat_singh_avatar.png';
import Particle from '../Particle.jsx';
import IntroductionComponent from './components/Introduction.jsx';
import Type from './components/Type.jsx';

const Homepage = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I&apos;m
                <strong className="main-name"> Rajat Singh</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={Avatar}
                alt="avatar"
                className="img-fluid"
                style={{ maxHeight: '450px' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <IntroductionComponent />
    </section>
  );
};

export default Homepage;
