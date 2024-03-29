import PropTypes from "prop-types";
import Link from "next/link";
import parse from "html-react-parser";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHeader from "../../components/Services/ServiceHeader";
import {
  API_URL,
  getContactPageData,
  getFooterData,
  getHeaderData,
  getServices,
} from "../../apiServices";
import PageHead from "../../components/PageHead";
import getSorting from "../../utils/getSorting";

const PAGE_URL = "https://beyonderissolutions.com/services";
const PAGE_IMAGE_URL =
  "https://admin.beyonderissolutions.com/media/images/header/home%20logo.png";

const renderService = (item) => (
  <section className="overview-block-pb-services" key={item._id}>
    <div className="container">
      <div className="row ">
        <div className="services-row">
          <div className={`col-md-6 `}>
            <Link href={`/services/${item.slug}`}>
              <a className="service_btn">
                <img
                  src={API_URL + item.serviceImage.url}
                  alt={item.serviceImage.filename}
                  loading="lazy"
                />
              </a>
            </Link>
          </div>
          <div className="col-md-6 my-auto about_mission_div1 pr-lg-5">
            <Link href={`/services/${item.slug}`}>
              <a className="service_btn">
                <h3
                  className="font-weight-bold mb-lg-2 mt-5 mt-md-0 heading"
                  style={{ color: "#0a5da1", fontSize: "30px" }}
                >
                  {item.heading}
                </h3>
              </a>
            </Link>
            <p className="mt-lg-3 text-justify description">
              {item.description.length > 300
                ? parse(`${item.description.substring(0, 300)}...`)
                : parse(item.description)}
            </p>
            <Link href={`/services/${item.slug}`}>
              <a className="service_btn">
                <p style={{ color: "#337eb0" }}>
                  Learn More <FaRegArrowAltCircleRight className="ml-2" />
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

function Services({ servicesData, header, footer, contact }) {
  return (
    <>
      <PageHead
        pageMeta={servicesData?.meta}
        pageURL={PAGE_URL}
        pageImageURL={PAGE_IMAGE_URL}
      />

      {/* Header */}
      <Header data={header} />

      {/* =========== SERVICES-PAGE HEADER START ================ */}
      <ServiceHeader banner={servicesData?.banner} />
      {/* =========== SERVICES-PAGE HEADER END ================ */}

      {/* =========== SERVICES-PAGE SECTIONS START ================ */}
      <div className="service-page-product-section">
        {servicesData.services
          .sort(getSorting("desc", "createdAt"))
          .map((item) => renderService(item))}
      </div>
      {/* =========== SERVICES-PAGE SECTIONS END ================ */}

      {/* Footer */}
      <Footer
        footerData={footer}
        serviceData={servicesData}
        contactData={contact}
      />
    </>
  );
}

Services.propTypes = {
  servicesData: PropTypes.object.isRequired,
  header: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
};

export default Services;

export async function getStaticProps() {
  const servicesData = await getServices();
  const header = await getHeaderData();
  const footer = await getFooterData();
  const contact = await getContactPageData();

  return {
    props: { servicesData, header, footer, contact }, // will be passed to the page component as props
    revalidate: 10,
  };
}
