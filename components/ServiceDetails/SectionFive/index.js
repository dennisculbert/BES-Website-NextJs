import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import { API_URL } from "../../../apiServices";

const ServiceDetailsSectionFive = ({ services }) => {
  const { title } = useRouter().query;

  return (
    <>
      <Row className="service-details-section-five">
        <Container fluid>
          <Row className="service-details-section-five-inner">
            <p>Other Related Services</p>
          </Row>
          <Row className="service-details-section-five-inner service-details-section-five-inner-row">
            {services
              .filter(
                (service) => service.heading !== decodeURIComponent(title)
              )
              .slice(0, 4)
              .map((item) => (
                <Col
                  sm={3}
                  xs={3}
                  className="service-details-section-five-inner-column"
                >
                  <div className="service-details-section-five-icon-wrapper">
                    <Link
                      href={`/services/${encodeURIComponent(item.heading)}`}
                    >
                      <a>
                        <img src={API_URL + item.serviceIcon.url} alt="Icon" />
                      </a>
                    </Link>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </Row>
    </>
  );
};

ServiceDetailsSectionFive.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ServiceDetailsSectionFive;
