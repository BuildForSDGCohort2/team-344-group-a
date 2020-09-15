import React from 'react';
import { Component } from 'react';
import Header from './Header';

class PagesRegister extends Component {
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
				<div id="titlebar" className="gradient">
					<div className="container">
						<div className="row">
							<div className="col-md-12">

								<h2>Register</h2>

								{/* <!-- Breadcrumbs --> */}
								<nav id="breadcrumbs" className="dark">
									<ul>
										<li><a href="#">Home</a></li>
										<li>Register</li>
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
						<div className="col-xl-5 offset-xl-3">

							<div className="login-register-page">
								{/* <!-- Welcome Text --> */}
								<div className="welcome-text">
									<h3 style="font-size: 26px;">Let's create your account!</h3>
									<span>Already have an account? <a href="pages-login.html">Log In!</a></span>
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
								<button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form">Register <i className="icon-material-outline-arrow-right-alt"></i></button>
								
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
				{/* <!-- Wrapper / End --> */}
			</>
		)
	}
}

export default PagesRegister;
