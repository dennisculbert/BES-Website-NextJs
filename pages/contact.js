import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactBanner from "../components/Contact/ContactBanner";
import ContactForm from "../components/Contact/ContactForm";
import ContactSpacer from "../components/Contact/ContactSpacer";
import {
  getContactPageData,
  getFooterData,
  getHeaderData,
  getServices,
} from "../apiServices";
import PageHead from "../components/PageHead";

const PAGE_URL = "https://beyonderissolutions.com/contact";
const PAGE_IMAGE_URL =
  "https://admin.beyonderissolutions.com/media/images/header/home%20logo.png";

function Contact({ contact, header, footer, services }) {
  return (
    <>
      <PageHead
        pageMeta={contact?.meta}
        pageURL={PAGE_URL}
        pageImageURL={PAGE_IMAGE_URL}
      />

      {/* Header */}
      <Header data={header} />
      <div className="ContactUs_page">
        {/* Contact Page Header */}
        <ContactBanner data={contact.banner} />

        {/* Contact Form to send us message */}
        <ContactForm data={contact.contactCard} />
        <ContactSpacer />
      </div>
      {/* Footer */}
      <Footer
        contactData={contact}
        footerData={footer}
        serviceData={services}
      />
    </>
  );
}

Contact.propTypes = {
  header: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
};

export async function getStaticProps() {
  const header = await getHeaderData();
  const footer = await getFooterData();
  const services = await getServices();
  const contact = await getContactPageData();

  return {
    props: { header, footer, services, contact }, // will be passed to the page component as props
    revalidate: 10,
  };
}

export default Contact;
