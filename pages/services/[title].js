import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import { Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHeader from "../../components/Services/ServiceHeader";
import SectionTwo from "../../components/ServiceDetails/SectionTwo";
import SectionFour from "../../components/ServiceDetails/SectionFour";
import SectionFive from "../../components/ServiceDetails/SectionFive";
import {
  getCaseStudyData,
  getContactPageData,
  getFooterData,
  getHeaderData,
  getHomePageData,
  getServiceDetails,
  getServices,
} from "../../apiServices";
import isEmpty from "../../utils/isEmpty";

const PAGE_TITLE =
  "Service Details | Beyond Eris Solutions | Software Development Company";
const PAGE_DESCRIPTION =
  "Beyond Eris Solutions is a Dubai Based Software Development Agency with an extensive experience and track record that ensures your brand connects meaningfully with your customers";

const ServiceDetails = (props) => {
  const { data, header, footer, contact, servicesData, caseStudy, home } =
    props;

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
      </Head>

      {/* Header */}
      <Header data={header} />
      <ServiceHeader banner={servicesData?.banner} />

      <Container fluid>
        {data.serviceDetailSections.map((section) => (
          <SectionTwo data={section} />
        ))}

        <Row className="service-details-inner">
          <p className="service-details-heading">Ready to Work with us?</p>
          <div className="service-details-button-wrapper">
            <Link href="/contact">
              <a>
                <p className="service-details-talk-button">
                  Lets Talk{" "}
                  <FaArrowRight
                    style={{ paddingLeft: "10px", fontSize: "35px" }}
                  />
                </p>
              </a>
            </Link>
          </div>
        </Row>

        <SectionFour
          caseStudiesList={caseStudy.casestudies}
          homeCaseStudy={home.caseStudy}
        />
        <SectionFive services={servicesData.services} />
      </Container>
      {/* Footer */}
      <Footer
        footerData={footer}
        serviceData={servicesData}
        contactData={contact}
      />
    </>
  );
};

ServiceDetails.propTypes = {
  data: PropTypes.object.isRequired,
  servicesData: PropTypes.object.isRequired,
  header: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  caseStudy: PropTypes.object.isRequired,
  home: PropTypes.object.isRequired,
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const { services } = await getServices();

  // Get the paths we want to pre-render based on posts
  const paths = services.map((service) => ({
    params: { title: service.heading },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } means other routes will be served as SSR for first time.
  return { paths, fallback: "blocking" };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `title`.
  // If the route is like /posts/ABC, then params.title is ABC
  const data = await getServiceDetails(encodeURIComponent(params.title));
  const header = await getHeaderData();
  const footer = await getFooterData();
  const servicesData = await getServices();
  const contact = await getContactPageData();
  const caseStudy = await getCaseStudyData();
  const home = await getHomePageData();

  if (isEmpty(data?.serviceDetailSections)) {
    return {
      notFound: true,
    };
  }

  // Pass post data to the page via props
  return {
    props: { data, servicesData, caseStudy, header, footer, contact, home },
    revalidate: 10,
  };
}

export default ServiceDetails;