import PropTypes from "prop-types";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import parse from "html-react-parser";
import Link from "next/link";
import { API_URL } from "../../apiServices";
import { encodeURL } from "../../utils/urlManager";

function WhatWeDo({ whatWeDoData, services }) {
  return (
    <Row>
      <Container>
        <Row className="services_intro_div my-5">
          <Col lg={4} className="welcome-main">
            <h1 id="what_we_do" className="who_we_are">
              {whatWeDoData.heading}
            </h1>
            <p className="who_we_are_p-tag pr-4">{whatWeDoData.description}</p>
            <Link href="/services">
              <a>
                <Button className="btn_get-now">Read More</Button>
              </a>
            </Link>
          </Col>
          <Col lg={8} className="pt-md-0 pt-5">
            <Row>
              {services.slice(0, 6).map((service) => (
                <Col md={4} lg={4} xs={6} className="mb-4" key={service._id}>
                  <Link href={`/services/${encodeURL(service.heading)}`}>
                    <a>
                      <Card className="home_card">
                        <Card.Body>
                          <div className="home_card-div">
                            <img
                              src={API_URL + service.serviceIcon.url}
                              alt={service.serviceIcon.filename}
                              loading="lazy"
                            />
                          </div>
                          <Card.Title className="py-2 card_title">
                            {service.heading}
                          </Card.Title>
                          <Card.Text style={{ fontSize: "12px" }}>
                            {service.description.length > 80
                              ? parse(
                                  `${service.description.substring(0, 80)}...`
                                )
                              : parse(`${service.description}`)}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </a>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Row>
  );
}

WhatWeDo.propTypes = {
  whatWeDoData: PropTypes.object,
  services: PropTypes.arrayOf(PropTypes.object),
};

export default WhatWeDo;
