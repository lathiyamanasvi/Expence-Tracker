import React from 'react';
import styled from 'styled-components';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <PageNumber 
          key={page} 
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageNumber>
      ))}
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background: ${({ active }) => (active ? '#333' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  border: 1px solid #333;
  cursor: pointer;
`;

export default Pagination;
