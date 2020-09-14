import React from 'react';
import { Component } from 'react';
import Header from './Header';

class DashboardMyActiveBids extends Component {
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
							<h3>My Active Bids</h3>

							{/* <!-- Breadcrumbs --> */}
							<nav id="breadcrumbs" className="dark">
								<ul>
									<li><a href="#">Home</a></li>
									<li><a href="#">Dashboard</a></li>
									<li>My Active Bids</li>
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
										<h3><i className="icon-material-outline-gavel"></i> Bids List</h3>
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
															<h3 className="job-listing-title"><a href="#">WordPress Guru Needed</a></h3>
														</div>
													</div>
												</div>
												
												{/* <!-- Task Details --> */}
												<ul className="dashboard-task-info">
													<li><strong>$40</strong><span>Hourly Rate</span></li>
													<li><strong>2 Days</strong><span>Delivery Time</span></li>
												</ul>

												{/* <!-- Buttons --> */}
												<div className="buttons-to-right always-visible">
													<a href="#small-dialog" className="popup-with-zoom-anim button dark ripple-effect ico" title="Edit Bid" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
													<a href="#" className="button red ripple-effect ico" title="Cancel Bid" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
												</div>
											</li>
											<li>
												{/* <!-- Job Listing --> */}
												<div className="job-listing width-adjustment">

													{/* <!-- Job Listing Details --> */}
													<div className="job-listing-details">

														{/* <!-- Details --> */}
														<div className="job-listing-description">
															<h3 className="job-listing-title"><a href="#">Build me a website in Angular JS</a></h3>
														</div>
													</div>
												</div>
												
												{/* <!-- Task Details --> */}
												<ul className="dashboard-task-info">
													<li><strong>$2,550</strong><span>Fixed price</span></li>
													<li><strong>14 Days</strong><span>Delivery Time</span></li>
												</ul>

												{/* <!-- Buttons --> */}
												<div className="buttons-to-right always-visible">
													<a href="#small-dialog" className="popup-with-zoom-anim button dark ripple-effect ico" title="Edit Bid" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
													<a href="#" className="button red ripple-effect ico" title="Cancel Bid" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
												</div>
											</li>
											<li>
												{/* <!-- Job Listing --> */}
												<div className="job-listing width-adjustment">

													{/* <!-- Job Listing Details --> */}
													<div className="job-listing-details">

														{/* <!-- Details --> */}
														<div className="job-listing-description">
															<h3 className="job-listing-title"><a href="#">Android and iOS React Appe</a></h3>
														</div>
													</div>
												</div>
												
												{/* <!-- Task Details --> */}
												<ul className="dashboard-task-info">
													<li><strong>$3,000</strong><span>Fixed Price</span></li>
													<li><strong>21 Days</strong><span>Delivery Time</span></li>
												</ul>

												{/* <!-- Buttons --> */}
												<div className="buttons-to-right always-visible">
													<a href="#small-dialog" className="popup-with-zoom-anim button dark ripple-effect ico" title="Edit Bid" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
													<a href="#" className="button red ripple-effect ico" title="Cancel Bid" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
												</div>
											</li>
											<li>
												{/* <!-- Job Listing --> */}
												<div className="job-listing width-adjustment">

													{/* <!-- Job Listing Details --> */}
													<div className="job-listing-details">

														{/* <!-- Details --> */}
														<div className="job-listing-description">
															<h3 className="job-listing-title"><a href="#">Write Simple Python Script</a></h3>
														</div>
													</div>
												</div>
												
												{/* <!-- Task Details --> */}
												<ul className="dashboard-task-info">
													<li><strong>$30</strong><span>Hourly Rate</span></li>
													<li><strong>1 Day</strong><span>Delivery Time</span></li>
												</ul>

												{/* <!-- Buttons --> */}
												<div className="buttons-to-right always-visible">
													<a href="#small-dialog" className="popup-with-zoom-anim button dark ripple-effect ico" title="Edit Bid" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
													<a href="#" className="button red ripple-effect ico" title="Cancel Bid" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
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


			{/* <!-- Edit Bid Popup */}
			{/* ================================================== --> */}
			<div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs">

				{/* <!--Tabs --> */}
				<div className="sign-in-form">

					<ul className="popup-tabs-nav">
						<li><a href="#tab">Edit Bid</a></li>
					</ul>

					<div className="popup-tabs-container">

						{/* <!-- Tab --> */}
						<div className="popup-tab-content" id="tab">
									
								{/* <!-- Bidding --> */}
								<div className="bidding-widget">
									{/* <!-- Headline --> */}
									<span className="bidding-detail">Set your <strong>minimal hourly rate</strong></span>

									{/* <!-- Price Slider --> */}
									<div className="bidding-value">$<span id="biddingVal"></span></div>
									<input className="bidding-slider" type="text" value="" data-slider-handle="custom" data-slider-currency="$" data-slider-min="10" data-slider-max="60" data-slider-value="40" data-slider-step="1" data-slider-tooltip="hide" />
									
									{/* <!-- Headline --> */}
									<span className="bidding-detail margin-top-30">Set your <strong>delivery time</strong></span>

									{/* <!-- Fields --> */}
									<div className="bidding-fields">
										<div className="bidding-field">
											{/* <!-- Quantity Buttons --> */}
											<div className="qtyButtons with-border">
												<div className="qtyDec"></div>
												<input type="text" name="qtyInput" value="2" />
												<div className="qtyInc"></div>
											</div>
										</div>
										<div className="bidding-field">
											<select className="selectpicker default with-border">
												<option selected>Days</option>
												<option>Hours</option>
											</select>
										</div>
									</div>
							</div>
							
							{/* <!-- Button --> */}
							<button className="button full-width button-sliding-icon ripple-effect" type="submit">Save Changes <i className="icon-material-outline-arrow-right-alt"></i></button>

						</div>

					</div>
				</div>
			</div>
			{/* <!-- Edit Bid Popup / End --> */}

			</>
		)
	}
}

export default DashboardMyActiveBids;