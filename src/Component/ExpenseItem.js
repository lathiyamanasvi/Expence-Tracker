import React, { useState } from 'react';
import styled from 'styled-components';

const ExpenseItem = ({ expense, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState(expense);

  const handleSave = () => {
    onEdit(expense.id, editedExpense);
    setIsEditing(false);
  };

  return (
    <ItemContainer>
      {isEditing ? (
        <>
          <input 
            type="number" 
            value={editedExpense.amount}
            onChange={(e) => setEditedExpense({ ...editedExpense, amount: e.target.value })} />
          <input 
            type="text" 
            value={editedExpense.description}
            onChange={(e) => setEditedExpense({ ...editedExpense, description: e.target.value })} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{expense.amount}</span>
          <span>{expense.description}</span>
          <span>{expense.subject}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export default ExpenseItem;
