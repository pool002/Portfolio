import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/footer_logo.png"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from "../assets/img/github_icon.svg";
import navIcon3 from '../assets/img/docker_icon.png';

export const Footer = () => {
  const scrollPageUp = () => {
    document.location.href = "#home"
  } 
  return (
    <div className="foot">
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={10} sm={4} id="footer_logo">
              <div onClick={scrollPageUp}>
                <img src={logo} alt="Logo"></img>
              </div>
            </Col>
            <Col size={10} sm={8} className="text-center text-sm-end">
              <div className="social-icon">
              <a href="https://www.linkedin.com/in/rahul-b-134437257" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/pool002" target="_blank"><img src={navIcon2} alt="Github" /></a>
              <a href="https://hub.docker.com/r/captainpool/web_hacking_tools" target="_blank"><img src={navIcon3} alt="Docker" /></a>
              </div>
              <p>Last Updated: August 2023</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}
