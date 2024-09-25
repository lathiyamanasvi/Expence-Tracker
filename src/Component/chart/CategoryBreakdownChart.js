// src/components/Charts/CategoryBreakdownChart.js
import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2'; // Import Bar instead of Pie
import { ExpenseContext } from '../../context/ExpenseContext';

const CategoryBreakdownChart = () => {
  const { expenses } = useContext(ExpenseContext);

  // Prepare data for the chart
  const categoryData = {};
  expenses.forEach(exp => {
    if (!categoryData[exp.category]) {
      categoryData[exp.category] = 0;
    }
    categoryData[exp.category] += parseFloat(exp.amount);
  });

  const labels = Object.keys(categoryData);
  const data = Object.values(categoryData);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Amount',
        data: data,
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
        borderWidth: 1,
      },
    ],
  };

  // Basic responsive chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows flexibility in chart size
    scales: {
      x: {
        title: {
          display: true,
          text: 'Categories', // Title for x-axis
        },
      },
      y: {
        title: {
          display: true,
          text: 'Total Amount', // Title for y-axis
        },
        beginAtZero: true, // Ensure y-axis starts at zero
      },
    },
  };

  return (
    <div> {/* Set width to 50% and center it */}
      {/* <h2 style={{ textAlign: 'center' }}>Category Breakdown</h2> */}
      <Bar data={chartData} options={options} style={{width:"100%"}} className='text-white' /> {/* Use Bar instead of Pie */}
    </div>
  );
};

export default CategoryBreakdownChart;
