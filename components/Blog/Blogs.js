import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { API_URL } from "../../apiServices";

// Render Single Blog
const renderBlog = (blog) => (
  <div className="col-md-4 col-6 px-2 blogProduct_blogs" key={blog._id}>
    <Link href={`/blogs/${encodeURIComponent(blog.title)}`}>
      <a>
        <div className="blog-img-wrapper">
          <img
            src={API_URL + blog.blogThumnail.url}
            alt={blog.blogThumnail.filename}
            loading="lazy"
          />
          <p className="blogProduct_TrendImages">{blog.title}</p>
        </div>
      </a>
    </Link>
  </div>
);

const Blogs = ({ blogs }) => (
  <Container>
    <Row>
      <Col md={12} className="d-flex flex-wrap px-lg-0">
        {blogs
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map(renderBlog)}
      </Col>
    </Row>
  </Container>
);

Blogs.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Blogs;
