import PropTypes from "prop-types";
import Link from "next/link";
import { Container, Row, Button } from "react-bootstrap";
import { API_URL } from "../../apiServices";

function CaseStudyHeader({ banner }) {
  return (
    <Container fluid>
      <Row
        style={{
          backgroundImage: `url(${API_URL + banner.backgroundImage.url})`,
        }}
        className="study_banner justify-content-center pt-lg-5 pb-lg-5"
      >
        <div
          className="study_header row"
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          <div className="col-lg-3 col-md-2 px-0" />
          <div className="col-lg-6 col-md-8 px-0 mt-md-5 mb-md-3 mt-3 mb-3">
            <h2>{banner.heading.topHeading}</h2>
            <h1>{banner.heading.mainHeading}</h1>
            <p className="my-4 text-center">{banner.description}</p>
            <Link href="/contact">
              <a>
                <Button className="study-btn">Get Started</Button>
              </a>
            </Link>
          </div>
          <div className="col-lg-3 col-md-2 px-0" />
        </div>
      </Row>
    </Container>
  );
}

CaseStudyHeader.propTypes = {
  banner: PropTypes.object.isRequired,
};

export default CaseStudyHeader;
