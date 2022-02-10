import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

function CompanyInfo({ data }) {
  return (
    <Container fluid className="company_info">
      <Row>
        <Container>
          <Row className="my-md-5 my-3 company_info_detail">
            <Col md={3} xs={6}>
              <h1 className="text-white mb-3">{data.happyClients}+</h1>
              <p className="text-light">Clients</p>
            </Col>
            <Col md={3} xs={6}>
              <h1 className="text-white mb-3">{data.completedProjects}+</h1>
              <p className="text-light">Projects</p>
            </Col>
            <Col md={3} xs={6}>
              <h1 className="text-white mb-3">{data.dedicatedMembers}+</h1>
              <p className="text-light">Team Size</p>
            </Col>
            <Col md={3} xs={6}>
              <h1 className="text-white mb-3">{data.liveProjects}+</h1>
              <p className="text-light">Years of Experience</p>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

CompanyInfo.propTypes = {
  data: PropTypes.object,
};

export default CompanyInfo;
