import React, { createContext, useState } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(getFromLocalStorage('expenses') || []);

  const addExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, newExpense];
      saveToLocalStorage('expenses', updatedExpenses);
      return updatedExpenses;
    });
  };

  const editExpense = (id, updatedExpense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.map(exp => exp.id === id ? updatedExpense : exp);
      saveToLocalStorage('expenses', updatedExpenses);
      return updatedExpenses;
    });
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(exp => exp.id !== id);
      saveToLocalStorage('expenses', updatedExpenses);
      return updatedExpenses;
    });
  };

  const filterExpenses = ({ category, dateRange }) => {
    setExpenses((prevExpenses) => {
      let filteredExpenses = prevExpenses;
      if (category) {
        filteredExpenses = filteredExpenses.filter(exp => exp.category === category);
      }
      if (dateRange.start || dateRange.end) {
        filteredExpenses = filteredExpenses.filter(exp => {
          const date = new Date(exp.date);
          const start = dateRange.start ? new Date(dateRange.start) : new Date('1900-01-01');
          const end = dateRange.end ? new Date(dateRange.end) : new Date();
          return date >= start && date <= end;
        });
      }
      return filteredExpenses;
    });
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, editExpense, deleteExpense, filterExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export { ExpenseContext, ExpenseProvider };
