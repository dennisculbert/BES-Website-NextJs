import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import parse from "html-react-parser";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BringIt from "../../components/CaseStudyDetails/BringIt";
import CaseStudyHeader from "../../components/CaseStudy/CaseStudyHeader";
import {
  API_URL,
  getCaseStudyData,
  getCaseStudyDetail,
  getContactPageData,
  getFooterData,
  getHeaderData,
  getServices,
} from "../../apiServices";
import isEmpty from "../../utils/isEmpty";
import WEBSITE_URL from "../../utils/constants";
import PageHead from "../../components/PageHead";

function CaseStudyDetail({ data, header, footer, contact, services }) {
  /* ============== CASE-STUDY WIRE-FRAME METHOD START ==================================== */

  const renderCaseStudyCard = (heading, item, number1, number2) => (
    <div key={item.image.url} className="main-wire-frame container-fluid">
      <div className="wireframe_section container">
        <div className="row case-study-cards">
          <div className={`col-md-6 img-class order-md-${number2}`}>
            <img
              className="case-study-image"
              src={`${API_URL + item.image.url}`}
              alt={item.image.filename}
              loading="lazy"
            />
          </div>
          <div
            className={`col-md-6 my-auto wireframe_study order-md-${number1} `}
          >
            <h1>{heading}</h1>
            <p className="my-4">{parse(`${item.description}`)}</p>
          </div>
        </div>
      </div>
    </div>
  );

  /* ============== CASE-STUDY WIREFRAME METHOD END ==================================== */
  return (
    <>
      <PageHead
        pageMeta={data?.meta}
        pageURL={`${WEBSITE_URL}/case-study/${data?.slug}`}
        pageImageURL={`${API_URL}${data?.company?.logo?.url}`}
      />

      {/* Header */}
      <Header data={header} />
      {/* ============== CASE-STUDY1 HEADER START ==================================== */}
      <CaseStudyHeader banner={data.banner} />
      {/* ============== CASE-STUDY1 HEADER END ==================================== */}

      {/* ============== CASE-STUDY OBJECTIVE START ==================================== */}
      <Container>
        <Row className="objective-part">
          <Col lg={6} md={8} className="my-auto study_objective">
            <h1>Overview</h1>
            <p className="my-5">{parse(`${data.objective}`)}</p>
          </Col>
          <Col lg={6} md={4} xs={0} />
        </Row>
      </Container>

      {/* ============== CASE-STUDY OBJECTIVE END ==================================== */}

      {/* ============== CASE-STUDY WIRE-FRAME START ==================================== */}
      <div className="wireframe_complete_section">
        <div>{renderCaseStudyCard("Challenges", data.wireframe, "1", "2")}</div>
      </div>

      {/* ============== CASE-STUDY WIRE-FRAME END ==================================== */}

      {/* ============== CASE-STUDY UTILIZING START ==================================== */}
      <div className="wireframe_complete_section">
        <div>{renderCaseStudyCard("Utilizing", data.utilizing, "2", "1")}</div>
      </div>

      {/* ============== CASE-STUDY UTILIZING END ==================================== */}

      {/* ============== CASE-STUDY BRINGING IT ALL START ==================================== */}
      <BringIt data={data.bringingitall} />

      {/* ============== CASE-STUDY BRINGING IT ALL END ==================================== */}

      {/* Bring it All component  */}

      {/* Footer */}
      <Footer
        footerData={footer}
        serviceData={services}
        contactData={contact}
      />
    </>
  );
}

CaseStudyDetail.propTypes = {
  data: PropTypes.object.isRequired,
  header: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const { casestudies } = await getCaseStudyData();

  // Get the paths we want to pre-render based on posts
  const paths = casestudies.map((caseStudy) => ({
    params: { slug: caseStudy.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } means other routes will be served as SSR for first time.
  return { paths, fallback: "blocking" };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `slug`.
  // If the route is like /posts/ABC, then params.slug is ABC
  const caseStudyDetail = await getCaseStudyDetail(params.slug);
  const { banner } = await getCaseStudyData();
  const data = { ...caseStudyDetail, banner };
  const header = await getHeaderData();
  const footer = await getFooterData();
  const services = await getServices();
  const contact = await getContactPageData();

  if (isEmpty(caseStudyDetail)) {
    return {
      notFound: true,
    };
  }

  // Pass post data to the page via props
  return {
    props: { data, header, footer, services, contact },
    revalidate: 10,
  };
}

export default CaseStudyDetail;
