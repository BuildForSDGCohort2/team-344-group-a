import React from 'react';
import { Component } from 'react';
import Header from './Header';

class DashboardManageCnadidates extends Component {
	render() {
		return (
			<>
				<div id="wrapper">

				{/* <!-- Header Container */}
				{/* ================================================== --> */}
				<Header />

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
											<li><a href="dashboard-bookmarks.html"><i className="icon-material-outline-star-border"></i> Bookmarks</a></li>
											<li><a href="dashboard-reviews.html"><i className="icon-material-outline-rate-review"></i> Reviews</a></li>
										</ul>
										
										<ul data-submenu-title="Organize and Manage">
											<li className="active-submenu"><a href="#"><i className="icon-material-outline-business-center"></i> Jobs</a>
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
								<h3>Manage Candidates</h3>
								<span className="margin-top-7">Job Applications for <a href="#">Full Stack PHP Developer</a></span>

								{/* <!-- Breadcrumbs --> */}
								<nav id="breadcrumbs" className="dark">
									<ul>
										<li><a href="#">Home</a></li>
										<li><a href="#">Dashboard</a></li>
										<li>Manage Candidates</li>
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
											<h3><i className="icon-material-outline-supervisor-account"></i> 3 Candidates</h3>
										</div>

										<div className="content">
											<ul className="dashboard-box-list">
												<li>
													{/* <!-- Overview --> */}
													<div className="freelancer-overview manage-candidates">
														<div className="freelancer-overview-inner">

															{/* <!-- Avatar --> */}
															<div className="freelancer-avatar">
																<div className="verified-badge"></div>
																<a href="#"><img src="images/user-avatar-big-03.jpg" alt="" /></a>
															</div>

															{/* <!-- Name --> */}
															<div className="freelancer-name">
																<h4><a href="#">Sindy Forest <img className="flag" src="images/flags/au.svg" alt="" title="Australia" data-tippy-placement="top" /></a></h4>

																{/* <!-- Details --> */}
																<span className="freelancer-detail-item"><a href="#"><i className="icon-feather-mail"></i> <span className="__cf_email__" data-cfemail="02716b6c667b42677a636f726e672c616d6f">[email&#160;protected]</span></a></span>
																<span className="freelancer-detail-item"><i className="icon-feather-phone"></i> (+61) 123-456-789</span>

																{/* <!-- Rating --> */}
																<div className="freelancer-rating">
																	<div className="star-rating" data-rating="5.0"></div>
																</div>

																{/* <!-- Buttons --> */}
																<div className="buttons-to-right always-visible margin-top-25 margin-bottom-5">
																	<a href="#" className="button ripple-effect"><i className="icon-feather-file-text"></i> Download CV</a>
																	<a href="#small-dialog" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail"></i> Send Message</a>
																	<a href="#" className="button gray ripple-effect ico" title="Remove Candidate" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
																</div>
															</div>
														</div>
													</div>
												</li>

												<li>
													{/* <!-- Overview --> */}
													<div className="freelancer-overview manage-candidates">
														<div className="freelancer-overview-inner">

															{/* <!-- Avatar --> */}
															<div className="freelancer-avatar">
																<a href="#"><img src="images/user-avatar-placeholder.png" alt="" /></a>
															</div>

															{/* <!-- Name --> */}
															<div className="freelancer-name">
																<h4><a href="#">Sebastiano Piccio <img className="flag" src="images/flags/it.svg" alt="" title="Italy" data-tippy-placement="top" /></a></h4>
															

																{/* <!-- Details --> */}
																<span className="freelancer-detail-item"><a href="#"><i className="icon-feather-mail"></i> <span className="__cf_email__" data-cfemail="e89b8d8a899b9c81898687a88d90898598848dc68b8785">[email&#160;protected]</span></a></span>
																<span className="freelancer-detail-item"><i className="icon-feather-phone"></i> (+39) 123-456-789</span>

																{/* <!-- Rating --> */}
																<br />
																<span className="company-not-rated">Minimum of 3 votes required</span>

																{/* <!-- Buttons --> */}
																<div className="buttons-to-right always-visible margin-top-25 margin-bottom-5">
																	<a href="#" className="button ripple-effect"><i className="icon-feather-file-text"></i> Download CV</a>
																	<a href="#small-dialog" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail"></i> Send Message</a>
																	<a href="#" className="button gray ripple-effect ico" title="Remove Candidate" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
																</div>
															</div>
														</div>
													</div>
												</li>

												<li>
													{/* <!-- Overview --> */}
													<div className="freelancer-overview manage-candidates">
														<div className="freelancer-overview-inner">

															{/* <!-- Avatar --> */}
															<div className="freelancer-avatar">
																<a href="#"><img src="images/user-avatar-placeholder.png" alt="" /></a>
															</div>

															{/* <!-- Name --> */}
															<div className="freelancer-name">
																<h4><a href="#">Nikolay Azarov <img className="flag" src="images/flags/ru.svg" alt="" title="Russia" data-tippy-placement="top" /></a></h4>

																{/* <!-- Details --> */}
																<span className="freelancer-detail-item"><a href="#"><i className="icon-feather-mail"></i> <span className="__cf_email__" data-cfemail="2e40474541424f576e4b564f435e424b004d4143">[email&#160;protected]</span></a></span>
																<span className="freelancer-detail-item"><i className="icon-feather-phone"></i> (+7) 123-456-789</span>

																{/* <!-- Rating --> */}
																<br />
																<span className="company-not-rated">Minimum of 3 votes required</span>

																{/* <!-- Buttons --> */}
																<div className="buttons-to-right always-visible margin-top-25 margin-bottom-5">
																	<a href="#" className="button ripple-effect"><i className="icon-feather-file-text"></i> Download CV</a>
																	<a href="#small-dialog" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail"></i> Send Message</a>
																	<a href="#" className="button gray ripple-effect ico" title="Remove Candidate" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
																</div>
															</div>
														</div>
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
				{/* <!-- Wrapper / End --> */}


				{/* <!-- Send Direct Message Popup */}
				{/* ================================================== --> */}
				<div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs">

					{/* <!--Tabs --> */}
					<div className="sign-in-form">

						<ul className="popup-tabs-nav">
							<li><a href="#tab">Send Message</a></li>
						</ul>

						<div className="popup-tabs-container">

							{/* <!-- Tab --> */}
							<div className="popup-tab-content" id="tab">
								
								{/* <!-- Welcome Text --> */}
								<div className="welcome-text">
									<h3>Direct Message To Sindy</h3>
								</div>
									
								{/* <!-- Form --> */}
								<form method="post" id="send-pm">
									<textarea name="textarea" cols="10" placeholder="Message" className="with-border" required></textarea>
								</form>
								
								{/* <!-- Button --> */}
								<button className="button full-width button-sliding-icon ripple-effect" type="submit" form="send-pm">Send <i className="icon-material-outline-arrow-right-alt"></i></button>

							</div>

						</div>
					</div>
				</div>
				{/* <!-- Send Direct Message Popup / End --> */}

			</>
		)
	}
}

export default DashboardManageCnadidates; 
