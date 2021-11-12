import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { MAILCHIMP_URL } from "../../apiServices";
import { FooterSubscriptionForm } from "../SubscriptionForm";

function ContactBox({ data }) {
  return (
    // <Container >
    <div className="contact_us">
      <Row className="align-items-center">
        <Col md={6} className="col-12 contact-details">
          <Row>
            <h3>{data.heading}</h3>
          </Row>
          <Row>
            <p>{data.description}</p>
          </Row>
        </Col>
        <MailchimpSubscribe
          url={MAILCHIMP_URL}
          render={({ subscribe, status, message }) => (
            <FooterSubscriptionForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </Row>
    </div>
    // </Container>
  );
}

ContactBox.propTypes = {
  data: PropTypes.object,
};

export default ContactBox;
