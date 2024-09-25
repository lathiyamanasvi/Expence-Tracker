// src/components/Charts/MonthlyComparisonChart.js
import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2'; // Change from Line to Bar
import { Chart, registerables } from 'chart.js';
import { ExpenseContext } from '../../context/ExpenseContext';

// Register all components from Chart.js
Chart.register(...registerables);

const MonthlyComparisonChart = () => {
  const { expenses } = useContext(ExpenseContext);

  // Prepare data for the chart
  const monthlyData = {};

  // Accumulate expenses by month
  expenses.forEach(exp => {
    const month = new Date(exp.date).toLocaleString('default', { month: 'long', year: 'numeric' });
    monthlyData[month] = (monthlyData[month] || 0) + parseFloat(exp.amount);
  });

  // Create labels and data arrays from the monthlyData object
  const labels = Object.keys(monthlyData);
  const data = Object.values(monthlyData);

  // Define the chart data structure
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Total Expenses',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Change to semi-transparent color
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Basic responsive chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Optional: Allows flexibility in chart size
  };

  return (
    <div > {/* Set width to 50% and center the chart */}
      {/* <h2 style={{ textAlign: 'center' }}>Monthly Expense Comparison</h2> */}
      <Bar data={chartData} options={options} style={{width:"100%",color:"white!important"}} /> {/* Use Bar instead of Line */}
    </div>
  );
};

export default MonthlyComparisonChart;
