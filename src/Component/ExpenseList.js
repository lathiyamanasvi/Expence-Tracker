import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import Pagination from './Pagination';
import ExpenseItem from './ExpenseItem';
import styled from 'styled-components';

const ExpenseList = () => {
  const { expenses, editExpense, deleteExpense } = useContext(ExpenseContext);
  const [currentPage, setCurrentPage] = useState(1);
  const expensesPerPage = 10;

  const handleEdit = (id, updatedExpense) => {
    editExpense(id, updatedExpense);
  };

  const handleDelete = (id) => {
    deleteExpense(id);
  };

  const paginatedExpenses = expenses.slice(
    (currentPage - 1) * expensesPerPage,
    currentPage * expensesPerPage
  );

  return (
    <ListContainer>
      {paginatedExpenses.map(exp => (
        <ExpenseItem key={exp.id} expense={exp} onEdit={handleEdit} onDelete={handleDelete} />
      ))}
      <Pagination 
        currentPage={currentPage} 
        totalItems={expenses.length} 
        itemsPerPage={expensesPerPage} 
        onPageChange={setCurrentPage} 
      />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  max-width: 800px;
  margin: auto;
`;

export default ExpenseList;
