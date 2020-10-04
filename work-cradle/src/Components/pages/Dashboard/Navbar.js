import React, { Component } from 'react'; 
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.item = React.createRef();
    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick() {
    if (this.item.current.children.className==='selected') {
      this.item.current.props.className = 'active';
    }
  }

  render() {
    return (
      <>
        {/* <!-- Dashboard Sidebar */}
        {/* ================================================== */}
        <div className="dashboard-sidebar">
          <div className="dashboard-sidebar-inner" data-simplebar>
            <div className="dashboard-nav-container">

              {/* Responsive Navigation Trigger */}
              <a href={"/#"} className='dashboard-responsive-nav-trigger'>
                <span className="hamburger hamburger--collapse" >
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </span>
                <span className="trigger-title">Dashboard Navigation</span>
              </a>
              
              {/* <!-- Navigation --> */}
              <div className="dashboard-nav">
                <div className="dashboard-nav-inner">

                  <ul data-submenu-title="Start">
                    <li className='' ref={this.item} onClick={this.handleClick}><NavLink activeClassName='selected' to="/user/dashboard"><i className="icon-material-outline-dashboard"></i> Dashboard</NavLink></li> 
                    <li className='' ref={this.item} onClick={this.handleClick}><NavLink activeClassName='selected' to="/user/dashboard/messages" ><i className='icon-material-outline-question-answer' 
                    ></i> Messages <span className="nav-tag">2</span></NavLink></li>
                    <li className='' ref={this.item} onClick={this.handleClick}><NavLink activeClassName='selected' to="/user/dashboard/bookmarks"><i className='icon-material-outline-star-border'
                    ></i> Bookmarks</NavLink></li>
                    <li className='' ref={this.item} onClick={this.handleClick}><NavLink activeClassName='selected' to="/user/dashboard/reviews"><i className='icon-material-outline-rate-review'
                    ></i> Reviews</NavLink></li>
                  </ul>
                  
                  <ul data-submenu-title="Organize and Manage">
                    <li><a href={"/#"}><i className='icon-material-outline-business-center'></i> Jobs</a>
                      <ul>
                        <li className='' ref={this.item} onClick={this.handleClick}><NavLink activeClassName='selected' to="/user/dashboard-manage-jobs">Manage Jobs <span className='nav-tag'
                        >3</span></NavLink></li>
                        <li className='' ref={this.item} onClick={this.handleClick}><NavLink activeClassName='selected' to="/user/dashboard-manage-candidates" >Manage Candidates</NavLink></li>
                        <li className='' ref={this.item} onClick={this.handleClick}><NavLink activeClassName='selected' to="/user/dashboard-post-a-job"
                        >Post a Job</NavLink></li>
                        <li className='' ref={this.item} onClick={this.handleClick}><NavLink activeClassName='selected' to="/user/dashboard/my-active-bids" 
                        >My Active Bids <span className="nav-tag">4</span></NavLink></li>
                      </ul>	
                    </li>
                  </ul>

                  <ul data-submenu-title="Account">
                    <li className='' ref={this.item} onClick={this.handleClick}><NavLink activeClassName='selected' to="/user/dashboard/settings"><i className='icon-material-outline-settings'
                    ></i> Settings</NavLink></li>
                    <li><NavLink activeClassName='selected' to="/index-logged-out"><i className="icon-material-outline-power-settings-new"></i> Logout</NavLink></li>
                  </ul>
                  
                </div>
              </div>
              {/* <!-- Navigation / End --> */}

            </div>
          </div>
        </div>
        {/* <!-- Dashboard Sidebar / End --> */}
        
      </>
    )
  }
}

export default Navbar;