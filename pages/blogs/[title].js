import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogHeader from "../../components/Blog/BlogHeader";
import TopSideBar from "../../components/BlogDetails/TopSideBar";
import BlogDescription from "../../components/BlogDetails/BlogDescription";
import BlogSidebar from "../../components/BlogDetails/BlogSidebar";
import {
  getContactPageData,
  getBlogDetails,
  getFooterData,
  getHeaderData,
  getServices,
  getBlogsData,
} from "../../apiServices";
import isEmpty from "../../utils/isEmpty";
import PageHead from "../../components/PageHead";

const PAGE_TITLE =
  "Blog Details | Beyond Eris Solutions | Software Development Company";
const PAGE_DESCRIPTION =
  "Beyond Eris Solutions is a Dubai Based Software Development Agency with an extensive experience and track record that ensures your brand connects meaningfully with your customers";
const PAGE_URL = "https://beyonderissolutions.com/blogs";
const PAGE_IMAGE_URL =
  "https://admin.beyonderissolutions.com/media/images/header/home%20logo.png";

function BlogPost(props) {
  const { blogData, blogPostData, header, footer, services, contact } = props;

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
      <BlogHeader data={blogData} />

      <div className="blogInner_page">
        {/* Top Right SideBar for Latest Post */}
        <TopSideBar blogPostData={blogPostData} blogs={blogData.blogs} />

        <Container>
          <Row className="Informative_architecture_section">
            {/* Blog Description Section */}
            <BlogDescription blogPostData={blogPostData} />

            {/* Blog Side bar and Monthly Archives */}
            <BlogSidebar blogs={blogData.blogs} />
          </Row>
        </Container>
      </div>

      {/* Footer */}
      <Footer
        footerData={footer}
        serviceData={services}
        contactData={contact}
      />
    </>
  );
}

BlogPost.propTypes = {
  blogData: PropTypes.object.isRequired,
  blogPostData: PropTypes.object.isRequired,
  header: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const { blogs } = await getBlogsData();

  // Get the paths we want to pre-render based on posts
  const paths = blogs.map((blog) => ({
    params: { title: blog.title },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } means other routes will be served as SSR for first time.
  return { paths, fallback: "blocking" };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `title`.
  // If the route is like /blogs/ABC, then params.title is ABC

  const blogPostData = await getBlogDetails(encodeURIComponent(params.title));
  const blogData = await getBlogsData();
  const header = await getHeaderData();
  const footer = await getFooterData();
  const services = await getServices();
  const contact = await getContactPageData();

  if (isEmpty(blogPostData)) {
    return {
      notFound: true,
    };
  }

  // Pass post data to the page via props
  return {
    props: { blogPostData, blogData, services, header, footer, contact },
    revalidate: 10,
  };
}

export default BlogPost;
