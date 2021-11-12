import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { API_URL } from "../../apiServices";

const BlogHeader = ({ banner }) => (
  <Container fluid>
    <Row
      className="blog_page justify-content-center"
      style={{
        background: `url("${API_URL + banner.backgroundImage.url}")`,
      }}
    >
      <div className="blogs_header  align-self-center text-center">
        <h1>{banner.heading}</h1>
        <p>{banner.description}</p>
        <div className="searchbar_main">
          <button type="button" className="btn_search">
            <FiSearch className="search_icon" />
          </button>
          <input type="text" name="Blog" className="searchbar_input" />
        </div>
      </div>
    </Row>
  </Container>
);

BlogHeader.propTypes = {
  banner: PropTypes.object.isRequired,
};

export default BlogHeader;
