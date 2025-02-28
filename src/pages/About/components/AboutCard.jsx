import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Rajat Singh </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />
            I have around 6 years of intense development experience.
            <br />I am currently employed as a Sr. software engineer at{' '}
            <span className="purple">HDFC Securities</span>.
            <br />
            Previously I was with <span className="purple">Slice</span>.
            <br />
            I have completed my Engineering in Computer science from Jaypee
            Institute of Information Technology, Noida.
            <br />
            <br />
            Apart from work, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />{' '}
              <a
                href="https://iamrajatsingh.medium.com/"
                target="_blank"
                rel="noreferrer"
                className="purple"
              >
                Writing Tech Blogs
              </a>
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Love to play Guitar.
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            &quot;Strive to build things that make a difference!&quot;{' '}
          </p>
          <footer className="blockquote-footer">Rajat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
