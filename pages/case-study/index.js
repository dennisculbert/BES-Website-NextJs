import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import CaseStudyHeader from "../../components/CaseStudy/CaseStudyHeader";
import Pagination from "../../components/CaseStudy/Pagination";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  API_URL,
  getCaseStudyData,
  getContactPageData,
  getFooterData,
  getHeaderData,
  getServices,
} from "../../apiServices";
import PageHead from "../../components/PageHead";
import { encodeURL } from "../../utils/urlManager";

const PAGE_TITLE = "Case Study | Beyond Eris Solutions";
const PAGE_DESCRIPTION =
  "At Beyond Eris Solutions we aim to transform businesses with extended and powerful digital solutions that satisfy the needs of your business in upcoming days. Here are case studies to prove our reliability, sincerity and success stories.";
const PAGE_URL = "https://beyonderissolutions.com/case-study";
const PAGE_IMAGE_URL =
  "https://admin.beyonderissolutions.com/media/images/header/home%20logo.png";

const renderStudyCard = (item) => (
  <div key={item._id} className="col-md-6 my-md-4 my-3 caseStudy_products">
    <Link
      href={`/case-study/${encodeURL(item.company.name)}`}
      style={{ color: "#000" }}
    >
      <a>
        <img
          src={`${API_URL + item.caseStudyImage.url}`}
          className="w-100"
          alt={item.caseStudyImage.filename}
          loading="lazy"
        />
        <div className="mask" />
        <div className="content">
          <div className="caseStudy_productsText">
            <p className="productsText_title">{item.company.name}</p>
            <p className="productsText_description">
              {item.company.description.length > 100
                ? `${item.company.description.substring(0, 100)}...`
                : item.company.description}
            </p>
            <p className="case-btn" style={{ color: "#337eb0" }}>
              Learn More <FaRegArrowAltCircleRight className="" />
            </p>
          </div>
        </div>
      </a>
    </Link>
  </div>
);

function CaseStudy({ data, header, footer, services, contact }) {
  // ************ Case Study Pagination ****************** //

  const [Case, setCase] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [casePerPage] = useState(8);

  useEffect(() => {
    // Set Blogs git config --global user.name "Your Name"
    if (data) setCase(data.casestudies);
  }, [data]);

  // Get current number of Case Study
  const indexOfLastCase = currentPage * casePerPage;
  const indexOfFirstCase = indexOfLastCase - casePerPage;
  const currentCase = Case.slice(indexOfFirstCase, indexOfLastCase);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

      {/* ============== CASE-STUDY HEADER ==================================== */}
      <CaseStudyHeader banner={data.banner} />

      {/* ============== PRODUCT HEADER ===================================== */}
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex flex-wrap caseStudy_productInner">
            {currentCase
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((item) => renderStudyCard(item))}
          </div>
        </div>
      </div>

      {/* ============== CASE-STUDY Pagination =================== */}
      <Pagination
        caseStudyPerPage={casePerPage}
        totalCase={Case.length}
        paginate={paginate}
        currentPage={currentPage}
      />

      {/* Footer */}
      <Footer
        footerData={footer}
        serviceData={services}
        contactData={contact}
      />
    </>
  );
}

CaseStudy.propTypes = {
  data: PropTypes.object.isRequired,
  header: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
};

export default CaseStudy;

export async function getStaticProps() {
  const data = await getCaseStudyData();
  const header = await getHeaderData();
  const footer = await getFooterData();
  const services = await getServices();
  const contact = await getContactPageData();

  return {
    props: { data, header, footer, services, contact }, // will be passed to the page component as props
    revalidate: 10,
  };
}
