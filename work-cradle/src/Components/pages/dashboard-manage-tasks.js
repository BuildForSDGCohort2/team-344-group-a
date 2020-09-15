import React from 'react';
import { Component } from 'react';
import Header from './Header';

class DashboardManageTasks extends Component {
	render() {
		return (
			<>
				{/* <!-- Wrapper --> */}
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
											<li><a href="#"><i className="icon-material-outline-business-center"></i> Jobs</a>
												<ul>
													<li><a href="dashboard-manage-jobs.html">Manage Jobs <span className="nav-tag">3</span></a></li>
													<li><a href="dashboard-manage-candidates.html">Manage Candidates</a></li>
													<li><a href="dashboard-post-a-job.html">Post a Job</a></li>
												</ul>	
											</li>
											<li className="active-submenu"><a href="#"><i className="icon-material-outline-assignment"></i> Tasks</a>
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
											<li><a href="index-logged-out.html"><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
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
								<h3>Manage Tasks</h3>

								{/* <!-- Breadcrumbs --> */}
								<nav id="breadcrumbs" className="dark">
									<ul>
										<li><a href="#">Home</a></li>
										<li><a href="#">Dashboard</a></li>
										<li>Manage Tasks</li>
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
											<h3><i className="icon-material-outline-assignment"></i> My Tasks</h3>
										</div>

										<div className="content">
											<ul className="dashboard-box-list">
												<li>
													{/* <!-- Job Listing --> */}
													<div className="job-listing width-adjustment">

														{/* <!-- Job Listing Details --> */}
														<div className="job-listing-details">

															{/* <!-- Details --> */}
															<div className="job-listing-description">
																<h3 className="job-listing-title"><a href="#">Design a Landing Page</a> <span className="dashboard-status-button yellow">Expiring</span></h3>

																{/* <!-- Job Listing Footer --> */}
																<div className="job-listing-footer">
																	<ul>
																		<li><i className="icon-material-outline-access-time"></i> 23 hours left</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
													
													{/* <!-- Task Details --> */}
													<ul className="dashboard-task-info">
														<li><strong>3</strong><span>Bids</span></li>
														<li><strong>$22</strong><span>Avg. Bid</span></li>
														<li><strong>$15 - $30</strong><span>Hourly Rate</span></li>
													</ul>

													{/* <!-- Buttons --> */}
													<div className="buttons-to-right always-visible">
														<a href="dashboard-manage-bidders.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account"></i> Manage Bidders <span className="button-info">3</span></a>
														<a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
														<a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
													</div>
												</li>

												<li>
													{/* <!-- Job Listing --> */}
													<div className="job-listing width-adjustment">

														{/* <!-- Job Listing Details --> */}
														<div className="job-listing-details">

															{/* <!-- Details --> */}
															<div className="job-listing-description">
																<h3 className="job-listing-title"><a href="#">Food Delivery Mobile Application</a></h3>

																{/* <!-- Job Listing Footer --> */}
																<div className="job-listing-footer">
																	<ul>
																		<li><i className="icon-material-outline-access-time"></i> 6 days, 23 hours left</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>

													{/* <!-- Task Details --> */}
													<ul className="dashboard-task-info">
														<li><strong>3</strong><span>Bids</span></li>
														<li><strong>$3,200</strong><span>Avg. Bid</span></li>
														<li><strong>$2,500 - $4,500</strong><span>Fixed Price</span></li>
													</ul>

													{/* <!-- Buttons --> */}
													<div className="buttons-to-right always-visible">
														<a href="dashboard-manage-bidders.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account"></i> Manage Bidders <span className="button-info">3</span></a>
														<a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
														<a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
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

			</>
		)
	}
}

export default DashboardManageTasks;
