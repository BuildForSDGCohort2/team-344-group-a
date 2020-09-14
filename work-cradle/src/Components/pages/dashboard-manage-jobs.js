import React from 'react';
import { Component } from 'react';
import Header from './Header';

class DashboardManageJobs extends Component {
	render() {
		return (
			<>
			{/* <!-- Wrapper --> */}
				<div id="wrapper">

				{/* <!-- Header Container
				================================================== --> */}
				<Header />
				{/* <!-- Header Container / End --> */}


				{/* <!-- Dashboard Container --> */}
				<div className="dashboard-container">

					{/* <!-- Dashboard Sidebar
					================================================== --> */}
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
								<h3>Manage Jobs</h3>

								{/* <!-- Breadcrumbs --> */}
								<nav id="breadcrumbs" className="dark">
									<ul>
										<li><a href="#">Home</a></li>
										<li><a href="#">Dashboard</a></li>
										<li>Manage Jobs</li>
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
											<h3><i className="icon-material-outline-business-center"></i> My Job Listings</h3>
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
																<img src="images/company-logo-05.png" alt="" />
															</a>

															{/* <!-- Details --> */}
															<div className="job-listing-description">
																<h3 className="job-listing-title"><a href="#">Frontend React Developer</a> <span className="dashboard-status-button green">Pending Approval</span></h3>

																{/* <!-- Job Listing Footer --> */}
																<div className="job-listing-footer">
																	<ul>
																		<li><i className="icon-material-outline-date-range"></i> Posted on 10 July, 2019</li>
																		<li><i className="icon-material-outline-date-range"></i> Expiring on 10 August, 2019</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>

													{/* <!-- Buttons --> */}
													<div className="buttons-to-right always-visible">
														<a href="dashboard-manage-candidates.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account"></i> Manage Candidates <span className="button-info">0</span></a>
														<a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
														<a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
													</div>
												</li>

												<li>
													{/* <!-- Job Listing --> */}
													<div className="job-listing">

														{/* <!-- Job Listing Details --> */}
														<div className="job-listing-details">

															{/* <!-- Details --> */}
															<div className="job-listing-description">
																<h3 className="job-listing-title"><a href="#">Full Stack PHP Developer</a> <span className="dashboard-status-button yellow">Expiring</span></h3>

																{/* <!-- Job Listing Footer --> */}
																<div className="job-listing-footer">
																	<ul>
																		<li><i className="icon-material-outline-date-range"></i> Posted on 28 June, 2019</li>
																		<li><i className="icon-material-outline-date-range"></i> Expiring on 28 July, 2019</li>
																	</ul>
																</div>
															</div>

														</div>
													</div>

													{/* <!-- Buttons --> */}
													<div className="buttons-to-right always-visible">
														<a href="dashboard-manage-candidates.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account"></i> Manage Candidates <span className="button-info">3</span></a>
														<a href="#" className="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
														<a href="#" className="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
													</div>
												</li>

												<li>
													{/* <!-- Job Listing --> */}
													<div className="job-listing">

														{/* <!-- Job Listing Details --> */}
														<div className="job-listing-details">

															{/* <!-- Details --> */}
															<div className="job-listing-description">
																<h3 className="job-listing-title"><a href="#">Node.js Developer</a> <span className="dashboard-status-button red">Expired</span></h3>

																{/* <!-- Job Listing Footer --> */}
																<div className="job-listing-footer">
																	<ul>
																		<li><i className="icon-material-outline-date-range"></i> Posted on 16 May, 2019</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>

													{/* <!-- Buttons --> */}
													<div className="buttons-to-right always-visible">
														<a href="dashboard-manage-candidates.html" className="button ripple-effect"><i className="icon-material-outline-supervisor-account"></i> Manage Candidates <span className="button-info">7</span></a>
														<a href="#" className="button dark ripple-effect"><i className="icon-feather-rotate-ccw"></i> Refresh</a>
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

export default DashboardManageJobs; 