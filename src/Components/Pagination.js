import React from "react";

export const Pagination = ({ postsPerPage, totalposts, handlePageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalposts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key="number" className="page-item">
            <a
              href="!#"
              className="page-link"
              onClick={() => handlePageChange(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
