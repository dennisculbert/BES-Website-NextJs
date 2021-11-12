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
              <p className="text-light">Happy Cients</p>
            </Col>
            <Col md={3} xs={6}>
              <h1 className="text-white mb-3">{data.completedProjects}+</h1>
              <p className="text-light">Completed Projects</p>
            </Col>
            <Col md={3} xs={6}>
              <h1 className="text-white mb-3">{data.dedicatedMembers}+</h1>
              <p className="text-light">Dedicated Members</p>
            </Col>
            <Col md={3} xs={6}>
              <h1 className="text-white mb-3">{data.liveProjects}+</h1>
              <p className="text-light">Live Projects</p>
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
