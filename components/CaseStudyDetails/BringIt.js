import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import parse from "html-react-parser";
import { API_URL } from "../../apiServices";

const BringIt = ({ data }) => (
  <div>
    <Container fluid className="main-bringIt">
      <Container className="px-0">
        <Row className="pt-5 pb-5">
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="bringIt-details ">
              <h1>Bringing It All</h1>
              <p>{parse(`${data.description}`)}</p>
            </div>
          </Col>
          <Col md={6} className="image-main-div ">
            <div className="bringIt-image">
              <img
                className="case-study-image"
                src={API_URL + data.image.url}
                alt={data.image.filename}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  </div>
);

BringIt.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BringIt;
