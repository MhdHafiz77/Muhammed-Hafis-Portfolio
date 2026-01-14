import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

import myImg from "../../Assets/avatar.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              I am a passionate <b className="purple">Software Engineer</b> with a
              strong interest in building clean, efficient, and scalable web
              applications.
              <br />
              <br />
              I have hands-on experience working with
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.js, Node.js, Express.js, MongoDB, Python, and
                  Django
                </b>
              </i>
              , and I enjoy working across both frontend and backend development.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  full-stack web applications, RESTful APIs,{" "}
                </b>
              </i>
              and responsive user interfaces.
              <br />
              <br />
              I enjoy building projects using
              <b className="purple"> MERN Stack </b>
              and continuously improving my skills by working on real-world
              applications.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
