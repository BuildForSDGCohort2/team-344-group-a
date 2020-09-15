import React from 'react';
import { Component } from 'react';
import Header from './Header';

class DashboardManageBidders extends Component {
	render () {
		return (
			<>
				{/* <!-- Wrapper --> */}
				<div id="wrapper">

				{/* <!-- Header Container */}
				{/* ================================================== --> */}
				<Header />
				
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
								<h3>Manage Bidders</h3>
								<span className="margin-top-7">Bids for <a href="#">Food Delivery Mobile Application</a></span>

								{/* <!-- Breadcrumbs --> */}
								<nav id="breadcrumbs" className="dark">
									<ul>
										<li><a href="#">Home</a></li>
										<li><a href="#">Dashboard</a></li>
										<li>Manage Bidders</li>
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
											<h3><i className="icon-material-outline-supervisor-account"></i> 3 Bidders</h3>
											<div className="sort-by">
												<select className="selectpicker hide-tick">
													<option>Highest First</option>
													<option>Lowest First</option>
													<option>Fastest First</option>
												</select>
											</div>
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
																<a href="#"><img src="images/user-avatar-big-02.jpg" alt="" /></a>
															</div>

															{/* <!-- Name --> */}
															<div className="freelancer-name">
																<h4><a href="#">David Peterson <img className="flag" src="images/flags/de.svg" alt="" title="Germany" data-tippy-placement="top" /></a></h4>

																{/* <!-- Details --> */}
																<span className="freelancer-detail-item"><a href="#"><i className="icon-feather-mail"></i> <span className="__cf_email__" data-cfemail="513530273835113429303c213d347f323e3c">[email&#160;protected]</span></a></span>

																{/* <!-- Rating --> */}
																<div className="freelancer-rating">
																	<div className="star-rating" data-rating="5.0"></div>
																</div>

																{/* <!-- Bid Details --> */}
																<ul className="dashboard-task-info bid-info">
																	<li><strong>$3,200</strong><span>Fixed Price</span></li>
																	<li><strong>14 Days</strong><span>Delivery Time</span></li>
																</ul>

																{/* <!-- Buttons --> */}
																<div className="buttons-to-right always-visible margin-top-25 margin-bottom-0">
																	<a href="#small-dialog-1"  className="popup-with-zoom-anim button ripple-effect"><i className="icon-material-outline-check"></i> Accept Offer</a>
																	<a href="#small-dialog-2" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail"></i> Send Message</a>
																	<a href="#" className="button gray ripple-effect ico" title="Remove Bid" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
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
																<h4><a href="#">Oldrich Ćuk <img className="flag" src="images/flags/sk.svg" alt="" title="Slovakia" data-tippy-placement="top" /></a></h4>

																{/* <!-- Details --> */}
																<span className="freelancer-detail-item"><a href="#"><i className="icon-feather-mail"></i> <span className="__cf_email__" data-cfemail="721d1e16001b111a32170a131f021e175c111d1f">[email&#160;protected]</span></a></span>
																<span className="freelancer-detail-item"><i className="icon-feather-phone"></i> (+421) 123-456-789</span>


																{/* <!-- Rating --> */}
																<br />
																<span className="company-not-rated">Minimum of 3 votes required</span>

																{/* <!-- Bid Details --> */}
																<ul className="dashboard-task-info bid-info">
																	<li><strong>$3,000</strong><span>Fixed Price</span></li>
																	<li><strong>14 Days</strong><span>Delivery Time</span></li>
																</ul>

																{/* <!-- Buttons --> */}
																<div className="buttons-to-right always-visible margin-top-25 margin-bottom-0">
																	<a href="#small-dialog-1"  className="popup-with-zoom-anim button ripple-effect"><i className="icon-material-outline-check"></i> Accept Offer</a>
																	<a href="#small-dialog-2" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail"></i> Send Message</a>
																	<a href="#" className="button gray ripple-effect ico" title="Remove Bid" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
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
																<div className="verified-badge"></div>
																<a href="#"><img src="images/user-avatar-placeholder.png" alt="" /></a>
															</div>

															{/* <!-- Name --> */}
															<div className="freelancer-name">
																<h4><a href="#">Kuba Adamczyk <img className="flag" src="images/flags/pl.svg" alt="" title="Poland" data-tippy-placement="top" /></a></h4>

																{/* <!-- Details --> */}
																<span className="freelancer-detail-item"><a href="#"><i className="icon-feather-mail"></i> <span className="__cf_email__" data-cfemail="2a415f484b6a4f524b475a464f04494547">[email&#160;protected]</span></a></span>
																<span className="freelancer-detail-item"><i className="icon-feather-phone"></i> (+48) 123-456-789</span>

																{/* <!-- Rating --> */}
																<div className="freelancer-rating">
																	<div className="star-rating" data-rating="5.0"></div>
																</div>

																{/* <!-- Bid Details --> */}
																<ul className="dashboard-task-info bid-info">
																	<li><strong>$2,700</strong><span>Fixed Price</span></li>
																	<li><strong>30 Days</strong><span>Delivery Time</span></li>
																</ul>

																{/* <!-- Buttons --> */}
																<div className="buttons-to-right always-visible margin-top-25 margin-bottom-0">
																	<a href="#small-dialog-1"  className="popup-with-zoom-anim button ripple-effect"><i className="icon-material-outline-check"></i> Accept Offer</a>
																	<a href="#small-dialog-2" className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail"></i> Send Message</a>
																	<a href="#" className="button gray ripple-effect ico" title="Remove Bid" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
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


				{/* <!-- Bid Acceptance Popup */}
				{/* ================================================== --> */}
				<div id="small-dialog-1" className="zoom-anim-dialog mfp-hide dialog-with-tabs">

					{/* <!--Tabs --> */}
					<div className="sign-in-form">

						<ul className="popup-tabs-nav">
							<li><a href="#tab1">Accept Offer</a></li>
						</ul>

						<div className="popup-tabs-container">

							{/* <!-- Tab --> */}
							<div className="popup-tab-content" id="tab">
								
								{/* <!-- Welcome Text --> */}
								<div className="welcome-text">
									<h3>Accept Offer From David</h3>
									<div className="bid-acceptance margin-top-15">
										$3200
									</div>

								</div>

								<form id="terms">
									<div className="radio">
										<input id="radio-1" name="radio" type="radio" required />
										<label for="radio-1"><span className="radio-label"></span>  I have read and agree to the Terms and Conditions</label>
									</div>
								</form>

								{/* <!-- Button --> */}
								<button className="margin-top-15 button full-width button-sliding-icon ripple-effect" type="submit" form="terms">Accept <i className="icon-material-outline-arrow-right-alt"></i></button>

							</div>

						</div>
					</div>
				</div>
				{/* <!-- Bid Acceptance Popup / End --> */}


				{/* <!-- Send Direct Message Popup */}
				{/* ================================================== --> */}
				<div id="small-dialog-2" className="zoom-anim-dialog mfp-hide dialog-with-tabs">

					{/* <!--Tabs --> */}
					<div className="sign-in-form">

						<ul className="popup-tabs-nav">
							<li><a href="#tab2">Send Message</a></li>
						</ul>

						<div className="popup-tabs-container">

							{/* <!-- Tab --> */}
							<div className="popup-tab-content" id="tab2">
								
								{/* <!-- Welcome Text --> */}
								<div className="welcome-text">
									<h3>Direct Message To David</h3>
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

export default DashboardManageBidders; 
