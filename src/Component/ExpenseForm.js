import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import styled from 'styled-components';

const ExpenseForm = () => {
  const { addExpense } = useContext(ExpenseContext);
  const [form, setForm] = useState({
    subject:'',
    totalamount: '',
    description: '',
    date: '',
    category: '',
    paymentMethod: 'cash',
  });
  
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (isNaN(form.amount) || form.amount <= 0) newErrors.amount = 'Invalid amount';
    if (!form.date) newErrors.date = 'Date is required';
    if (!form.category) newErrors.category = 'category is required';
    if (!form.description) newErrors.description = 'Description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addExpense(form);  
      setForm({subject:'', totalamount: '', description: '', date: '', category: '', paymentMethod: 'cash' });
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>

        <input 
        type="text" 
        placeholder="Subject" 
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })} />
      {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}

      <input 
        type="number" 
        placeholder="Amount" 
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })} />
      {errors.amount && <ErrorMessage>{errors.amount}</ErrorMessage>}
      
      <input 
        type="text" 
        placeholder="Description" 
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })} />
      {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}

      <input 
        type="date" 
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })} />
      {errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}

      <input 
        type="text" 
        placeholder="Category" 
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })} />
      {errors.category && <ErrorMessage>{errors.category}</ErrorMessage>}

      <select 
        value={form.paymentMethod}
        onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}>
        <option value="cash">Cash</option>
        <option value="credit">Credit</option>
      </select>
      
      <button type="submit">Add Expense</button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  /* Styles for the form */
`;

const ErrorMessage = styled.p`
  color: red;
`;

export default ExpenseForm;
