import PropTypes from "prop-types";

const Pagination = ({ blogsPerPage, totalBlogs, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={(currentPage === number ? "active" : "") + "page-number"}
          >
            <span
              role="button"
              onClick={() => paginate(number)}
              className="page-link"
              tabIndex={0}
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  blogsPerPage: PropTypes.number.isRequired,
  totalBlogs: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
