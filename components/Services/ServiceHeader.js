import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { API_URL } from "../../apiServices";

function ServiceHeader({ banner }) {
  return (
    <Container fluid>
      <Row className="services">
        <Container>
          <Row className="services_top">
            <Col md={6} className="services_content">
              <h1 className="services_header">{banner.heading}</h1>

              <p>{banner.description}</p>
            </Col>
            <Col md={6} className="services_img">
              <img
                src={`${API_URL + banner.sectionImage.url}`}
                className="header-img"
                alt={banner.sectionImage.filename}
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

ServiceHeader.propTypes = {
  banner: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sectionImage: PropTypes.object.isRequired,
  }),
};

export default ServiceHeader;
