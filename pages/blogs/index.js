import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogHeader from "../../components/Blog/BlogHeader";
import SubscriptionSection from "../../components/Blog/SubscriptionSection";
import Blogs from "../../components/Blog/Blogs";
import Pagination from "../../components/Blog/Pagination";
import {
  getBlogsData,
  getContactPageData,
  getFooterData,
  getHeaderData,
  getServices,
} from "../../apiServices";
import PageHead from "../../components/PageHead";

const PAGE_TITLE = "Blogs | Beyond Eris Solutions";
const PAGE_DESCRIPTION =
  "Learn about the digital transformation of your company and business through our well demonstrated blogs. We not only highlight the importance of having a digital footprint but at Beyond Eris solutions we also provide solutions and services to aid the process of achieving one.";
const PAGE_URL = "https://beyonderissolutions.com/blogs";
const PAGE_IMAGE_URL =
  "https://admin.beyonderissolutions.com/media/images/header/home%20logo.png";

const blogsPerPage = 9;

function BlogsPage({ blogsData, header, footer, contact, services }) {
  const [blogs, setBlogs] = useState(blogsData.blogs);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Set Blogs
    if (blogsData) setBlogs(blogsData.blogs);
  }, [blogsData]);

  // Get current number of blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getLatestBlog = () => {
    const tempBlogs = blogs.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    if (tempBlogs.length > 0) return tempBlogs[0];
    return {};
  };

  // BLOG PRODUCT METHOD END
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
      {/* ================================ BLOG HEADER START ============================= */}
      <BlogHeader data={blogsData} />
      {/* ================================ BLOG HEADER END ============================= */}

      {/* ================================ BLOG Subscription Section START ============================= */}
      <SubscriptionSection data={getLatestBlog()} />
      {/* ================================ BLOG Subscription Section END ============================= */}

      {/* ================================ BLOGS START ============================= */}
      <Blogs blogs={currentBlogs} />
      {/* ================================ BLOGS END ============================= */}

      {/* ================================ Pagination START ============================= */}
      <Pagination
        blogsPerPage={blogsPerPage}
        totalBlogs={blogs.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      {/* ================================ Pagination END ============================= */}

      {/* Footer */}
      <Footer
        footerData={footer}
        contactData={contact}
        serviceData={services}
      />
    </>
  );
}

BlogsPage.propTypes = {
  blogsData: PropTypes.object.isRequired,
  header: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
};

export async function getStaticProps() {
  const blogsData = await getBlogsData();
  const header = await getHeaderData();
  const footer = await getFooterData();
  const services = await getServices();
  const contact = await getContactPageData();

  return {
    props: { blogsData, header, footer, services, contact }, // will be passed to the page component as props
    revalidate: 10,
  };
}

export default BlogsPage;
