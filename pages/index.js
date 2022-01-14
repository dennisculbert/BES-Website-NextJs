import PropTypes from "prop-types";
// import Script from "next/script";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CaseStudy from "../components/Home/CaseStudy";
import HomeBanner from "../components/Home/HomeBanner";
import OurHappyClients from "../components/Home/OurHappyClients";
import Portfolio from "../components/Home/Porfolio";
import WhatWeDo from "../components/Home/WhatWeDo";
import WhoWeAre from "../components/Home/WhoWeAre";
import {
  getCaseStudyData,
  getContactPageData,
  getFooterData,
  getHeaderData,
  getHomePageData,
  getServices,
} from "../apiServices";
import PageHead from "../components/PageHead";

const PAGE_TITLE = "Beyond Eris Solutions | Software Development Company";
const PAGE_DESCRIPTION =
  "Beyond Eris Solutions (Dubai) is a team of tech specialists who are engaged to help you employ top-notch digital products and solutions that are tailor-made to your business requirements and are based on innovative next-generation sоftwаrе sоlutіоns.";
const PAGE_URL = "https://beyonderissolutions.com";
const PAGE_IMAGE_URL =
  "https://admin.beyonderissolutions.com/media/images/header/home%20logo.png";

function Home(props) {
  const { header, footer, home, services, contact, caseStudy } = props;

  return (
    <div>
      <PageHead
        pageTitle={PAGE_TITLE}
        pageDescription={PAGE_DESCRIPTION}
        pageURL={PAGE_URL}
        pageImageURL={PAGE_IMAGE_URL}
      />

      {/* Global site tag (gtag.js) - Google Analytics */}
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-201901673-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-201901673-1');
        `}
      </Script> */}

      {/* <main> */}
      <Header data={header} />
      <Container fluid>
        {/* Main Section */}
        <HomeBanner data={home?.banner} />

        {/* What We Do */}
        <WhatWeDo whatWeDoData={home.whatWeDo} services={services?.services} />

        {/* Who We Are Section */}
        <WhoWeAre data={home?.whoWeAre} />

        {/* Portfolio Section */}
        <Portfolio portfolioImages={home?.portfolioImages} />

        {/* Case Study Section */}
        <CaseStudy homeCaseStudy={home?.caseStudy} caseStudyData={caseStudy} />

        {/* Our Happy Clients Section */}
        <OurHappyClients happyClients={home?.happyClients} />
      </Container>
      {/* Footer */}
      <Footer
        footerData={footer}
        contactData={contact}
        serviceData={services}
      />
      {/* </main> */}
    </div>
  );
}

Home.propTypes = {
  home: PropTypes.object.isRequired,
  caseStudy: PropTypes.object.isRequired,
  header: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
};

export default Home;

export async function getStaticProps() {
  const home = await getHomePageData();
  const header = await getHeaderData();
  const footer = await getFooterData();
  const caseStudy = await getCaseStudyData();
  const services = await getServices();
  const contact = await getContactPageData();

  return {
    props: { home, header, footer, caseStudy, services, contact }, // will be passed to the page component as props
    revalidate: 10,
  };
}
