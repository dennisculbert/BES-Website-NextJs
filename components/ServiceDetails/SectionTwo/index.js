import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import parse from "html-react-parser";
import { API_URL } from "../../../apiServices";

const ServiceDetailsSecondSection = ({ data }) => (
  <Row className="service-details-section-two">
    <Container>
      <Row className="service-details-section-two-inner">
        <Col
          md={6}
          className="service-details-section-two-img d-flex justify-content-center align-items-center"
        >
          <img
            src={API_URL + data.sectionImage.url}
            alt={data.sectionImage.filename}
          />
        </Col>
        <Col
          md={6}
          className="pt-md-0 pt-3 service-details-section-two-content d-flex flex-column justify-content-center"
        >
          <h1>{data.heading}</h1>
          <h2>{data.subheading}</h2>
          <p>{parse(data.description)}</p>
        </Col>
      </Row>
    </Container>
  </Row>
);

ServiceDetailsSecondSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ServiceDetailsSecondSection;
