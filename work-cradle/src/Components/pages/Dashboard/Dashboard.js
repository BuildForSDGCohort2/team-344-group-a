import React, { Component } from 'react';
import Navbar from './Navbar';
import DashboardContent from './Dashboard-Content';
import Footer from './Footer';


class Dashboard extends Component {
  render () {
    return (
      <>
        <div className="dashboard-container">
          <Navbar />
        
          <div class="dashboard-content-container" data-simplebar>
            <div class="dashboard-content-inner" >
              <DashboardContent />
              <Footer /> 
            </div>
          </div>
        </div>
      </>
    ) 
  }
}

export default Dashboard;