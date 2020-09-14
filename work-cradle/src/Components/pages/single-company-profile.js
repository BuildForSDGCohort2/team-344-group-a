import React from 'react';
import { Component } from 'react';
import Header from './Header';

class SingleCompanyProfile extends Component {
	render() {
		return (
			<>
				{/* <!-- Wrapper --> */}
				<div id="wrapper">

				{/* <!-- Header Container */}
				{/* ================================================== --> */}
				<Header />
				{/* <!-- Header Container / End --> */}

				{/* <!-- Titlebar */}
				{/* ================================================== --> */}
				<div className="single-page-header" data-background-image="images/single-company.jpg">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="single-page-header-inner">
									<div className="left-side">
										<div className="header-image"><img src="images/browse-companies-03.png" alt="" /></div>
										<div className="header-details">
											<h3>Acodia <span>Software House</span></h3>
											<ul>
												<li><div className="star-rating" data-rating="4.9"></div></li>
												<li><img className="flag" src="images/flags/de.svg" alt=""/> Germany</li>
												<li><div className="verified-badge-with-title">Verified</div></li>
											</ul>
										</div>
									</div>
									<div className="right-side">
										{/* <!-- Breadcrumbs --> */}
										<nav id="breadcrumbs" className="white">
											<ul>
												<li><a href="#">Home</a></li>
												<li><a href="#">Browse Companies</a></li>
												<li>Acodia</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>


				{/* <!-- Page Content */}
				{/* ================================================== --> */}
				<div className="container">
					<div className="row">
						
						{/* <!-- Content --> */}
						<div className="col-xl-8 col-lg-8 content-right-offset">

							<div className="single-page-section">
								<h3 className="margin-bottom-25">About Company</h3>
								<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

								<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
							</div>
							
							{/* <!-- Boxed List --> */}
							<div className="boxed-list margin-bottom-60">
								<div className="boxed-list-headline">
									<h3><i className="icon-material-outline-business-center"></i> Open Positions</h3>
								</div>

								<div className="listings-container compact-list-layout">
									
									{/* <!-- Job Listing --> */}
									<a href="single-job-page.html" className="job-listing">

										{/* <!-- Job Listing Details --> */}
										<div className="job-listing-details">

											{/* <!-- Details --> */}
											<div className="job-listing-description">
												<h3 className="job-listing-title">Python Developer</h3>

												{/* <!-- Job Listing Footer --> */}
												<div className="job-listing-footer">
													<ul>
														<li><i className="icon-material-outline-location-on"></i> Berlin</li>
														<li><i className="icon-material-outline-business-center"></i> Full Time</li>
														<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
													</ul>
												</div>
											</div>

										</div>

										{/* <!-- Bookmark --> */}
										<span className="bookmark-icon"></span>
									</a>

									{/* <!-- Job Listing --> */}
									<a href="single-job-page.html" className="job-listing">

										{/* <!-- Job Listing Details --> */}
										<div className="job-listing-details">

											{/* <!-- Details --> */}
											<div className="job-listing-description">
												<h3 className="job-listing-title">Junior Full Stack Developer</h3>

												{/* <!-- Job Listing Footer --> */}
												<div className="job-listing-footer">
													<ul>
														<li><i className="icon-material-outline-location-on"></i> Berlin</li>
														<li><i className="icon-material-outline-business-center"></i> Full Time</li>
														<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
													</ul>
												</div>
											</div>

										</div>

										{/* <!-- Bookmark --> */}
										<span className="bookmark-icon"></span>
									</a>	
								</div>

							</div>
							{/* <!-- Boxed List / End --> */}

							{/* <!-- Boxed List --> */}
							<div className="boxed-list margin-bottom-60">
								<div className="boxed-list-headline">
									<h3><i className="icon-material-outline-thumb-up"></i> Reviews</h3>
								</div>
								<ul className="boxed-list-ul">
									<li>
										<div className="boxed-list-item">
											{/* <!-- Content --> */}
											<div className="item-content">
												<h4>Doing things the right way <span>Anonymous Employee</span></h4>
												<div className="item-details margin-top-10">
													<div className="star-rating" data-rating="5.0"></div>
													<div className="detail-item"><i className="icon-material-outline-date-range"></i> August 2019</div>
												</div>
												<div className="item-description">
													<p>Great company and especially ideal for the career-minded individual. The company is large enough to offer a variety of jobs in all kinds of interesting locations. Even if you never change roles, your job changes and evolves as the company grows, keeping things fresh.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="boxed-list-item">
											{/* <!-- Content --> */}
											<div className="item-content">
												<h4>Outstanding Work Environment <span>Anonymous Employee</span></h4>
												<div className="item-details margin-top-10">
													<div className="star-rating" data-rating="5.0"></div>
													<div className="detail-item"><i className="icon-material-outline-date-range"></i> May 2019</div>
												</div>
												<div className="item-description">
													<p>They do business with integrity and rational thinking. Overall, it's an excellent place to work, with products that are winning in the marketplace.</p>
												</div>
											</div>
										</div>
									</li>
								</ul>

								<div className="centered-button margin-top-35">
									<a href="#small-dialog" className="popup-with-zoom-anim button button-sliding-icon">Leave a Review <i className="icon-material-outline-arrow-right-alt"></i></a>
								</div>

							</div>
							{/* <!-- Boxed List / End --> */}

						</div>
						

						{/* <!-- Sidebar --> */}
						<div className="col-xl-4 col-lg-4">
							<div className="sidebar-container">

								{/* <!-- Location --> */}
								<div className="sidebar-widget">
									<h3>Location</h3>
									<div id="single-job-map-container">
										<div id="singleListingMap" data-latitude="52.520007" data-longitude="13.404954" data-map-icon="im im-icon-Hamburger"></div>
										<a href="#" id="streetView">Street View</a>
									</div>
								</div>

								{/* <!-- Widget --> */}
								<div className="sidebar-widget">
									<h3>Social Profiles</h3>
									<div className="freelancer-socials margin-top-25">
										<ul>
											<li><a href="#" title="Dribbble" data-tippy-placement="top"><i className="icon-brand-dribbble"></i></a></li>
											<li><a href="#" title="Twitter" data-tippy-placement="top"><i className="icon-brand-twitter"></i></a></li>
											<li><a href="#" title="Behance" data-tippy-placement="top"><i className="icon-brand-behance"></i></a></li>
											<li><a href="#" title="GitHub" data-tippy-placement="top"><i className="icon-brand-github"></i></a></li>
										
										</ul>
									</div>
								</div>

								{/* <!-- Sidebar Widget --> */}
								<div className="sidebar-widget">
									<h3>Bookmark or Share</h3>

									{/* <!-- Bookmark Button --> */}
									<button className="bookmark-button margin-bottom-25">
										<span className="bookmark-icon"></span>
										<span className="bookmark-text">Bookmark</span>
										<span className="bookmarked-text">Bookmarked</span>
									</button>

									{/* <!-- Copy URL --> */}
									<div className="copy-url">
										<input id="copy-url" type="text" value="" className="with-border"/>
										<button className="copy-url-button ripple-effect" data-clipboard-target="#copy-url" title="Copy to Clipboard" data-tippy-placement="top"><i className="icon-material-outline-file-copy"></i></button>
									</div>

									{/* <!-- Share Buttons --> */}
									<div className="share-buttons margin-top-25">
										<div className="share-buttons-trigger"><i className="icon-feather-share-2"></i></div>
										<div className="share-buttons-content">
											<span>Interesting? <strong>Share It!</strong></span>
											<ul className="share-buttons-icons">
												<li><a href="#" data-button-color="#3b5998" title="Share on Facebook" data-tippy-placement="top"><i className="icon-brand-facebook-f"></i></a></li>
												<li><a href="#" data-button-color="#1da1f2" title="Share on Twitter" data-tippy-placement="top"><i className="icon-brand-twitter"></i></a></li>
												<li><a href="#" data-button-color="#dd4b39" title="Share on Google Plus" data-tippy-placement="top"><i className="icon-brand-google-plus-g"></i></a></li>
												<li><a href="#" data-button-color="#0077b5" title="Share on LinkedIn" data-tippy-placement="top"><i className="icon-brand-linkedin-in"></i></a></li>
											</ul>
										</div>
									</div>
								</div>

							</div>
						</div>

					</div>
				</div>


				{/* <!-- Spacer --> */}
				<div className="margin-top-15"></div>
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
													<img src="images/logo2.png" alt=""/>
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
										<input type="text" name="fname" placeholder="Enter your email address"/>
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
				{/* <!-- Wrapper / End --> */}


				{/* <!-- Leave a Review Popup */}
				{/* ================================================== --> */}
				<div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs">

					{/* <!--Tabs --> */}
					<div className="sign-in-form">

						<ul className="popup-tabs-nav">
							<li><a href="#tab">Leave a Review</a></li>
						</ul>

						<div className="popup-tabs-container">

							{/* <!-- Tab --> */}
							<div className="popup-tab-content" id="tab">
								
								{/* <!-- Welcome Text --> */}
								<div className="welcome-text">
									<h3>What is it like to work at Acodia?</h3>
								</div>
									
								{/* <!-- Form --> */}
								<form method="post" id="leave-company-review-form">

									{/* <!-- Leave Rating --> */}
									<div className="clearfix"></div>
									<div className="leave-rating-container">
										<div className="leave-rating margin-bottom-5">
											<input type="radio" name="rating" id="rating-1" value="1" required/>
											<label for="rating-1" className="icon-material-outline-star"></label>
											<input type="radio" name="rating" id="rating-2" value="2" required/>
											<label for="rating-2" className="icon-material-outline-star"></label>
											<input type="radio" name="rating" id="rating-3" value="3" required/>
											<label for="rating-3" className="icon-material-outline-star"></label>
											<input type="radio" name="rating" id="rating-4" value="4" required/>
											<label for="rating-4" className="icon-material-outline-star"></label>
											<input type="radio" name="rating" id="rating-5" value="5" required/>
											<label for="rating-5" className="icon-material-outline-star"></label>
										</div>
									</div>
									<div className="clearfix"></div>
									{/* <!-- Leave Rating / End--> */}



									<div className="row">
										<div className="col-xl-12">
											<div className="input-with-icon-left" title="Leave blank to add review anonymously" data-tippy-placement="bottom">
												<i className="icon-material-outline-account-circle"></i>
												<input type="text" className="input-text with-border" name="name" id="name" placeholder="First and Last Name"/>
											</div>
										</div>

										<div className="col-xl-12">
											<div className="input-with-icon-left">
												<i className="icon-material-outline-rate-review"></i>
												<input type="text" className="input-text with-border" name="reviewtitle" id="reviewtitle" placeholder="Review Title"  required/>
											</div>
										</div>
									</div>

									<textarea className="with-border" placeholder="Review" name="message" id="message" cols="7"  required></textarea>

								</form>
								
								{/* <!-- Button --> */}
								<button className="button margin-top-35 full-width button-sliding-icon ripple-effect" type="submit" form="leave-company-review-form">Leave a Review <i className="icon-material-outline-arrow-right-alt"></i></button>

							</div>

						</div>
					</div>
				</div>
				{/* <!-- Leave a Review Popup / End --> */}
			</>
		)
	}
}

export default SingleCompanyProfile;