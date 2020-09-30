import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import DashboardContent from './Dashboard-Content';
import Messages from './Messages';
import Bookmarks from './Bookmarks';
import Reviews from './Reviews';
import PostAJob from './Post-a-Job';
import MyBids from './My-bids';
import ManageJobs from './Manage-Jobs';
import ManageCandidates from './Manage-Candidates';
import Settings from './Settings';

import Footer from './Footer';


class Dashboard extends Component {
  render() {
    return (
      <Router>
          <div className="dashboard-container">
            <Navbar />

            <div class="dashboard-content-container" data-simplebar>
              <div class="dashboard-content-inner" >
                <Switch>
                  <Route exact path='/user/dashboard' component={DashboardContent}/>
                  <Route path='/user/dashboard/messages' component={Messages} />
                  <Route path='/user/dashboard/bookmarks' component={Bookmarks} />
                  <Route path='/user/dashboard/reviews' component={Reviews} />
                  <Route path='/user/dashboard/manage-jobs' component={ManageJobs} />
                  <Route path='/user/dashboard/manage-candidates' component={ManageCandidates} />
                  <Route path='/user/dashboard/post-a-job' component={PostAJob} />
                  <Route path='/user/dashboard/my-bids' component={MyBids} />
                  <Route path='/user/dashboard/settings' component={Settings} />

                </Switch>
                <Footer />
              </div>
            </div>
          </div>
      </Router>
    )
  }
}

export default Dashboard;