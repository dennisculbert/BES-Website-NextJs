import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillClockCircle } from "react-icons/ai";
import moment from "moment";
import Link from "next/link";
import { API_URL } from "../../apiServices";

const renderBlogDetails = (blogDetails, index) => (
  <Col md={12} key={index} className="d-flex  blog_rightSide_detail my-2">
    <Col xs={4} className="px-0">
      <Link href={`/blog/${blogDetails.slug}`}>
        <a>
          <img
            src={API_URL + blogDetails.blogThumnail.url}
            alt={blogDetails.blogThumnail.filename}
            loading="lazy"
          />
        </a>
      </Link>
    </Col>
    <Col xs={8} className="">
      <Link href={`/blog/${blogDetails.slug}`}>
        <a>
          <p>{blogDetails.title}</p>
          <span className="mr-2 clock-icon">
            <AiFillClockCircle />
          </span>
          <span className="time-details">
            {moment(blogDetails.createdAt).startOf("hour").fromNow()}
          </span>
        </a>
      </Link>
    </Col>
  </Col>
);

function TopSideBar({ blogs, blogPostData }) {
  return (
    <Container>
      <h2 className="blogInner_header">{blogPostData?.title}</h2>
      <Row className="latest_post_section">
        <Col lg={8} md={7}>
          <div>
            <img
              src={`${API_URL + blogPostData?.blogImage?.url}`}
              alt="blogInner_1"
              className="w-100 blog_leftSide"
              loading="lazy"
            />
          </div>
        </Col>
        <Col lg={4} md={5} className="blog_rightSide">
          <Row>
            <p className="latest_post pl-3">Latest Post</p>
            {blogs
              .slice(-3)
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map(renderBlogDetails)}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

TopSideBar.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  blogPostData: PropTypes.object.isRequired,
};

export default TopSideBar;
