import React from 'react';
import { Component } from 'react';

class BrowseCompanies extends Component { 
	render () {
		return (
			// <!-- Wrapper -->
			<div id="wrapper">

			{/* <!-- Header Container */}
			{/* ================================================== --> */}
			<header id="header-container" className="fullwidth">

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

									<li><a href="#" className="current">Find Work</a>
										<ul className="dropdown-nav">
											<li><a href="jobs-grid-layout.html">Browse Jobs</a></li>
											<li><a href="tasks-list-layout-2.html">Browse Tasks</a></li>
											<li><a href="browse-companies.html">Browse Companies</a></li>
										</ul>
									</li>

									<li><a href="#">For Employers</a>
										<ul className="dropdown-nav">
											<li><a href="freelancers-grid-layout.html">Find a Freelancer</a></li>
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
												<div className="user-avatar status-online"><img src="../images/user-avatar-small-01.jpg" alt="" /></div>
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

			{/* <!-- Titlebar */}
			{/* ================================================== --> */}
			<div id="titlebar" className="gradient">
				<div className="container">
					<div className="row">
						<div className="col-md-12">

							<h2>Browse Companies</h2>

							{/* <!-- Breadcrumbs --> */}
							<nav id="breadcrumbs" className="dark">
								<ul>
									<li><a href="#">Home</a></li>
									<li><a href="#">Find Work</a></li>
									<li>Browse Companies</li>
								</ul>
							</nav>

						</div>
					</div>
				</div>
			</div>


			{/* <!-- Page Content */}
			{/* ================================================== --> */}
			<div className="container">
				<div className="row">
					<div className="col-xl-12">
						<div className="letters-list">
							<a href="#" className="current">A</a>
							<a href="#">B</a>
							<a href="#">C</a>
							<a href="#">D</a>
							<a href="#">E</a>
							<a href="#">F</a>
							<a href="#">G</a>
							<a href="#">H</a>
							<a href="#">I</a>
							<a href="#">J</a>
							<a href="#">K</a>
							<a href="#">L</a>
							<a href="#">M</a>
							<a href="#">N</a>
							<a href="#">O</a>
							<a href="#">P</a>
							<a href="#">Q</a>
							<a href="#">R</a>
							<a href="#">S</a>
							<a href="#">T</a>
							<a href="#">U</a>
							<a href="#">V</a>
							<a href="#">W</a>
							<a href="#">X</a>
							<a href="#">Y</a>
							<a href="#">Z</a>
						</div>
					</div>
					<div className="col-xl-12">
						<div className="companies-list">
							<a href="single-company-profile.html" className="company">
								<div className="company-inner-alignment">
									<span className="company-logo"><img src="images/company-logo-placeholder.png" alt="" /></span>
									<h4>Acra</h4>
									<div className="star-rating" data-rating="3.5"></div>
								</div>
							</a>
							<a href="single-company-profile.html" className="company">
								<div className="company-inner-alignment">
									<span className="company-logo"><img src="images/browse-companies-02.png" alt="" /></span>
									<h4>Acue</h4>
									<div className="star-rating" data-rating="5.0"></div>
								</div>
							</a>
							<a href="single-company-profile.html" className="company">
								<div className="company-inner-alignment">
									<span className="company-logo"><img src="images/browse-companies-04.png" alt="" /></span>
									<h4>Acorta</h4>
									<span className="company-not-rated">Minimum of 3 votes required</span>
								</div>
							</a>
							<a href="single-company-profile.html" className="company">
								<div className="company-inner-alignment">
									<span className="company-logo"><img src="images/company-logo-placeholder.png" alt="" /></span>
									<h4>Acuneol</h4>
									<span className="company-not-rated">Minimum of 3 votes required</span>
								</div>
							</a>
							<a href="single-company-profile.html" className="company">
								<div className="company-inner-alignment">
									<span className="company-logo"><img src="images/browse-companies-03.png" alt="" /></span>
									<h4>Acodia</h4>
									<div className="star-rating" data-rating="4.9"></div>
								</div>
							</a>
							<a href="single-company-profile.html" className="company">
								<div className="company-inner-alignment">
									<span className="company-logo"><img src="images/company-logo-placeholder.png" alt="" /></span>
									<h4>Acagic</h4>
									<span className="company-not-rated">Minimum of 3 votes required</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>


			{/* <!-- Spacer --> */}
			<div className="margin-top-70"></div>
			{/* <!-- Spacer / End--> */}

			{/* <!-- Footer */}
			{/* ================================================== --> */}
			<div id="footer">
				
				{/* <!-- Footer Top Section --> */}
				<div className="footer-top-section">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">

								{/* <!-- Footer Rows Container --> */}
								<div className="footer-rows-container">
									
									{/* <!-- Left Side --> */}
									<div className="footer-rows-left">
										<div className="footer-row">
											<div className="footer-row-inner footer-logo">
												<img src="images/logo2.png" alt="" />
											</div>
										</div>
									</div>
									
									{/* <!-- Right Side --> */}
									<div className="footer-rows-right">

										{/* <!-- Social Icons --> */}
										<div className="footer-row">
											<div className="footer-row-inner">
												<ul className="footer-social-links">
													<li>
														<a href="#" title="Facebook" data-tippy-placement="bottom" data-tippy-theme="light">
															<i className="icon-brand-facebook-f"></i>
														</a>
													</li>
													<li>
														<a href="#" title="Twitter" data-tippy-placement="bottom" data-tippy-theme="light">
															<i className="icon-brand-twitter"></i>
														</a>
													</li>
													<li>
														<a href="#" title="Google Plus" data-tippy-placement="bottom" data-tippy-theme="light">
															<i className="icon-brand-google-plus-g"></i>
														</a>
													</li>
													<li>
														<a href="#" title="LinkedIn" data-tippy-placement="bottom" data-tippy-theme="light">
															<i className="icon-brand-linkedin-in"></i>
														</a>
													</li>
												</ul>
												<div className="clearfix"></div>
											</div>
										</div>
										
										{/* <!-- Language Switcher --> */}
										<div className="footer-row">
											<div className="footer-row-inner">
												<select className="selectpicker language-switcher" data-selected-text-format="count" data-size="5">
													<option selected>English</option>
													<option>Français</option>
													<option>Español</option>
													<option>Deutsch</option>
												</select>
											</div>
										</div>
									</div>

								</div>
								{/* <!-- Footer Rows Container / End --> */}
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Footer Top Section / End --> */}

				{/* <!-- Footer Middle Section --> */}
				<div className="footer-middle-section">
					<div className="container">
						<div className="row">

							{/* <!-- Links --> */}
							<div className="col-xl-2 col-lg-2 col-md-3">
								<div className="footer-links">
									<h3>For Candidates</h3>
									<ul>
										<li><a href="#"><span>Browse Jobs</span></a></li>
										<li><a href="#"><span>Add Resume</span></a></li>
										<li><a href="#"><span>Job Alerts</span></a></li>
										<li><a href="#"><span>My Bookmarks</span></a></li>
									</ul>
								</div>
							</div>

							{/* <!-- Links --> */}
							<div className="col-xl-2 col-lg-2 col-md-3">
								<div className="footer-links">
									<h3>For Employers</h3>
									<ul>
										<li><a href="#"><span>Browse Candidates</span></a></li>
										<li><a href="#"><span>Post a Job</span></a></li>
										<li><a href="#"><span>Post a Task</span></a></li>
										<li><a href="#"><span>Plans & Pricing</span></a></li>
									</ul>
								</div>
							</div>

							{/* <!-- Links --> */}
							<div className="col-xl-2 col-lg-2 col-md-3">
								<div className="footer-links">
									<h3>Helpful Links</h3>
									<ul>
										<li><a href="#"><span>Contact</span></a></li>
										<li><a href="#"><span>Privacy Policy</span></a></li>
										<li><a href="#"><span>Terms of Use</span></a></li>
									</ul>
								</div>
							</div>

							{/* <!-- Links --> */}
							<div className="col-xl-2 col-lg-2 col-md-3">
								<div className="footer-links">
									<h3>Account</h3>
									<ul>
										<li><a href="#"><span>Log In</span></a></li>
										<li><a href="#"><span>My Account</span></a></li>
									</ul>
								</div>
							</div>

							{/* <!-- Newsletter --> */}
							<div className="col-xl-4 col-lg-4 col-md-12">
								<h3><i className="icon-feather-mail"></i> Sign Up For a Newsletter</h3>
								<p>Weekly breaking news, analysis and cutting edge advices on job searching.</p>
								<form action="#" method="get" className="newsletter">
									<input type="text" name="fname" placeholder="Enter your email address" />
									<button type="submit"><i className="icon-feather-arrow-right"></i></button>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Footer Middle Section / End --> */}
				
				{/* <!-- Footer Copyrights --> */}
				<div className="footer-bottom-section">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								© 2019 <strong>CodeCradle Innovations</strong>. All Rights Reserved.
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Footer Copyrights / End --> */}

			</div>
			{/* <!-- Footer / End --> */}

			</div>
			// {/* <!-- Wrapper / End --> */}
		)
	}
}

export default BrowseCompanies;  

