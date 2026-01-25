import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon/linkedin.svg";
import navIcon2 from "../assets/img/nav-icon/github.svg";
import navIcon3 from "../assets/img/nav-icon/instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            <div className="social-icon mb-2">
              <a href="https://www.linkedin.com/in/rafatokairin/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/rafatokairin" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/rafatokairin/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>

            <p className="mb-0">
              Copyright {new Date().getFullYear()}. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
