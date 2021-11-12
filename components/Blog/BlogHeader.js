import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { Typeahead } from "react-bootstrap-typeahead";
import { API_URL } from "../../apiServices";

const BlogHeader = ({ data }) => {
  const router = useRouter();

  const options = data
    ? data.blogs.map((blog, index) => ({
        id: index,
        label: blog.title,
        value: blog.title,
      }))
    : [];

  // Submit the request
  const handleOnSelect = (item) => {
    if (item && item.length !== 0 && item[0].value)
      router.push("/blogs/" + encodeURIComponent(item[0].value));
  };

  return (
    <Container fluid>
      <Row
        className="blog_page justify-content-center"
        style={{
          background: `url("${API_URL + data.banner.backgroundImage.url}")`,
        }}
      >
        <div className="blogs_header  align-self-center text-center">
          <h1>{data.banner.heading}</h1>
          <p>{data.banner.description}</p>
          <div className="searchbar_main">
            <button type="button" className="btn_search">
              <FiSearch className="search_icon" />
            </button>
            {/* <input type="text" name="Blog" className="searchbar_input" /> */}
            <Typeahead
              id="custom-search"
              className="blog-input"
              onChange={handleOnSelect}
              options={options}
              placeholder="Search Blog"
              minLength={1}
            />
          </div>
        </div>
      </Row>
    </Container>
  );
};

BlogHeader.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogHeader;
