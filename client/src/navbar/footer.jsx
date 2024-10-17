import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={3}>
            <h4>NOLIMIT</h4>
            <p>
              NOLIMIT, retail chain takes pride in its Sri Lankan roots but offers
              a world-class retail experience that drives customer loyalty while
              setting new benchmarks in customer-centricity.
            </p>
            <div className="certificates">
              <img src="/path/to/certificate1.png" alt="Certificate 1" />
              <img src="/path/to/certificate2.png" alt="Certificate 2" />
            </div>
            <div className="recaptcha">
              <img src="/path/to/recaptcha.png" alt="reCAPTCHA" />
            </div>
          </Col>

          <Col md={3}>
            <h4>INFORMATION</h4>
            <ol className="footer-links">
              <li>FAQ</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Delivery Details</li>
              <li>Return Policy</li>
              <li>NOLIMIT CIRCLE</li>
              <li>Store Locations</li>
            </ol>
          </Col>

          <Col md={3}>
            <h4>GET IN TOUCH</h4>
            <ol className="contact-info">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>WhatsApp</li>
              
              <li>TikTok</li>
            </ol>
            <p>Head office: No.18, Kawdana Road, Dehiwala</p>
            <p>Phone: 0112 737 441</p>
            <p>Email: info@nolimit.lk</p>
          </Col>

          <Col md={3}>
            <h4>SUBSCRIBE TO NEWSLETTER</h4>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
            <p>
              By subscribing, you agree to receive promotional and personalized marketing emails.
            </p>
            <div className="payment-methods">
              <img src="/path/to/visa.png" alt="Visa" />
              <img src="/path/to/mastercard.png" alt="MasterCard" />
              <img src="/path/to/koko.png" alt="Koko" />
              <img src="/path/to/intpay.png" alt="Intpay" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
