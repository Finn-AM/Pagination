import React from 'react';
import './Pagination.css';

function Pagination({ postPerPage, totalPost, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination__container">
      {pageNumbers.map((number) => {
        return (
          <div key={number} className="pagination">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
            >
              {number}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Pagination;
