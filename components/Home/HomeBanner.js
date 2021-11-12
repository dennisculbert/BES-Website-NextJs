import { Row, Col, Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import Link from "next/link";
import { API_URL } from "../../apiServices";

function HomeBanner({ data }) {
  return (
    <Row
      className="banner"
      style={{
        background: `url("${API_URL + data.backgroundImage.url}")`,
      }}
    >
      <Container>
        <Row>
          <Col
            md={6}
            className="pt-md-5 banner_content d-flex flex-column justify-content-center"
          >
            <h3> {data.heading.topHeading}</h3>
            <h1 className="header_solution">{data.heading.mainHeading}</h1>
            <h5>{data.heading.subHeading}</h5>
            <p>{data.description}</p>
            <div>
              <Link href="/about-us">
                <a>
                  <Button className="btn-banner">Discover Us</Button>
                </a>
              </Link>
            </div>
          </Col>
          <Col md={6} className="banner_img pt-md-5 pt-4">
            <img src={API_URL + data.sectionImage.url} alt="" />
          </Col>
        </Row>
      </Container>
    </Row>
  );
}

HomeBanner.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomeBanner;
