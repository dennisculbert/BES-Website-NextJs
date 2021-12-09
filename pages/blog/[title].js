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
  API_URL,
} from "../../apiServices";
import isEmpty from "../../utils/isEmpty";
import PageHead from "../../components/PageHead";
import { encodeURL, decodeURL } from "../../utils/urlManager";
import extractContent from "../../utils/contentExtractor";

function BlogPost(props) {
  const { blogData, blogPostData, header, footer, services, contact } = props;

  return (
    <>
      <PageHead
        pageTitle={blogPostData?.title}
        pageDescription={
          blogPostData?.blogDetails.length > 250
            ? extractContent(
                `${blogPostData?.blogDetails.substring(0, 250)}...`
              )
            : extractContent(`${blogPostData?.blogDetails}`)
        }
        pageURL={`${API_URL}/blog/${encodeURL(blogPostData?.title)}`}
        pageImageURL={`${API_URL}${blogPostData?.blogThumnail?.url}`}
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
    params: { title: encodeURL(blog.title) },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } means other routes will be served as SSR for first time.
  return { paths, fallback: "blocking" };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `title`.
  // If the route is like /blog/ABC, then params.title is ABC

  const blogPostData = await getBlogDetails(
    encodeURIComponent(decodeURL(params.title))
  );
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
