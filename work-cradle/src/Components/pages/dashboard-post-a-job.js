import React from 'react';
import { Component } from 'react';
import Header from './Header';

class DashboardPostAJob extends Component {
	render() {
		return (
			<>
				{/* <!-- Wrapper --> */}
				<div id="wrapper">

				{/* <!-- Header Container */}
				{/* ================================================== --> */}
				<Header/>
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
											<li><a href="index-logged-out.html"><i className="icon-material-outline-power-settings-new"></i> </a></li>
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
								<h3>Post a Job</h3>

								{/* <!-- Breadcrumbs --> */}
								<nav id="breadcrumbs" className="dark">
									<ul>
										<li><a href="#">Home</a></li>
										<li><a href="#">Dashboard</a></li>
										<li>Post a Job</li>
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
											<h3><i className="icon-feather-folder-plus"></i> Job Submission Form</h3>
										</div>

										<div className="content with-padding padding-bottom-10">
											<div className="row">

												<div className="col-xl-4">
													<div className="submit-field">
														<h5>Job Title</h5>
														<input type="text" className="with-border" />
													</div>
												</div>

												<div className="col-xl-4">
													<div className="submit-field">
														<h5>Job Type</h5>
														<select className="selectpicker with-border" data-size="7" title="Select Job Type">
															<option>Full Time</option>
															<option>Freelance</option>
															<option>Part Time</option>
															<option>Internship</option>
															<option>Temporary</option>
														</select>
													</div>
												</div>

												<div className="col-xl-4">
													<div className="submit-field">
														<h5>Job Category</h5>
														<select className="selectpicker with-border" data-size="7" title="Select Category">
															<option>Accounting and Finance</option>
															<option>Clerical & Data Entry</option>
															<option>Counseling</option>
															<option>Court Administration</option>
															<option>Human Resources</option>
															<option>Investigative</option>
															<option>IT and Computers</option>
															<option>Law Enforcement</option>
															<option>Management</option>
															<option>Miscellaneous</option>
															<option>Public Relations</option>
														</select>
													</div>
												</div>

												<div className="col-xl-4">
													<div className="submit-field">
														<h5>Location</h5>
														<div className="input-with-icon">
															<div id="autocomplete-container">
																<input id="autocomplete-input" className="with-border" type="text" placeholder="Type Address" />
															</div>
															<i className="icon-material-outline-location-on"></i>
														</div>
													</div>
												</div>

												<div className="col-xl-4">
													<div className="submit-field">
														<h5>Salary</h5>
														<div className="row">
															<div className="col-xl-6">
																<div className="input-with-icon">
																	<input className="with-border" type="text" placeholder="Min" />
																	<i className="currency">USD</i>
																</div>
															</div>
															<div className="col-xl-6">
																<div className="input-with-icon">
																	<input className="with-border" type="text" placeholder="Max" />
																	<i className="currency">USD</i>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div className="col-xl-4">
													<div className="submit-field">
														<h5>Tags <span>(optional)</span>  <i className="help-icon" data-tippy-placement="right" title="Maximum of 10 tags"></i></h5>
														<div className="keywords-container">
															<div className="keyword-input-container">
																<input type="text" className="keyword-input with-border" placeholder="e.g. job title, responsibilites"/>
																<button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
															</div>
															<div className="keywords-list">
															{/* <!-- keywords go here --> */}
															</div>
															<div className="clearfix"></div>
														</div>

													</div>
												</div>

												<div className="col-xl-12">
													<div className="submit-field">
														<h5>Job Description</h5>
														<textarea cols="30" rows="5" className="with-border"></textarea>
														<div className="uploadButton margin-top-30">
															<input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple/>
															<label className="uploadButton-button ripple-effect" for="upload">Upload Files</label>
															<span className="uploadButton-file-name">Images or documents that might be helpful in describing your job</span>
														</div>
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>

								<div className="col-xl-12">
									<a href="#" className="button ripple-effect big margin-top-30"><i className="icon-feather-plus"></i> Post a Job</a>
								</div>

							</div>
							{/* <!-- Row / End --> */}

							{/* <!-- Footer --> */}
							<div className="dashboard-footer-spacer"></div>
							<div className="small-footer margin-top-15">
								<div className="small-footer-copyrights">
									© 2019 <strong>Hireo</strong>. All Rights Reserved.
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

export default DashboardPostAJob;

