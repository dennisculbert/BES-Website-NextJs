import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { API_URL } from "../../apiServices";

function ContactBanner({ data }) {
  return (
    <Container fluid>
      <Row
        className="contact_page"
        style={{ background: `url("${API_URL + data.backgroundImage.url}")` }}
      >
        <Container>
          <Row className="contact_top">
            <Col md={6} className="contact_content pl-lg-5">
              <h1 className="contact_header">{data.heading}</h1>
              <p>{data.description}</p>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

ContactBanner.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactBanner;
