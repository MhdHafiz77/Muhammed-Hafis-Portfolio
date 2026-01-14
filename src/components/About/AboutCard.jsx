import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Muhammed Hafis</span> from{" "}
            <span className="purple">Kerala, India</span>.
            <br />
            I am an aspiring{" "}
            <span className="purple">Software Engineer</span> with a strong
            interest in{" "}
            <span className="purple">Full Stack Web Development</span>.
            <br />
            I have completed my studies in{" "}
            <span className="purple">Computer Science</span> and have hands-on
            experience building real-world applications using the{" "}
            <span className="purple">MERN Stack</span>.
            <br />
            <br />
            I enjoy solving problems, learning new technologies, and building
            user-friendly web applications that solve real-world problems.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Web Applications 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving & Coding 🧠
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Consistency and learning every day lead to growth.”
          </p>

          <footer className="blockquote-footer">
            Muhammed Hafis
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
