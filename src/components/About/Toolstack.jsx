import { Col, Row } from "react-bootstrap";

import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";

const tools = [
  { name: "Mac OS", icon: macOs },
  { name: "Google Chrome", icon: chrome },
  { name: "VS Code", icon: vsCode },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col xs={4} md={2} className="tech-icons" key={tool.name}>
          <img
            src={tool.icon}
            alt={tool.name}
            className="tech-icon-images"
          />
          <div className="tech-icons-text">{tool.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
