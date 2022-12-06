import React from 'react';
import Navbar from 'renderer/component/Navbar';
import './style/dashboard.css';
import NavbarTop from 'renderer/component/NavbarTop';

const Dashboard = () => {

  return (
    <div className="container">
      <Navbar />
      <div className='text'>
        <NavbarTop />
        <p>this is Admin dashboard</p>
      </div>
    </div>
  );
};

export default Dashboard;
