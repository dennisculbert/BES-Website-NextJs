import PropTypes from "prop-types";
import Link from "next/link";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { API_URL } from "../../../apiServices";

const ServiceDetailsSectionFour = ({ caseStudiesList, homeCaseStudy }) => (
  <Row className="py-5" style={{ backgroundColor: "#F8F8F8" }}>
    <Container>
      <Row className="case_study_row">
        <h1>{homeCaseStudy.heading}</h1>
        <p>{homeCaseStudy.description}</p>
      </Row>
      <Row className="justify-content-center mb-5">
        <Link href="/case-study">
          <a>
            <Button className="case_study_btn">Learn More</Button>
          </a>
        </Link>
      </Row>
      <Row>
        {caseStudiesList.slice(0, 3).map((item) => (
          <Col md={4} className="mb-4" key={item._id}>
            <Card className={`case_study_card ${item.class}`}>
              <Card.Body>
                <div className="case_study">
                  <Card.Title>{item.company.name}</Card.Title>
                  <Card.Text>
                    {item.company.description.length > 100
                      ? `${item.company.description.substring(0, 100)}...`
                      : item.company.description}
                  </Card.Text>
                  <Link href={`/case-study/${item.slug}`}>
                    <a>
                      <FaArrowRight className="case_study_card_btn" />
                    </a>
                  </Link>
                </div>
                <div className="pt-3">
                  <Card.Img
                    className="case_studyImg"
                    src={API_URL + item.company.logo.url}
                    alt={item.company.logo.filename}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </Row>
);

ServiceDetailsSectionFour.propTypes = {
  homeCaseStudy: PropTypes.object.isRequired,
  caseStudiesList: PropTypes.array.isRequired,
};

export default ServiceDetailsSectionFour;
