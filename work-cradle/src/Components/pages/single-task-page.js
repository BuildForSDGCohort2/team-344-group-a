import React from 'react';
import { Component } from 'react';
import Header from './Header';

class SingleTaskPage extends Component {
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
				<div className="single-page-header" data-background-image="images/single-task.jpg">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="single-page-header-inner">
									<div className="left-side">
										<div className="header-image"><a href="single-company-profile.html"><img src="images/browse-companies-02.png" alt=""/></a></div>
										<div className="header-details">
											<h3>Food Delivery Mobile Application</h3>
											<h5>About the Employer</h5>
											<ul>
												<li><a href="single-company-profile.html"><i className="icon-material-outline-business"></i> Acue</a></li>
												<li><div className="star-rating" data-rating="5.0"></div></li>
												<li><img className="flag" src="images/flags/de.svg" alt=""/> Germany</li>
												<li><div className="verified-badge-with-title">Verified</div></li>
											</ul>
										</div>
									</div>
									<div className="right-side">
										<div className="salary-box">
											<div className="salary-type">Project Budget</div>
											<div className="salary-amount">$2,500 - $4,500</div>
										</div>
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
							
							{/* <!-- Description --> */}
							<div className="single-page-section">
								<h3 className="margin-bottom-25">Project Description</h3>
								<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

								<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>

								<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
							</div>

							{/* <!-- Atachments --> */}
							<div className="single-page-section">
								<h3>Attachments</h3>
								<div className="attachments-container">
									<a href="#" className="attachment-box ripple-effect"><span>Project Brief</span><i>PDF</i></a>
								</div>
							</div>

							{/* <!-- Skills --> */}
							<div className="single-page-section">
								<h3>Skills Required</h3>
								<div className="task-tags">
									<span>iOS</span>
									<span>Android</span>
									<span>mobile apps</span>
									<span>design</span>
								</div>
							</div>
							<div className="clearfix"></div>
							
							{/* <!-- Freelancers Bidding --> */}
							<div className="boxed-list margin-bottom-60">
								<div className="boxed-list-headline">
									<h3><i className="icon-material-outline-group"></i> Freelancers Bidding</h3>
								</div>
								<ul className="boxed-list-ul">
									<li>
										<div className="bid">
											{/* <!-- Avatar --> */}
											<div className="bids-avatar">
												<div className="freelancer-avatar">
													<div className="verified-badge"></div>
													<a href="single-freelancer-profile.html"><img src="images/user-avatar-big-01.jpg" alt=""/></a>
												</div>
											</div>
											
											{/* <!-- Content --> */}
											<div className="bids-content">
												{/* <!-- Name --> */}
												<div className="freelancer-name">
													<h4><a href="single-freelancer-profile.html">Tom Smith <img className="flag" src="images/flags/gb.svg" alt="" title="United Kingdom" data-tippy-placement="top"/></a></h4>
													<div className="star-rating" data-rating="4.9"></div>
												</div>
											</div>
											
											{/* <!-- Bid --> */}
											<div className="bids-bid">
												<div className="bid-rate">
													<div className="rate">$4,400</div>
													<span>in 7 days</span>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="bid">
											{/* <!-- Avatar --> */}
											<div className="bids-avatar">
												<div className="freelancer-avatar">
													<div className="verified-badge"></div>
													<a href="single-freelancer-profile.html"><img src="images/user-avatar-big-02.jpg" alt=""/></a>
												</div>
											</div>
											
											{/* <!-- Content --> */}
											<div className="bids-content">
												{/* <!-- Name --> */}
												<div className="freelancer-name">
													<h4><a href="single-freelancer-profile.html">David Peterson <img className="flag" src="images/flags/de.svg" alt="" title="Germany" data-tippy-placement="top"/></a></h4>
													<div className="star-rating" data-rating="4.2"></div>
												</div>
											</div>
											
											{/* <!-- Bid --> */}
											<div className="bids-bid">
												<div className="bid-rate">
													<div className="rate">$2,200</div>
													<span>in 14 days</span>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="bid">
											{/* <!-- Avatar --> */}
											<div className="bids-avatar">
												<div className="freelancer-avatar">
													<a href="single-freelancer-profile.html"><img src="images/user-avatar-placeholder.png" alt=""/></a>
												</div>
											</div>
											
											{/* <!-- Content --> */}
											<div className="bids-content">
												{/* <!-- Name --> */}
												<div className="freelancer-name">
													<h4><a href="single-freelancer-profile.html">Marcin Kowalski <img className="flag" src="images/flags/pl.svg" alt="" title="Poland" data-tippy-placement="top"/></a></h4>
													<span className="not-rated">Minimum of 3 votes required</span>

												</div>
											</div>
											
											{/* <!-- Bid --> */}
											<div className="bids-bid">
												<div className="bid-rate">
													<div className="rate">$3,800</div>
													<span>In 20 days</span>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="bid">
											{/* <!-- Avatar --> */}
											<div className="bids-avatar">
												<div className="freelancer-avatar">
													<a href="single-freelancer-profile.html"><img src="images/user-avatar-placeholder.png" alt=""/></a>
												</div>
											</div>
											
											{/* <!-- Content --> */}
											<div className="bids-content">
												{/* <!-- Name --> */}
												<div className="freelancer-name">
													<h4><a href="single-freelancer-profile.html">Sebastiano Piccio <img className="flag" src="images/flags/it.svg" alt="" title="Italy" data-tippy-placement="top"/></a></h4>
													<div className="star-rating" data-rating="4.5"></div>
												</div>
											</div>
											
											{/* <!-- Bid --> */}
											<div className="bids-bid">
												<div className="bid-rate">
													<div className="rate">$3,400</div>
													<span>In 10 days</span>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>

						</div>
						

						{/* <!-- Sidebar --> */}
						<div className="col-xl-4 col-lg-4">
							<div className="sidebar-container">

								<div className="countdown green margin-bottom-35">6 days, 23 hours left</div>

								<div className="sidebar-widget">
									<div className="bidding-widget">
										<div className="bidding-headline"><h3>Bid on this job!</h3></div>
										<div className="bidding-inner">

											{/* <!-- Headline --> */}
											<span className="bidding-detail">Set your <strong>minimal rate</strong></span>

											{/* <!-- Price Slider --> */}
											<div className="bidding-value">$<span id="biddingVal"></span></div>
											<input className="bidding-slider" type="text" value="" data-slider-handle="custom" data-slider-currency="$" data-slider-min="2500" data-slider-max="4500" data-slider-value="auto" data-slider-step="50" data-slider-tooltip="hide" />
											
											{/* <!-- Headline --> */}
											<span className="bidding-detail margin-top-30">Set your <strong>delivery time</strong></span>

											{/* <!-- Fields --> */}
											<div className="bidding-fields">
												<div className="bidding-field">
													{/* <!-- Quantity Buttons --> */}
													<div className="qtyButtons">
														<div className="qtyDec"></div>
														<input type="text" name="qtyInput" value="1"/>
														<div className="qtyInc"></div>
													</div>
												</div>
												<div className="bidding-field">
													<select className="selectpicker default">
														<option selected>Days</option>
														<option>Hours</option>
													</select>
												</div>
											</div>

											{/* <!-- Button --> */}
											<button id="snackbar-place-bid" className="button ripple-effect move-on-hover full-width margin-top-30"><span>Place a Bid</span></button>

										</div>
										<div className="bidding-signup">Don't have an account? <a href="#sign-in-dialog" className="register-tab sign-in popup-with-zoom-anim">Sign Up</a></div>
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


				{/* <!-- Sign In Popup */}
				{/* ================================================== --> */}
				<div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs">

					{/* <!--Tabs --> */}
					<div className="sign-in-form">

						<ul className="popup-tabs-nav">
							<li><a href="#login">Log In</a></li>
							<li><a href="#register">Register</a></li>
						</ul>

						<div className="popup-tabs-container">

							{/* <!-- Login --> */}
							<div className="popup-tab-content" id="login">
								
								{/* <!-- Welcome Text --> */}
								<div className="welcome-text">
									<h3>We're glad to see you again!</h3>
									<span>Don't have an account? <a href="#" className="register-tab">Sign Up!</a></span>
								</div>
									
								{/* <!-- Form --> */}
								<form method="post" id="login-form">
									<div className="input-with-icon-left">
										<i className="icon-material-baseline-mail-outline"></i>
										<input type="text" className="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" required/>
									</div>

									<div className="input-with-icon-left">
										<i className="icon-material-outline-lock"></i>
										<input type="password" className="input-text with-border" name="password" id="password" placeholder="Password" required/>
									</div>
									<a href="#" className="forgot-password">Forgot Password?</a>
								</form>
								
								{/* <!-- Button --> */}
								<button className="button full-width button-sliding-icon ripple-effect" type="submit" form="login-form">Log In <i className="icon-material-outline-arrow-right-alt"></i></button>
								
								{/* <!-- Social Login --> */}
								<div className="social-login-separator"><span>or</span></div>
								<div className="social-login-buttons">
									<button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Log In via Facebook</button>
									<button className="google-login ripple-effect"><i className="icon-brand-google-plus-g"></i> Log In via Google+</button>
								</div>

							</div>

							{/* <!-- Register --> */}
							<div className="popup-tab-content" id="register">
								
								{/* <!-- Welcome Text --> */}
								<div className="welcome-text">
									<h3>Let's create your account!</h3>
								</div>

								{/* <!-- Account Type --> */}
								<div className="account-type">
									<div>
										<input type="radio" name="account-type-radio" id="freelancer-radio" className="account-type-radio" checked/>
										<label for="freelancer-radio" className="ripple-effect-dark"><i className="icon-material-outline-account-circle"></i> Freelancer</label>
									</div>

									<div>
										<input type="radio" name="account-type-radio" id="employer-radio" className="account-type-radio"/>
										<label for="employer-radio" className="ripple-effect-dark"><i className="icon-material-outline-business-center"></i> Employer</label>
									</div>
								</div>
									
								{/* <!-- Form --> */}
								<form method="post" id="register-account-form">
									<div className="input-with-icon-left">
										<i className="icon-material-baseline-mail-outline"></i>
										<input type="text" className="input-text with-border" name="emailaddress-register" id="emailaddress-register" placeholder="Email Address" required/>
									</div>

									<div className="input-with-icon-left" title="Should be at least 8 characters long" data-tippy-placement="bottom">
										<i className="icon-material-outline-lock"></i>
										<input type="password" className="input-text with-border" name="password-register" id="password-register" placeholder="Password" required/>
									</div>

									<div className="input-with-icon-left">
										<i className="icon-material-outline-lock"></i>
										<input type="password" className="input-text with-border" name="password-repeat-register" id="password-repeat-register" placeholder="Repeat Password" required/>
									</div>
								</form>
								
								{/* <!-- Button --> */}
								<button className="margin-top-10 button full-width button-sliding-icon ripple-effect" type="submit" form="register-account-form">Register <i className="icon-material-outline-arrow-right-alt"></i></button>
								
								{/* <!-- Social Login --> */}
								<div className="social-login-separator"><span>or</span></div>
								<div className="social-login-buttons">
									<button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Register via Facebook</button>
									<button className="google-login ripple-effect"><i className="icon-brand-google-plus-g"></i> Register via Google+</button>
								</div>

							</div>

						</div>
					</div>
				</div>
				{/* <!-- Sign In Popup / End --> */} 
			</>
		)
	}
}

export default SingleTaskPage;