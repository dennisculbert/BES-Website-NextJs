/* eslint-disable react/prop-types */

import Head from "next/head";
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

const PAGE_TITLE =
  "Home | Beyond Eris Solutions | Software Development Company";
const PAGE_DESCRIPTION =
  "Beyond Eris Solutions is a Dubai Based Software Development Agency with an extensive experience and track record that ensures your brand connects meaningfully with your customers";

export default function Home(props) {
  const { header, footer, home, services, contact, caseStudy } = props;

  return (
    <div>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
