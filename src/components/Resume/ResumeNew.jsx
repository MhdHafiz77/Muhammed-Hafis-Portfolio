import { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/Muhammed_Hafis.pdf";
import preview from "../../Assets/resume-preview.jpg";
import { AiOutlineDownload, AiOutlineEye, AiOutlineClose } from "react-icons/ai";

function ResumeNew() {
  const [show, setShow] = useState(false);

  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* Resume Card */}
      <div className="resume-card">
        <h3>My Resume</h3>

        {/* Preview Image */}
        <div className="resume-preview-container" onClick={() => setShow(true)}>
          <img src={preview} alt="Resume Preview" className="resume-preview" />
        </div>

        <div className="resume-actions">
          <Button variant="outline-light" onClick={() => setShow(true)}>
            <AiOutlineEye /> View
          </Button>

          <Button variant="primary" href={pdf} download>
            <AiOutlineDownload /> Download
          </Button>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <Modal show={show} onHide={() => setShow(false)} fullscreen>
        <Modal.Header className="resume-modal-header">
          <Button variant="outline-light" onClick={() => setShow(false)}>
            <AiOutlineClose /> Close
          </Button>
        </Modal.Header>

        <Modal.Body className="resume-modal-body">
          <iframe
            src={`${pdf}#toolbar=0`}
            title="Resume Viewer"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default ResumeNew;
