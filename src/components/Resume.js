import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const options = [
  {
    name: 'Let\'s Connect',
    scroll: true,
    backdrop: true,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const downloadResume = () => {
    window.open("assets/resume.pdf", "_blank")
  }

  return (
    <>
      <Button variant="light" onClick={toggleShow} className="me-2" id='resumeButton'>
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton id='resumeBanner'>
          <Offcanvas.Title id="resumeTitle">Resume</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id="resumeBody">
          <br></br>
          I would love to hear your thoughts on my work.
          Get my resume for my contact details
          <br></br><br></br>
          {/* Add a button to view and download resume */}
          <Button variant="primary" onClick={downloadResume}>Download</Button>{' '}
          <br></br>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export const Resume = () => {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}
