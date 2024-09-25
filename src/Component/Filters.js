import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import styled from 'styled-components';

const Filters = () => {
  const { filterExpenses } = useContext(ExpenseContext);
  const [category, setCategory] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const applyFilters = () => {
    filterExpenses({ category, dateRange });
  };

  return (
    <FiltersContainer>
      <input 
        type="text" 
        placeholder="Category" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} />
      <input 
        type="date" 
        value={dateRange.start} 
        onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })} />
      <input 
        type="date" 
        value={dateRange.end} 
        onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })} />
      <button onClick={applyFilters}>Apply Filters</button>
    </FiltersContainer>
  );
};

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export default Filters;
