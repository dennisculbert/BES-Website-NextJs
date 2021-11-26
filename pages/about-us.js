import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextSection from "../components/About/AboutUsText";
import OurMission from "../components/About/OurMission";
import CompanyInfo from "../components/About/CompanyInfo";
import Expertise from "../components/About/Expertise";
import {
  API_URL,
  getContactPageData,
  getFooterData,
  getHeaderData,
  getServices,
  getAboutPageData,
} from "../apiServices";
import PageHead from "../components/PageHead";

const PAGE_TITLE = "About | Beyond Eris Solutions";
const PAGE_DESCRIPTION =
  "Beyond Eris solutions is helping clients transform their businesses digitally by providing excellent custom software solutions. Motivated with the mission intend to blur the gap between creativity and technology we aim to help customers by creating an excellent pathway for the success of their business.";
const PAGE_URL = "https://beyonderissolutions.com/about-us";
const PAGE_IMAGE_URL =
  "https://admin.beyonderissolutions.com/media/images/header/home%20logo.png";

function About({ data, header, footer, services, contact }) {
  return (
    <>
      <PageHead
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
        pageURL={PAGE_URL}
        pageImageURL={PAGE_IMAGE_URL}
      />

      {/* Header */}
      <Header data={header} />
      {/* Main Section */}
      <Container fluid>
        <Row
          style={{
            background: `url("${API_URL + data.banner.backgroundImage.url}")`,
          }}
          className="aboutus_banner justify-content-center"
        >
          <h1 style={{ alignSelf: "center", textAlign: "center" }}>
            {data.banner.heading}
          </h1>
        </Row>
      </Container>
      {/* Short Description */}
      <TextSection data={data.aboutDetails.sectionDetails} />
      {/* Render About Details Section */}
      {data.aboutDetails.sections.map((section) => (
        <OurMission key={section._id} data={section} />
      ))}
      {/* Our Mission Section */}
      {/* <OurMission /> */}
      {/* Our Vision Section */}
      {/* <OurVision /> */}
      {/* Company Info */}
      <CompanyInfo data={data.performance} />
      {/* Expertise Section */}
      <Expertise data={data.performance} />
      {/* Footer */}
      <Footer
        footerData={footer}
        contactData={contact}
        serviceData={services}
      />
    </>
  );
}

About.propTypes = {
  data: PropTypes.object.isRequired,
  header: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
};

export default About;

export async function getStaticProps() {
  const header = await getHeaderData();
  const data = await getAboutPageData();
  const footer = await getFooterData();
  const services = await getServices();
  const contact = await getContactPageData();

  return {
    props: { data, header, footer, services, contact }, // will be passed to the page component as props
    revalidate: 10,
  };
}
