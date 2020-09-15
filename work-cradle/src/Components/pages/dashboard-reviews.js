import React from 'react';
import { Component } from 'react';
import Header from './Header';

class DashboardReviewers extends Component {
	render() {
		return( 
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
											<li className="active"><a href="dashboard-reviews.html"><i className="icon-material-outline-rate-review"></i> Reviews</a></li>
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
								<h3>Reviews</h3>

								{/* <!-- Breadcrumbs --> */}
								<nav id="breadcrumbs" className="dark">
									<ul>
										<li><a href="#">Home</a></li>
										<li><a href="#">Dashboard</a></li>
										<li>Reviews</li>
									</ul>
								</nav>
							</div>
					
							{/* <!-- Row --> */}
							<div className="row">

								{/* <!-- Dashboard Box --> */}
								<div className="col-xl-6">
									<div className="dashboard-box margin-top-0">

										{/* <!-- Headline --> */}
										<div className="headline">
											<h3><i className="icon-material-outline-business"></i> Rate Employers</h3>
										</div>

										<div className="content">
											<ul className="dashboard-box-list">
												<li>
													<div className="boxed-list-item">
														{/* <!-- Content --> */}
														<div className="item-content">
															<h4>Simple Chrome Extension</h4>
															<span className="company-not-rated margin-bottom-5">Not Rated</span>
														</div>
													</div>

													<a href="#small-dialog-2" className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10"><i className="icon-material-outline-thumb-up"></i> Leave a Review</a>
												</li>
												<li>
													<div className="boxed-list-item">
														{/* <!-- Content --> */}
														<div className="item-content">
															<h4>Adsense Expert</h4>
															<span className="company-not-rated margin-bottom-5">Not Rated</span>
														</div>
													</div>

													<a href="#small-dialog-2" className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10"><i className="icon-material-outline-thumb-up"></i> Leave a Review</a>
												</li>
												<li>
													<div className="boxed-list-item">
														{/* <!-- Content --> */}
														<div className="item-content">
															<h4>Fix Python Selenium Code</h4>
															<div className="item-details margin-top-10">
																<div className="star-rating" data-rating="5.0"></div>
																<div className="detail-item"><i className="icon-material-outline-date-range"></i> May 2019</div>
															</div>
															<div className="item-description">
																<p>Great clarity in specification and communication. I got payment really fast. Really recommend this employer for his professionalism. I will work for him again with pleasure.</p>
															</div>
														</div>
													</div>
													<a href="#small-dialog-1" className="popup-with-zoom-anim button gray ripple-effect margin-top-5 margin-bottom-10"><i className="icon-feather-edit"></i> Edit Review</a>
												</li>
												<li>
													<div className="boxed-list-item">
														{/* <!-- Content --> */}
														<div className="item-content">
															<h4>PHP Core Website Fixes</h4>
															<div className="item-details margin-top-10">
																<div className="star-rating" data-rating="5.0"></div>
																<div className="detail-item"><i className="icon-material-outline-date-range"></i> May 2019</div>
															</div>
															<div className="item-description">
																<p>Great clarity in specification and communication. I got payment really fast. Really recommend this employer for his professionalism. I will work for him again with pleasure.</p>
															</div>
														</div>
													</div>
													<a href="#small-dialog-1" className="popup-with-zoom-anim button gray ripple-effect margin-top-5 margin-bottom-10"><i className="icon-feather-edit"></i> Edit Review</a>
												</li>

											</ul>
										</div>
									</div>

									{/* <!-- Pagination --> */}
									<div className="clearfix"></div>
									<div className="pagination-container margin-top-40 margin-bottom-0">
										<nav className="pagination">
											<ul>
												<li><a href="#" className="ripple-effect current-page">1</a></li>
												<li><a href="#" className="ripple-effect">2</a></li>
												<li><a href="#" className="ripple-effect">3</a></li>
												<li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
											</ul>
										</nav>
									</div>
									<div className="clearfix"></div>
									{/* <!-- Pagination / End --> */}

								</div>

								{/* <!-- Dashboard Box --> */}
								<div className="col-xl-6">
									<div className="dashboard-box margin-top-0">

										{/* <!-- Headline --> */}
										<div className="headline">
											<h3><i className="icon-material-outline-face"></i> Rate Freelancers</h3>
										</div>

										<div className="content">
											<ul className="dashboard-box-list">
												<li>
													<div className="boxed-list-item">
														{/* <!-- Content --> */}
														<div className="item-content">
															<h4>Simple Chrome Extension</h4>
															<span className="company-not-rated margin-bottom-5">Not Rated</span>
														</div>
													</div>

													<a href="#small-dialog-2" className="popup-with-zoom-anim button ripple-effect margin-top-5 margin-bottom-10"><i className="icon-material-outline-thumb-up"></i> Leave a Review</a>
												</li>
												<li>
													<div className="boxed-list-item">
														{/* <!-- Content --> */}
														<div className="item-content">
															<h4>Help Fix Laravel PHP issue</h4>
															<div className="item-details margin-top-10">
																<div className="star-rating" data-rating="5.0"></div>
																<div className="detail-item"><i className="icon-material-outline-date-range"></i> August 2019</div>
															</div>
															<div className="item-description">
																<p>Excellent programmer - helped me fixing small issue.</p>
															</div>
														</div>
													</div>
													<a href="#small-dialog-1" className="popup-with-zoom-anim button gray ripple-effect margin-top-5 margin-bottom-10"><i className="icon-feather-edit"></i> Edit Review</a>
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



				{/* <!-- Edit Review Popup */}
				{/* ================================================== --> */}
				<div id="small-dialog-1" className="zoom-anim-dialog mfp-hide dialog-with-tabs">

					{/* <!--Tabs --> */}
					<div className="sign-in-form">

						<ul className="popup-tabs-nav">
						</ul>

						<div className="popup-tabs-container">

							{/* <!-- Tab --> */}
							<div className="popup-tab-content" id="tab1">
								
								{/* <!-- Welcome Text --> */}
								<div className="welcome-text">
									<h3>Change Review</h3>
									<span>Rate <a href="#">Herman Ewout</a> for the project <a href="#">WordPress Theme Installation</a> </span>
								</div>
									
								{/* <!-- Form --> */}
								<form method="post" id="change-review-form">

									<div className="feedback-yes-no">
										<strong>Was this delivered on budget?</strong>
										<div className="radio">
											<input id="radio-rating-1" name="radio" type="radio" checked />
											<label for="radio-rating-1"><span className="radio-label"></span> Yes</label>
										</div>

										<div className="radio">
											<input id="radio-rating-2" name="radio" type="radio" />
											<label for="radio-rating-2"><span className="radio-label"></span> No</label>
										</div>
									</div>

									<div className="feedback-yes-no">
										<strong>Was this delivered on time?</strong>
										<div className="radio">
											<input id="radio-rating-3" name="radio2" type="radio" checked />
											<label for="radio-rating-3"><span className="radio-label"></span> Yes</label>
										</div>

										<div className="radio">
											<input id="radio-rating-4" name="radio2" type="radio" />
											<label for="radio-rating-4"><span className="radio-label"></span> No</label>
										</div>
									</div>

									<div className="feedback-yes-no">
										<strong>Your Rating</strong>
										<div className="leave-rating">
											<input type="radio" name="rating" id="rating-1" value="1" checked/>
											<label for="rating-1" className="icon-material-outline-star"></label>
											<input type="radio" name="rating" id="rating-2" value="2"/>
											<label for="rating-2" className="icon-material-outline-star"></label>
											<input type="radio" name="rating" id="rating-3" value="3"/>
											<label for="rating-3" className="icon-material-outline-star"></label>
											<input type="radio" name="rating" id="rating-4" value="4"/>
											<label for="rating-4" className="icon-material-outline-star"></label>
											<input type="radio" name="rating" id="rating-5" value="5"/>
											<label for="rating-5" className="icon-material-outline-star"></label>
										</div><div className="clearfix"></div>
									</div>

									<textarea className="with-border" placeholder="Comment" name="message" id="message" cols="7" required>Excellent programmer - helped me fixing small issue.</textarea>

								</form>
								
								{/* <!-- Button --> */}
								<button className="button full-width button-sliding-icon ripple-effect" type="submit" form="change-review-form">Save Changes <i className="icon-material-outline-arrow-right-alt"></i></button>

							</div>

						</div>
					</div>
				</div>
				{/* <!-- Edit Review Popup / End --> */}


				{/* <!-- Leave a Review for Freelancer Popup */}
				{/* ================================================== --> */}
				<div id="small-dialog-2" className="zoom-anim-dialog mfp-hide dialog-with-tabs">

					{/* <!--Tabs --> */}
					<div className="sign-in-form">

						<ul className="popup-tabs-nav">
						</ul>

						<div className="popup-tabs-container">

							{/* <!-- Tab --> */}
							<div className="popup-tab-content" id="tab2">
								
								{/* <!-- Welcome Text --> */}
								<div className="welcome-text">
									<h3>Leave a Review</h3>
									<span>Rate <a href="#">Peter Valentín</a> for the project <a href="#">Simple Chrome Extension</a> </span>
								</div>
									
								{/* <!-- Form --> */}
								<form method="post" id="leave-review-form">

									<div className="feedback-yes-no">
										<strong>Was this delivered on budget?</strong>
										<div className="radio">
											<input id="radio-1" name="radio" type="radio" required />
											<label for="radio-1"><span className="radio-label"></span> Yes</label>
										</div>

										<div className="radio">
											<input id="radio-2" name="radio" type="radio" required />
											<label for="radio-2"><span className="radio-label"></span> No</label>
										</div>
									</div>

									<div className="feedback-yes-no">
										<strong>Was this delivered on time?</strong>
										<div className="radio">
											<input id="radio-3" name="radio2" type="radio" required />
											<label for="radio-3"><span className="radio-label"></span> Yes</label>
										</div>

										<div className="radio">
											<input id="radio-4" name="radio2" type="radio" required />
											<label for="radio-4"><span className="radio-label"></span> No</label>
										</div>
									</div>

									<div className="feedback-yes-no">
										<strong>Your Rating</strong>
										<div className="leave-rating">
											<input type="radio" name="rating" id="rating-radio-1" value="1" required />
											<label for="rating-radio-1" className="icon-material-outline-star"></label>
											<input type="radio" name="rating" id="rating-radio-2" value="2" required />
											<label for="rating-radio-2" className="icon-material-outline-star"></label>
											<input type="radio" name="rating" id="rating-radio-3" value="3" required />
											<label for="rating-radio-3" className="icon-material-outline-star"></label>
											<input type="radio" name="rating" id="rating-radio-4" value="4" required />
											<label for="rating-radio-4" className="icon-material-outline-star"></label>
											<input type="radio" name="rating" id="rating-radio-5" value="5" required />
											<label for="rating-radio-5" className="icon-material-outline-star"></label>
										</div><div className="clearfix"></div>
									</div>

									<textarea className="with-border" placeholder="Comment" name="message2" id="message2" cols="7" required></textarea>

								</form>
								
								{/* <!-- Button --> */}
								<button className="button full-width button-sliding-icon ripple-effect" type="submit" form="leave-review-form">Leave a Review <i className="icon-material-outline-arrow-right-alt"></i></button>

							</div>

						</div>
					</div>
				</div>
				{/* <!-- Leave a Review Popup / End --> */}
			</>
		)
	}
}


export default DashboardReviewers;