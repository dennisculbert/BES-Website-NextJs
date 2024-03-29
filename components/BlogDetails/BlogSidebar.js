import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import Link from "next/link";

const BlogSidebar = ({ blogs }) => (
  <>
    <Col lg={4} md={5} className="inform_rightSide">
      <Link href="/blog">
        <a>
          <button type="button" className="inform_rightHeader">
            View All Blogs
          </button>
        </a>
      </Link>
      {blogs.slice(0, 8).map((item) => (
        <Link key={item._id} href={`/blog/${item.slug}`}>
          <a>
            <p className="inform_blogs">{item.title}</p>
          </a>
        </Link>
      ))}
      <Link href="/blog">
        <a>
          <p className={blogs.length < 8 ? "see-more-none" : "see-more"}>
            See All
          </p>
        </a>
      </Link>
    </Col>
  </>
);

BlogSidebar.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BlogSidebar;
