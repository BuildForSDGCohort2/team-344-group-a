import React from 'react';
import { Link } from 'react-router-dom';

const UserNotif = () => {
  return (
    <>
      <div class="header-widget hide-on-mobile">
        {/* <!-- Notifications --> */}
        <div class="header-notifications">
          {/* <!-- Trigger --> */}
          <div class="header-notifications-trigger">
            <a href="#"><i class="icon-feather-bell"></i><span>1</span></a>
          </div>

          {/* <!-- Dropdown --> */}
          <div class="header-notifications-dropdown">

            <div class="header-notifications-headline">
              <h4>Notifications</h4>
              <button class="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                <i class="icon-feather-check-square"></i>
              </button>
            </div>

            <div class="header-notifications-content">
              <div class="header-notifications-scroll" data-simplebar>
                <ul>
                  {/* <!-- Notification --> */}
                  <li class="notifications-not-read">
                    <a href="dashboard-manage-candidates.html">
                      <span class="notification-icon"><i class="icon-material-outline-group"></i></span>
                      <span class="notification-text">
                        <strong>Emmanuel Omale</strong> applied for a job <span class="color">Full Stack Software Engineer</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
        
        {/* <!-- Messages --> */}
        <div class="header-notifications">
          <div class="header-notifications-trigger">
            <a href="#"><i class="icon-feather-mail"></i><span>1</span></a>
          </div>

          {/* <!-- Dropdown --> */}
          <div class="header-notifications-dropdown">

            <div class="header-notifications-headline">
              <h4>Messages</h4>
              <button class="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                <i class="icon-feather-check-square"></i>
              </button>
            </div>

            <div class="header-notifications-content">
              <div class="header-notifications-scroll" data-simplebar>
                <ul>
                  {/* <!-- Notification --> */}
                  <li class="notifications-not-read">
                    <a href="dashboard-messages.html">
                      <span class="notification-avatar status-online"><img src="images/user-avatar-small-03.jpg" alt=""/></span>
                      <div class="notification-text">
                        <strong>Emmanuel Omale</strong>
                        <p class="notification-msg-text">Thanks for reaching out. I'm quite busy right now on many...</p>
                        <span class="color">4 hours ago</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <a href="" class="header-notifications-button ripple-effect button-sliding-icon">View All Messages<i class="icon-material-outline-arrow-right-alt"></i></a>
          </div>
        </div>

      </div>





      <div class="header-widget">

        {/* <!-- Messages --> */}
        <div class="header-notifications user-menu">
          <div class="header-notifications-trigger">
            <a href="#"><div class="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt=""/></div></a>
          </div>

          {/* <!-- Dropdown --> */}
          <div class="header-notifications-dropdown">

            {/* <!-- User Status --> */}
            <div class="user-status">

              {/* <!-- User Name / Avatar --> */}
              <div class="user-details">
                <div class="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt=""/></div>
                <div class="user-name">
                  Emmanuel Omale <span>Full Stack</span>
                </div>
              </div>
              
              {/* <!-- User Status Switcher --> */}
              <div class="status-switch" id="snackbar-user-status">
                <label class="user-online current-status">Online</label>
                <label class="user-invisible">Invisible</label>
                {/* <!-- Status Indicator --> */}
                <span class="status-indicator" aria-hidden="true"></span>
              </div>	
          </div>
          
          <ul class="user-menu-small-nav">
            <li><Link to="/user/dashboard"><i class="icon-material-outline-dashboard"></i> Dashboard</Link></li>
            <li><Link to="/user/dashboard/settings"><i class="icon-material-outline-settings"></i> Settings</Link></li>
            <li><a href=""><i class="icon-material-outline-power-settings-new"></i> Logout</a></li>
          </ul>

          </div>
        </div>

      </div>
    </>
  )
}

export default UserNotif;