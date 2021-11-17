import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { API_URL } from "../../apiServices";

function WhoWeAre({ data }) {
  return (
    <Row style={{ backgroundColor: "#F8F8F8" }} className="p-5 mobile_view">
      <Container>
        <Row className="services_intro_div">
          <Col md={6}>
            <h1 className="who_we_are">{data.heading}</h1>
            <p className="who_we_are_p-tag tag-width">{data.description}</p>
            <Link href="/about-us">
              <a>
                <Button className="btn_get-now">Read More</Button>
              </a>
            </Link>
          </Col>
          <Col md={6} className="text-center who-image">
            <img
              src={API_URL + data.sectionImage.url}
              alt={data.sectionImage.filename}
            />
          </Col>
        </Row>
      </Container>
    </Row>
  );
}

WhoWeAre.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WhoWeAre;
