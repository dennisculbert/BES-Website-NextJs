import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

function AboutUsText({ data }) {
  return (
    <Container>
      <Row className="aboutUs_textBlock">
        <Col md={12} className="text-center text-md-center">
          <h3 className="aboutUs_Title text-center text-uppercase">
            {data.heading}
          </h3>
          <div className="AboutUs_InnerDetail">
            <p className="AboutUs_Para">{data.description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

AboutUsText.propTypes = {
  data: PropTypes.object,
};

export default AboutUsText;
