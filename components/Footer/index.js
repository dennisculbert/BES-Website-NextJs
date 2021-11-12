import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import Spacer from "./spacer";
import ContactBox from "./contactBox";
import { API_URL } from "../../apiServices";

const facebook = "/img/facebook.png";
const twitter = "/img/twitter.png";
const Linkedin = "/img/linkedin.png";
const insta = "/img/insta.png";

function Footer({ footerData, contactData, serviceData }) {
  const router = useRouter();
  const location = router.pathname === "/contact";

  return (
    <>
      <Container fluid className="footer pb-5">
        <Container className="footer-container">
          {/* Blue colored contact box */}
          {location ? "" : <ContactBox data={footerData} />}
          {location ? "" : <Spacer />}
          <div className="footer-wrapper">
            <Container>
              <Row className="justify-content-center">
                <Col md={3} className="">
                  <Link href="/">
                    <a>
                      <img
                        src={API_URL + footerData.logo.url}
                        className="footer_logo"
                        alt=""
                      />
                    </a>
                  </Link>
                  <div className="footer-textarea">
                    <p>{footerData.footerDescription}</p>
                  </div>
                </Col>
                <Col md={6} className="footer-main-column px-0">
                  <div className="links pt-md-0 pt-5">
                    <strong>Useful Links</strong>
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/case-study">Case Study</Link>
                      </li>
                      <li>
                        <Link href="/blogs">Blog</Link>
                      </li>
                      <li>
                        <Link href="/about-us">About</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="support pt-md-0 pt-5">
                    <strong>Services</strong>
                    <ul>
                      {serviceData.services.map((item) => (
                        <li key={item._id}>
                          <Link
                            href={`/services/${encodeURIComponent(
                              item.heading
                            )}`}
                          >
                            {item.heading}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
                <Col md={3} xs={12} className="contact pt-md-0 pt-3">
                  <strong>Contact US</strong>
                  <ul>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/maps/place/Beyond+Eris+Solution/@25.0641917,55.1380504,15z/data=!4m5!3m4!1s0x0:0x129328696b35c383!8m2!3d25.0641917!4d55.1380504"
                    >
                      <li>{contactData.contactCard.address}</li>
                    </a>
                    <a href={`mailto:${contactData.contactCard.email}`}>
                      <li>{contactData.contactCard.email}</li>
                    </a>
                    <a href={`tel:+${contactData.contactCard.phone}`}>
                      <li>+{contactData.contactCard.phone}</li>
                    </a>
                    <div className="footer_socialIcons">
                      <a
                        href={footerData.facebookLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="footer_icons"
                          src={facebook}
                          alt="facebook"
                        />
                      </a>
                      <a
                        href={footerData.twitterLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="footer_icons"
                          src={twitter}
                          alt="twitter"
                        />
                      </a>
                      <a
                        href={footerData.linkedInLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="footer_icons"
                          src={Linkedin}
                          alt="facebook"
                        />
                      </a>
                      <a
                        href={footerData.instagramLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img className="footer_icons" src={insta} alt="insta" />
                      </a>
                    </div>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Container>

      <Row className="footer_socialIcons_last pt-3 pb-3 mx-0">
        <a href={footerData.facebookLink} target="_blank" rel="noreferrer">
          <img className="footer_icons" src={`${facebook}`} alt="facebook" />
        </a>
        <a href={footerData.twitterLink} target="_blank" rel="noreferrer">
          <img className="footer_icons" src={`${twitter}`} alt="Twitter" />
        </a>
        <a href={footerData.linkedInLink} target="_blank" rel="noreferrer">
          <img className="footer_icons" src={`${Linkedin}`} alt="LinkedIn" />
        </a>
        <a href={footerData.instagramLink} target="_blank" rel="noreferrer">
          <img className="footer_icons" src={`${insta}`} alt="insta" />
        </a>
      </Row>
      <Container fluid className="footer_last_row">
        <Row>
          <Container>
            <Row className="footerText_last">
              <p className="mb-0">
                Copyright © 2021{" "}
                <Link href="/">
                  <a>
                    <span>Beyond Eris Solutions.</span>
                  </a>
                </Link>
                All Rights Reserved.
              </p>
              <div className="d-flex ml-auto footerText_right">
                <Link href="/PrivacyPolicy" target="_blank">
                  <a>
                    <p className="mb-0 privacy">Privacy Policy</p>
                  </a>
                </Link>
                <Link href="/Terms-Condtion" target="_blank">
                  <a>
                    <p className="mb-0 terms">Terms & Conditions</p>
                  </a>
                </Link>
              </div>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
}

Footer.propTypes = {
  footerData: PropTypes.object,
  contactData: PropTypes.object,
  serviceData: PropTypes.object,
};

export default Footer;
