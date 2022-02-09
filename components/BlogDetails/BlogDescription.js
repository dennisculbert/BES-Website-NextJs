import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import parse from "html-react-parser";
import BlogIcon from "./BlogIcon";

const BlogDescription = ({ blogPostData }) => (
  <Col lg={8} md={7} className="inform_leftSide">
    {parse(`${blogPostData?.blogDetails}`)}
    <BlogIcon
      blogSlug={blogPostData?.slug}
      blogTitle={blogPostData?.title}
      blogImage={blogPostData?.blogImage}
    />
  </Col>
);

BlogDescription.propTypes = {
  blogPostData: PropTypes.object.isRequired,
};

export default BlogDescription;
