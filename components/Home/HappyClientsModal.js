import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";
import { Modal, Row, Col, Container } from "react-bootstrap";

function HappyClientModal({ clientData, ...rest }) {
  return (
    <>
      <Modal
        {...rest}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="client-slide">
          <Modal.Header closeButton />
          <Modal.Body>
            <Container>
              <Row>
                <Col
                  sm={2}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="client-img">
                    <img
                      src={clientData?.profile_photo_url}
                      alt={clientData?.author_name}
                      loading="lazy"
                    />
                  </div>
                </Col>
                <Col sm={10} className="pb-md-0 pb-3">
                  <h3 className="client-name">{clientData?.author_name}</h3>
                  <div className="star-section">
                    <StarRatings
                      rating={clientData?.rating}
                      starEmptyColor="grey"
                      starRatedColor="#E38106"
                      numberOfStars={5}
                      starDimension="15px"
                      starSpacing="0px"
                      name="rating"
                    />
                    <span>{clientData?.relative_time_description}</span>
                  </div>
                  <div>
                    <p>{clientData?.text}</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

HappyClientModal.propTypes = {
  clientData: PropTypes.object.isRequired,
};

export default HappyClientModal;
