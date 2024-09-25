import React from 'react';
import ExpenseList from '../Component/ExpenseList';
import Filters from '../Component/Filters';
import CategoryBreakdownChart from '../Component/chart/CategoryBreakdownChart';
import ExpenseForm from '../Component/ExpenseForm';
import MonthlyComparisonChart from '../Component/chart/MonthlyComparisonChart';
import "../App.css"
import { FaReceipt } from "react-icons/fa6";
import { CiMoneyCheck1 } from "react-icons/ci";
import { TbReportAnalytics } from "react-icons/tb";
import { FaPlaneUp } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { Link } from 'react-router-dom';
import Logo from '../image/logo.png'
import { IoIosListBox } from "react-icons/io";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaFileCircleCheck } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div>
      {/* <h1>Expense Tracker</h1>
      <ExpenseForm />
      <Filters />
      <ExpenseList />
      <MonthlyComparisonChart />
      <CategoryBreakdownChart /> */}
 

 <div class="dashboard">
  <div class="sidebar">
    <div class="user-profile">
      <img src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png" alt="User Profile" />
      <p className='fs-5 fw-bold text-muted'>Janice Chandler</p>
    </div>
    <ul class="menu">
      <li class="active "><a href="#" className='fs-5'><TiHome className='me-2 fs-4'/>Home</a></li>
     <Link to={'/list'}>
     <li><a href="#" className='fs-5'><IoIosListBox className='me-2 fs-4'/>Expenses</a></li>
     </Link>
      <li><a href="#" className='fs-5'><GiCommercialAirplane className='me-2 fs-4'/>Trips</a></li>
      <li><a href="#" className='fs-5'><FaFileCircleCheck className='me-2 fs-4'/>Approvals</a></li>
      <li><a href="#" className='fs-5'><IoMdSettings className='me-2 fs-4'/>Settings</a></li>
      <li><a href="#" className='fs-5'><FaPhone className='me-2 fs-4'/>Support</a></li>
    </ul>
    <div className='d-flex text-end'>
        <img src={Logo} width="200px"/>
    </div>
  </div>
  <div class="main-content m-2 p-3">
    <div className='d-flex justify-content-between'>
    <div class="pending-tasks col-6 bg-color me-2">
      <h4 style={{borderBottom:"1px solid gray",fontSize:"22px",padding:"10px 0"}}>Pending Tasks</h4>
      <ul>
        <li>
          <span class="icon">&#9200;</span>
          <span class="task">Pending Approvals</span>
          <span class="count">5</span>
        </li>
        <li>
          <span class="icon">&#9992;</span>
          <span class="task">New Trips Registered</span>
          <span class="count">1</span>
        </li>
        <li>
          <span class="icon">&#x1F5C3;</span>
          <span class="task">Unreported Expenses</span>
          <span class="count">4</span>
        </li>
        <li>
          <span class="icon">&#x1F6D2;</span>
          <span class="task">Upcoming Expenses</span>
          <span class="count">0</span>
        </li>
        <li>
          <span class="icon">&#x1F4B2;</span>
          <span class="task">Unreported Advances</span>
          <span class="count">€0.00</span>
        </li>
      </ul>
    </div>
    <div class="recent-expenses col-6 bg-color">
      <h2 style={{borderBottom:"1px solid gray",fontSize:"22px",padding:"10px 0"}}>Recent Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Employee</th>
            <th>Team</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Office Supplies</td>
            <td>John Smith</td>
            <td>Marketing</td>
            <td>€150.00</td>
          </tr>
          <tr>
            <td>Business Lunch</td>
            <td>Sarah Jade</td>
            <td>Sales</td>
            <td>€75.50</td>
          </tr>
          <tr>
            <td>Travel Expenses</td>
            <td>Mike Brown</td>
            <td>Operations</td>
            <td>€450.25</td>
          </tr>
          <tr>
            <td>Client Dinner</td>
            <td>Jennifer Lee</td>
            <td>Marketing</td>
            <td>€120.00</td>
          </tr>
          <tr>
            <td>Hotel</td>
            <td>David Wilson</td>
            <td>Finance</td>
            <td>€275.75</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    <div class="quick-access">
      <h2 style={{borderBottom:"1px solid gray"}} className='ps-2 py-2'>Quick Access</h2>
        <div className='w-100 d-flex justify-content-between px-3 pb-2 my-3'>
        <Link to={'/form'}>
        <button className='py-4'>
        <span class="icon1"><CiMoneyCheck1 /></span>&#43; New expense
      </button>
        </Link>
      <button>
        <span class="icon2"><FaReceipt /></span>&#43; Add receipt
      </button>
      <button>
        <span class="icon3"><TbReportAnalytics /></span>&#43; Create report
      </button>
      <button>
        <span class="icon4"><FaPlaneUp /></span>&#43; Create trip
      </button>
        </div>
    </div>
    <div class="reports">
      <div class="report">
        <h3>Monthly Expense Comparison</h3>
        <div class="chart">
        <MonthlyComparisonChart className="w-50"/>
        </div>
      </div>
      <div class="report">
        <h3>Category Breakdown</h3>
        <div class="chart">
          <CategoryBreakdownChart/>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Dashboard;
