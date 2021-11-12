/* eslint-disable jsx-a11y/click-events-have-key-events */

import PropTypes from "prop-types";

const Pagination = ({ caseStudyPerPage, totalCase, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCase / caseStudyPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={
                (currentPage === number ? "active " : "") + "page-number"
              }
            >
              <span
                role="button"
                tabIndex={0}
                onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  caseStudyPerPage: PropTypes.number.isRequired,
  totalCase: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
