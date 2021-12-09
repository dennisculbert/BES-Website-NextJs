import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { BlogPageSubscriptionForm } from "../SubscriptionForm";
import { API_URL, MAILCHIMP_URL } from "../../apiServices";
import { encodeURL } from "../../utils/urlManager";

const blogRight = "/img/blog_right.png";

const SubscriptionSection = ({ data }) => (
  <Container>
    <Row className="trend_div">
      <Col md={8}>
        {data && (
          <Link href={`/blog/${encodeURL(data.title)}`}>
            <a>
              <div style={{ position: "relative" }}>
                <img
                  src={API_URL + data?.blogImage?.url}
                  className="blog-cover"
                  alt={data?.blogImage?.filename}
                  loading="lazy"
                />
                <p className="trend_banner">Trends</p>
              </div>
            </a>
          </Link>
        )}
      </Col>
      <Col md={4} className="justify-content-center text-center">
        <Row>
          <Col md={12} className="pt-2">
            <div
              style={{
                boxShadow: "4px 4px 13px grey",
                borderRadius: "20px",
              }}
            >
              <img
                src={blogRight}
                alt="form_img"
                className="subscriptionImage"
                loading="lazy"
              />
              <MailchimpSubscribe
                url={MAILCHIMP_URL}
                render={({ subscribe, status, message }) => (
                  <BlogPageSubscriptionForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                )}
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

SubscriptionSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SubscriptionSection;
