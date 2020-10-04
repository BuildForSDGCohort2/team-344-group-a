import React from 'react';
import { Link } from 'react-router-dom';

const UserNotif = () => {
  return (
    <>
      <div className="header-widget hide-on-mobile">
        {/* <!-- Notifications --> */}
        <div className="header-notifications">
          {/* <!-- Trigger --> */}
          <div className="header-notifications-trigger">
            <a href={"javascript:;"}><i className="icon-feather-bell"></i><span>1</span></a>
          </div>

          {/* <!-- Dropdown --> */}
          <div className="header-notifications-dropdown">

            <div className="header-notifications-headline">
              <h4>Notifications</h4>
              <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                <i className="icon-feather-check-square"></i>
              </button>
            </div>

            <div className="header-notifications-content">
              <div className="header-notifications-scroll" data-simplebar>
                <ul>
                  {/* <!-- Notification --> */}
                  <li className="notifications-not-read">
                    <a href={""}>
                      <span className="notification-icon"><i className="icon-material-outline-group"></i></span>
                      <span className="notification-text">
                        <strong>Emmanuel Omale</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
        
        {/* <!-- Messages --> */}
        <div className="header-notifications">
          <div className="header-notifications-trigger">
            <a href={"/#"}><i className="icon-feather-mail"></i><span>1</span></a>
          </div>

          {/* <!-- Dropdown --> */}
          <div className="header-notifications-dropdown">

            <div className="header-notifications-headline">
              <h4>Messages</h4>
              <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                <i className="icon-feather-check-square"></i>
              </button>
            </div>

            <div className="header-notifications-content">
              <div className="header-notifications-scroll" data-simplebar>
                <ul>
                  {/* <!-- Notification --> */}
                  <li className="notifications-not-read">
                    <a href={""}>
                      <span className="notification-avatar status-online"><img src="images/user-avatar-small-03.jpg" alt=""/></span>
                      <div className="notification-text">
                        <strong>Emmanuel Omale</strong>
                        <p className="notification-msg-text">Thanks for reaching out. I'm quite busy right now on many...</p>
                        <span className="color">4 hours ago</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <a href={""} className="header-notifications-button ripple-effect button-sliding-icon">View All Messages<i className="icon-material-outline-arrow-right-alt"></i></a>
          </div>
        </div>

      </div>





      <div className="header-widget">

        {/* <!-- Messages --> */}
        <div className="header-notifications user-menu">
          <div className="header-notifications-trigger">
            <a href={"/#"}><div className="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt=""/></div></a>
          </div>

          {/* <!-- Dropdown --> */}
          <div className="header-notifications-dropdown">

            {/* <!-- User Status --> */}
            <div className="user-status">

              {/* <!-- User Name / Avatar --> */}
              <div className="user-details">
                <div className="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt=""/></div>
                <div className="user-name">
                  Emmanuel Omale <span>Full Stack</span>
                </div>
              </div>
              
              {/* <!-- User Status Switcher --> */}
              <div className="status-switch" id="snackbar-user-status">
                <label className="user-online current-status">Online</label>
                <label className="user-invisible">Invisible</label>
                {/* <!-- Status Indicator --> */}
                <span className="status-indicator" aria-hidden="true"></span>
              </div>	
          </div>
          
          <ul className="user-menu-small-nav">
            <li><Link to="/user/dashboard"><i className="icon-material-outline-dashboard"></i> Dashboard</Link></li>
            <li><Link to="/user/dashboard/settings"><i className="icon-material-outline-settings"></i> Settings</Link></li>
            <li><a href={""}><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
          </ul>

          </div>
        </div>

      </div>
    </>
  )
}

export default UserNotif;