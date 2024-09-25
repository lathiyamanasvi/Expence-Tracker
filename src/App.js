import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; // Updated import
import { ExpenseProvider } from './context/ExpenseContext';
import Dashboard from './pages/Dashboard';
import ExpenseForm from './Component/ExpenseForm';
import "./App.css"
import ExpenseList from './Component/ExpenseList';

function App() {
  return (
  <div className='container'>
    <ExpenseProvider>
      <BrowserRouter>
        <Routes> {/* Replaced Switch with Routes */}
          <Route path="/" element={<Dashboard />} /> {/* Changed component prop to element */}
          <Route path="/form" element={<ExpenseForm />} /> {/* Changed component prop to element */}
          <Route path="/list" element={<ExpenseList />} /> {/* Changed component prop to element */}
        </Routes>
      </BrowserRouter>
    </ExpenseProvider>
  </div>

  );
}

export default App;
