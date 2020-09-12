import React from 'react';
import { Component } from 'react';

class DashboardBookmark extends Component {
	render () {
		return (
			<>
			{/* // <!-- Wrapper --> */}
			<div id="wrapper">

			{/* <!-- Header Container */}
			{/* ================================================== --> */}
			<header id="header-container" className="fullwidth dashboard-header not-sticky">

				{/* <!-- Header --> */}
				<div id="header">
					<div className="container">
						
						{/* <!-- Left Side Content --> */}
						<div className="left-side">
							
							{/* <!-- Logo --> */}
							<div id="logo">
								<a href="../Homepage.html"><img src="../images/logo.png" alt="" /></a>
							</div>

							{/* <!-- Main Navigation --> */}
							<nav id="navigation">
								<ul id="responsive">
									<li><a href="#">Browse</a>
										<ul className="dropdown-nav">
											<li><a href="jobs-grid-layout.html">Browse Jobs</a></li>
											<li><a href="tasks-list-layout-2.html">Browse Tasks</a></li>
											<li><a href="browse-companies.html">Browse Companies</a></li>
										</ul>
									</li>

									<li><a href="#">For Employers</a>
										<ul className="dropdown-nav">
											<li><a href="#">Find a Freelancer</a></li>
											<li><a href="dashboard-post-a-job.html">Post a Job</a></li>
											<li><a href="dashboard-post-a-task.html">Post a Task</a></li>
										</ul>
									</li>

									<li><a href="pages-blog.html">Blog</a></li>
								</ul>
							</nav>
							<div className="clearfix"></div>
							{/* <!-- Main Navigation / End --> */}
							
						</div>
						{/* <!-- Left Side Content / End --> */}


						{/* <!-- Right Side Content / End --> */}
						<div className="right-side">

							{/* <!--  User Notifications --> */}
							<div className="header-widget hide-on-mobile">
								
								{/* <!-- Notifications --> */}
								<div className="header-notifications">

									{/* <!-- Trigger --> */}
									<div className="header-notifications-trigger">
										<a href="#"><i className="icon-feather-bell"></i><span>4</span></a>
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
														<a href="dashboard-manage-candidates.html">
															<span className="notification-icon"><i className="icon-material-outline-group"></i></span>
															<span className="notification-text">
																<strong>Michael Shannah</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
															</span>
														</a>
													</li>

													{/* <!-- Notification --> */}
													<li>
														<a href="dashboard-manage-bidders.html">
															<span className="notification-icon"><i className=" icon-material-outline-gavel"></i></span>
															<span className="notification-text">
																<strong>Gilbert Allanis</strong> placed a bid on your <span className="color">iOS App Development</span> project
															</span>
														</a>
													</li>

													{/* <!-- Notification --> */}
													<li>
														<a href="dashboard-manage-jobs.html">
															<span className="notification-icon"><i className="icon-material-outline-autorenew"></i></span>
															<span className="notification-text">
																Your job listing <span className="color">Full Stack PHP Developer</span> is expiring.
															</span>
														</a>
													</li>

													{/* <!-- Notification --> */}
													<li>
														<a href="dashboard-manage-candidates.html">
															<span className="notification-icon"><i className="icon-material-outline-group"></i></span>
															<span className="notification-text">
																<strong>Sindy Forrest</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
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
										<a href="#"><i className="icon-feather-mail"></i><span>3</span></a>
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
														<a href="dashboard-messages.html">
															<span className="notification-avatar status-online"><img src="images/user-avatar-small-03.jpg" alt="" /></span>
															<div className="notification-text">
																<strong>David Peterson</strong>
																<p className="notification-msg-text">Thanks for reaching out. I'm quite busy right now on many...</p>
																<span className="color">4 hours ago</span>
															</div>
														</a>
													</li>

													{/* <!-- Notification --> */}
													<li className="notifications-not-read">
														<a href="dashboard-messages.html">
															<span className="notification-avatar status-offline"><img src="images/user-avatar-small-02.jpg" alt="" /></span>
															<div className="notification-text">
																<strong>Sindy Forest</strong>
																<p className="notification-msg-text">Hi Tom! Hate to break it to you, but I'm actually on vacation until...</p>
																<span className="color">Yesterday</span>
															</div>
														</a>
													</li>

													{/* <!-- Notification --> */}
													<li className="notifications-not-read">
														<a href="dashboard-messages.html">
															<span className="notification-avatar status-online"><img src="images/user-avatar-placeholder.png" alt="" /></span>
															<div className="notification-text">
																<strong>Marcin Kowalski</strong>
																<p className="notification-msg-text">I received payment. Thanks for cooperation!</p>
																<span className="color">Yesterday</span>
															</div>
														</a>
													</li>
												</ul>
											</div>
										</div>

										<a href="dashboard-messages.html" className="header-notifications-button ripple-effect button-sliding-icon">View All Messages<i className="icon-material-outline-arrow-right-alt"></i></a>
									</div>
								</div>

							</div>
							{/* <!--  User Notifications / End --> */}

							{/* <!-- User Menu --> */}
							<div className="header-widget">

								{/* <!-- Messages --> */}
								<div className="header-notifications user-menu">
									<div className="header-notifications-trigger">
										<a href="#"><div className="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt="" /></div></a>
									</div>

									{/* <!-- Dropdown --> */}
									<div className="header-notifications-dropdown">

										{/* <!-- User Status --> */}
										<div className="user-status">

											{/* <!-- User Name / Avatar --> */}
											<div className="user-details">
												<div className="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt="" /></div>
												<div className="user-name">
													Tom Smith <span>Freelancer</span>
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
										<li><a href="dashboard.html"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
										<li><a href="dashboard-settings.html"><i className="icon-material-outline-settings"></i> Settings</a></li>
										<li><a href="Homepage.html"><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
									</ul>

									</div>
								</div>

							</div>
							{/* <!-- User Menu / End --> */}

							{/* <!-- Mobile Navigation Button --> */}
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
			<div className="clearfix"></div>
			{/* <!-- Header Container / End --> */}


			{/* <!-- Dashboard Container --> */}
			<div className="dashboard-container">

				{/* <!-- Dashboard Sidebar */}
				{/* ================================================== --> */}
				<div className="dashboard-sidebar">
					<div className="dashboard-sidebar-inner" data-simplebar>
						<div className="dashboard-nav-container">

							{/* <!-- Responsive Navigation Trigger --> */}
							<a href="#" className="dashboard-responsive-nav-trigger">
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
										<li><a href="dashboard.html"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
										<li><a href="dashboard-messages.html"><i className="icon-material-outline-question-answer"></i> Messages <span className="nav-tag">2</span></a></li>
										<li className="active"><a href="dashboard-bookmarks.html"><i className="icon-material-outline-star-border"></i> Bookmarks</a></li>
										<li><a href="dashboard-reviews.html"><i className="icon-material-outline-rate-review"></i> Reviews</a></li>
									</ul>
									
									<ul data-submenu-title="Organize and Manage">
										<li><a href="#"><i className="icon-material-outline-business-center"></i> Jobs</a>
											<ul>
												<li><a href="dashboard-manage-jobs.html">Manage Jobs <span className="nav-tag">3</span></a></li>
												<li><a href="dashboard-manage-candidates.html">Manage Candidates</a></li>
												<li><a href="dashboard-post-a-job.html">Post a Job</a></li>
											</ul>	
										</li>
										<li><a href="#"><i className="icon-material-outline-assignment"></i> Tasks</a>
											<ul>
												<li><a href="dashboard-manage-tasks.html">Manage Tasks <span className="nav-tag">2</span></a></li>
												<li><a href="dashboard-manage-bidders.html">Manage Bidders</a></li>
												<li><a href="dashboard-my-active-bids.html">My Active Bids <span className="nav-tag">4</span></a></li>
												<li><a href="dashboard-post-a-task.html">Post a Task</a></li>
											</ul>	
										</li>
									</ul>

									<ul data-submenu-title="Account">
										<li><a href="dashboard-settings.html"><i className="icon-material-outline-settings"></i> Settings</a></li>
										<li><a href="Homepage.html"><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
									</ul>
									
								</div>
							</div>
							{/* <!-- Navigation / End --> */}

						</div>
					</div>
				</div>
				{/* <!-- Dashboard Sidebar / End --> */}


				{/* <!-- Dashboard Content */}
				{/* ================================================== --> */}
				<div className="dashboard-content-container" data-simplebar>
					<div className="dashboard-content-inner" >
						
						{/* <!-- Dashboard Headline --> */}
						<div className="dashboard-headline">
							<h3>Bookmarks</h3>

							{/* <!-- Breadcrumbs --> */}
							<nav id="breadcrumbs" className="dark">
								<ul>
									<li><a href="#">Home</a></li>
									<li><a href="#">Dashboard</a></li>
									<li>Bookmarks</li>
								</ul>
							</nav>
						</div>
				
						{/* <!-- Row --> */}
						<div className="row">

							{/* <!-- Dashboard Box --> */}
							<div className="col-xl-12">
								<div className="dashboard-box margin-top-0">

									{/* <!-- Headline --> */}
									<div className="headline">
										<h3><i className="icon-material-outline-business-center"></i> Bookmarked Jobs</h3>
									</div>

									<div className="content">
										<ul className="dashboard-box-list">
											<li>
												{/* <!-- Job Listing --> */}
												<div className="job-listing">

													{/* <!-- Job Listing Details --> */}
													<div className="job-listing-details">

														{/* <!-- Logo --> */}
														<a href="#" className="job-listing-company-logo">
															<img src="images/company-logo-02.png" alt="" />
														</a>

														{/* <!-- Details --> */}
														<div className="job-listing-description">
															<h3 className="job-listing-title"><a href="#">Barista and Cashier</a></h3>

															{/* <!-- Job Listing Footer --> */}
															<div className="job-listing-footer">
																<ul>
																	<li><i className="icon-material-outline-business"></i> Coffee</li>
																	<li><i className="icon-material-outline-location-on"></i> San Francisco</li>
																	<li><i className="icon-material-outline-business-center"></i> Full Time</li>
																	<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												{/* <!-- Buttons --> */}
												<div className="buttons-to-right">
													<a href="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="left"><i className="icon-feather-trash-2"></i></a>
												</div>
											</li>

											<li>
												{/* <!-- Job Listing --> */}
												<div className="job-listing">

													{/* <!-- Job Listing Details --> */}
													<div className="job-listing-details">

														{/* <!-- Logo --> */}
														<a href="#" className="job-listing-company-logo">
															<img src="images/company-logo-04.png" alt="" />
														</a>


														{/* <!-- Details --> */}
														<div className="job-listing-description">
															<h3 className="job-listing-title"><a href="#">Administrative Assistant</a></h3>

															{/* <!-- Job Listing Footer --> */}
															<div className="job-listing-footer">
																<ul>
																	<li><i className="icon-material-outline-business"></i> Mates</li>
																	<li><i className="icon-material-outline-location-on"></i> San Francisco</li>
																	<li><i className="icon-material-outline-business-center"></i> Full Time</li>
																	<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
																</ul>
															</div>
														</div>

													</div>
												</div>

												{/* <!-- Buttons --> */}
												<div className="buttons-to-right">
													<a href="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="left"><i className="icon-feather-trash-2"></i></a>
												</div>
											</li>

											<li>
												{/* <!-- Job Listing --> */}
												<div className="job-listing">

													{/* <!-- Job Listing Details --> */}
													<div className="job-listing-details">

														{/* <!-- Logo --> */}
														<a href="#" className="job-listing-company-logo">
															<img src="images/company-logo-05.png" alt="" />
														</a>

														{/* <!-- Details --> */}
														<div className="job-listing-description">
															<h3 className="job-listing-title"><a href="#">Construction Labourers</a></h3>

															{/* <!-- Job Listing Footer --> */}
															<div className="job-listing-footer">
																<ul>
																	<li><i className="icon-material-outline-business"></i> Podous</li>
																	<li><i className="icon-material-outline-location-on"></i> San Francisco</li>
																	<li><i className="icon-material-outline-business-center"></i> Full Time</li>
																	<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
																</ul>
															</div>
														</div>
													</div>
												</div>

												{/* <!-- Buttons --> */}
												<div className="buttons-to-right">
													<a href="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="left"><i className="icon-feather-trash-2"></i></a>
												</div>
											</li>

										</ul>
									</div>
								</div>
							</div>

							{/* <!-- Dashboard Box --> */}
							<div className="col-xl-12">
								<div className="dashboard-box">

									{/* <!-- Headline --> */}
									<div className="headline">
										<h3><i className="icon-material-outline-face"></i> Bookmarked Freelancers</h3>
									</div>

									<div className="content">
										<ul className="dashboard-box-list">
											<li>
												{/* <!-- Overview --> */}
												<div className="freelancer-overview">
													<div className="freelancer-overview-inner">

														{/* <!-- Avatar --> */}
														<div className="freelancer-avatar">
															<div className="verified-badge"></div>
															<a href="#"><img src="images/user-avatar-big-02.jpg" alt="" /></a>
														</div>

														{/* <!-- Name --> */}
														<div className="freelancer-name">
															<h4><a href="#">David Peterson <img className="flag" src="images/flags/de.svg" alt="" title="Germany" data-tippy-placement="top" /></a></h4>
															<span>iOS Expert + Node Dev</span>
															{/* <!-- Rating --> */}
															<div className="freelancer-rating">
																<div className="star-rating" data-rating="4.2"></div>
															</div>
														</div>
													</div>
												</div>

												{/* <!-- Buttons --> */}
												<div className="buttons-to-right">
													<a href="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="left"><i className="icon-feather-trash-2"></i></a>
												</div>
											</li>
											<li>
												{/* <!-- Overview --> */}
												<div className="freelancer-overview">
													<div className="freelancer-overview-inner">
														
														{/* <!-- Avatar --> */}
														<div className="freelancer-avatar">
															<a href="#"><img src="images/user-avatar-placeholder.png" alt="" /></a>
														</div>

														{/* <!-- Name --> */}
														<div className="freelancer-name">
															<h4><a href="#">Marcin Kowalski <img className="flag" src="images/flags/pl.svg" alt="" title="Poland" data-tippy-placement="top" /></a></h4>
															<span>Front-End Developer</span>
															{/* <!-- Rating --> */}
															<div className="freelancer-rating">
																<div className="star-rating" data-rating="4.7"></div>
															</div>
														</div>
													</div>
												</div>

												{/* <!-- Buttons --> */}
												<div className="buttons-to-right">
													<a href="#" className="button red ripple-effect ico" title="Remove" data-tippy-placement="left"><i className="icon-feather-trash-2"></i></a>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>

						</div>
						{/* <!-- Row / End --> */}

						{/* <!-- Footer --> */}
						<div className="dashboard-footer-spacer"></div>
						<div className="small-footer margin-top-15">
							<div className="small-footer-copyrights">
								© 2019 <strong>CodeCradle Innovations</strong>. All Rights Reserved.
							</div>
							<ul className="footer-social-links">
								<li>
									<a href="#" title="Facebook" data-tippy-placement="top">
										<i className="icon-brand-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="#" title="Twitter" data-tippy-placement="top">
										<i className="icon-brand-twitter"></i>
									</a>
								</li>
								<li>
									<a href="#" title="Google Plus" data-tippy-placement="top">
										<i className="icon-brand-google-plus-g"></i>
									</a>
								</li>
								<li>
									<a href="#" title="LinkedIn" data-tippy-placement="top">
										<i className="icon-brand-linkedin-in"></i>
									</a>
								</li>
							</ul>
							<div className="clearfix"></div>
						</div>
						{/* <!-- Footer / End --> */}

					</div>
				</div>
				{/* <!-- Dashboard Content / End --> */}

			</div>
			{/* <!-- Dashboard Container / End --> */}

			</div>
			// {/* <!-- Wrapper / End --> */}


			// {/* <!-- Apply for a job popup */}
			
			<div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs">

				{/* <!--Tabs --> */}
				<div className="sign-in-form">

					<ul className="popup-tabs-nav">
						<li><a href="#tab">Add Note</a></li>
					</ul>

					<div className="popup-tabs-container">

						{/* <!-- Tab --> */}
						<div className="popup-tab-content" id="tab">
							
							{/* <!-- Welcome Text --> */}
							<div className="welcome-text">
								<h3>Do Not Forget 😎</h3>
							</div>
								
							{/* <!-- Form --> */}
							<form method="post" id="add-note">

								<select className="selectpicker with-border default margin-bottom-20" data-size="7" title="Priority">
									<option>Low Priority</option>
									<option>Medium Priority</option>
									<option>High Priority</option>
								</select>

								<textarea name="textarea" cols="10" placeholder="Note" className="with-border"></textarea>

							</form>
							
							{/* <!-- Button --> */}
							<button className="button full-width button-sliding-icon ripple-effect" type="submit" form="add-note">Add Note <i className="icon-material-outline-arrow-right-alt"></i></button>

						</div>

					</div>
				</div>
			</div>
			{/* <!-- Apply for a job popup / End --> */}
			</>
		)
	}
}

export default DashboardBookmark;