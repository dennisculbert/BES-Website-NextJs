import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "./Carousal";

function Portfolio({ portfolioImages }) {
  return (
    <Row className="py-5 porfolio_mobile_view">
      <Container>
        <Row className="justify-content-center our_portfolio">
          <h1>OUR PORTFOLIO</h1>
        </Row>
        <Row className="justify-content-center">
          <Col md={12}>
            <Carousel portfolioImages={portfolioImages} />
          </Col>
        </Row>
      </Container>
    </Row>
  );
}

Portfolio.propTypes = {
  portfolioImages: PropTypes.arrayOf(PropTypes.object),
};

export default Portfolio;
