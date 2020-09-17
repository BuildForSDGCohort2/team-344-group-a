import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class PageHeader extends Component {
  render() {
    return(
      <>
        <header id="header-container" class="fullwidth">

          {/* <!-- Header --> */}
          <div id="header">
            <div class="container">
              
              {/* <!-- Left Side Content --> */}
              <div class="left-side">
                
                {/* <!-- Logo --> */}
                <div id="logo">
                  <Link to="/"><img src="images/logo.png" alt="" /></Link>
                </div>

                {/* <!-- Main Navigation --> */}
                <nav id="navigation">
                  <ul id="responsive">
                  <li><Link to="#">Browse</Link>
                    <ul className="dropdown-nav">
                      <li><Link to="/jobs">Browse Jobs</Link></li>
                      <li><Link to="/companies">Browse Companies</Link></li>
                    </ul>
                  </li>

                    <li><a href="#">For Employers</a>
                    <ul className="dropdown-nav">
                      <li><Link to="/freelancers">Find a Freelancer</Link></li>
                      <li><Link to="/postajob">Post a Job</Link></li>
                    </ul>
                  </li>
                  </ul>
                </nav>
                <div class="clearfix"></div>
                {/* <!-- Main Navigation / End --> */}
                
              </div>
              {/* <!-- Left Side Content / End --> */}


              {/* <!-- Right Side Content / End --> */}
              <div className="right-side">

                <div className="header-widget">
                  <a href="pages/pages-login.html" className="log-in-button"><i className="icon-feather-log-in"></i><span>Log In / Register</span></a> 
                </div>

              {/* <!-- Mobile Navigation Button -->  */}
                <span className="mmenu-trigger">
                  <button className="hamburger hamburger--collapse" type="button">
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </button>
                </span>

              </div>
              {/* <!-- Right Side Content / End --> */}

            </div>
          </div>
          {/* <!-- Header / End --> */}

        </header>
        <div class="clearfix"></div>
        {/* <!-- Header Container / End --> */}
      </>
    )
  }
}

export default PageHeader;