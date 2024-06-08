import React from 'react';
import '../styles/Pagination.css';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const maxPagesToShow = 3;
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  const visiblePages = pages.slice(startPage - 1, endPage);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => currentPage > 1 && setPage(currentPage - 1)}
            aria-disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {visiblePages.map(page => (
          <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
            <button
              className="page-link"
              onClick={() => setPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => currentPage < totalPages && setPage(currentPage + 1)}
            aria-disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
