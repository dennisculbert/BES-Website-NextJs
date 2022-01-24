import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Spacer from "./spacer";
import ContactBox from "./contactBox";
import { API_URL } from "../../apiServices";
import { encodeURL } from "../../utils/urlManager";
import getSorting from "../../utils/getSorting";

const facebook = "/img/facebook.png";
const twitter = "/img/twitter.png";
const Linkedin = "/img/linkedin.png";
const insta = "/img/insta.png";

function Footer({ footerData, contactData, serviceData }) {
  const router = useRouter();
  const location = router.pathname === "/contact";

  return (
    <>
      <ToastContainer className="toastify-main" position="bottom-left" />
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
                        alt="beyond eris solutions logo"
                        loading="lazy"
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
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/about-us">About</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link href="/sitemap">Sitemap</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="support pt-md-0 pt-5">
                    <strong>Services</strong>
                    <ul>
                      {serviceData.services
                        .sort(getSorting("desc", "createdAt"))
                        .map((item) => (
                          <li key={item._id}>
                            <Link href={`/services/${encodeURL(item.heading)}`}>
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
                    <div className="footer_socialIcons d-flex justify-content-around">
                      <a
                        href={footerData.facebookLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {/* <img
                          className="footer_icons"
                          src={facebook}
                          alt="facebook"
                          loading="lazy"
                        /> */}
                        <Image
                          className="footer_icons"
                          src={facebook}
                          alt="facebook"
                          width={38}
                          height={38}
                        />
                      </a>
                      <a
                        href={footerData.twitterLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {/* <img
                          className="footer_icons"
                          src={twitter}
                          alt="twitter"
                          loading="lazy"
                        /> */}
                        <Image
                          className="footer_icons"
                          src={twitter}
                          alt="twitter"
                          width={38}
                          height={38}
                        />
                      </a>
                      <a
                        href={footerData.linkedInLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {/* <img
                          className="footer_icons"
                          src={Linkedin}
                          alt="Linkedin"
                          loading="lazy"
                        /> */}
                        <Image
                          className="footer_icons"
                          src={Linkedin}
                          alt="Linkedin"
                          width={38}
                          height={38}
                        />
                      </a>
                      <a
                        href={footerData.instagramLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {/* <img
                          className="footer_icons"
                          src={insta}
                          alt="instagram"
                          loading="lazy"
                        /> */}
                        <Image
                          className="footer_icons"
                          src={insta}
                          alt="instagram"
                          width={38}
                          height={38}
                        />
                      </a>
                    </div>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Container>

      {/* <Row className="footer_socialIcons_last pt-3 pb-3 mx-0">
        <a href={footerData.facebookLink} target="_blank" rel="noreferrer">
          <Image
            className="footer_icons"
            src={facebook}
            alt="facebook"
            width={38}
            height={38}
          />
        </a>
        <a href={footerData.twitterLink} target="_blank" rel="noreferrer">
          <Image
            className="footer_icons"
            src={twitter}
            alt="twitter"
            width={38}
            height={38}
          />
        </a>
        <a href={footerData.linkedInLink} target="_blank" rel="noreferrer">
          <Image
            className="footer_icons"
            src={Linkedin}
            alt="Linkedin"
            width={38}
            height={38}
          />
        </a>
        <a href={footerData.instagramLink} target="_blank" rel="noreferrer">
          <Image
            className="footer_icons"
            src={insta}
            alt="instagram"
            width={38}
            height={38}
          />
        </a>
      </Row> */}
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
                <Link href="/privacy-policy">
                  <a target="_blank">
                    <p className="mb-0 privacy">Privacy Policy</p>
                  </a>
                </Link>
                <Link href="/terms-and-conditions">
                  <a target="_blank">
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
