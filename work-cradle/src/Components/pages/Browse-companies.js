import React from 'react';
import { Component } from 'react';
import Header from './Header';

class BrowseCompanies extends Component { 
	render () {
		return (
			// <!-- Wrapper -->
			<div id="wrapper">

			{/* <!-- Header Container */}
			{/* ================================================== --> */}
			<Header />

			{/* <!-- Titlebar */}
			{/* ================================================== --> */}
			<div id="titlebar" className="gradient">
				<div className="container">
					<div className="row">
						<div className="col-md-12">

							<h2>Browse Companies</h2>

							{/* <!-- Breadcrumbs --> */}
							<nav id="breadcrumbs" className="dark">
								<ul>
									<li><a href="#">Home</a></li>
									<li><a href="#">Find Work</a></li>
									<li>Browse Companies</li>
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
					<div className="col-xl-12">
						<div className="letters-list">
							<a href="#" className="current">A</a>
							<a href="#">B</a>
							<a href="#">C</a>
							<a href="#">D</a>
							<a href="#">E</a>
							<a href="#">F</a>
							<a href="#">G</a>
							<a href="#">H</a>
							<a href="#">I</a>
							<a href="#">J</a>
							<a href="#">K</a>
							<a href="#">L</a>
							<a href="#">M</a>
							<a href="#">N</a>
							<a href="#">O</a>
							<a href="#">P</a>
							<a href="#">Q</a>
							<a href="#">R</a>
							<a href="#">S</a>
							<a href="#">T</a>
							<a href="#">U</a>
							<a href="#">V</a>
							<a href="#">W</a>
							<a href="#">X</a>
							<a href="#">Y</a>
							<a href="#">Z</a>
						</div>
					</div>
					<div className="col-xl-12">
						<div className="companies-list">
							<a href="single-company-profile.html" className="company">
								<div className="company-inner-alignment">
									<span className="company-logo"><img src="images/company-logo-placeholder.png" alt="" /></span>
									<h4>Acra</h4>
									<div className="star-rating" data-rating="3.5"></div>
								</div>
							</a>
							<a href="single-company-profile.html" className="company">
								<div className="company-inner-alignment">
									<span className="company-logo"><img src="images/browse-companies-02.png" alt="" /></span>
									<h4>Acue</h4>
									<div className="star-rating" data-rating="5.0"></div>
								</div>
							</a>
							<a href="single-company-profile.html" className="company">
								<div className="company-inner-alignment">
									<span className="company-logo"><img src="images/browse-companies-04.png" alt="" /></span>
									<h4>Acorta</h4>
									<span className="company-not-rated">Minimum of 3 votes required</span>
								</div>
							</a>
							<a href="single-company-profile.html" className="company">
								<div className="company-inner-alignment">
									<span className="company-logo"><img src="images/company-logo-placeholder.png" alt="" /></span>
									<h4>Acuneol</h4>
									<span className="company-not-rated">Minimum of 3 votes required</span>
								</div>
							</a>
							<a href="single-company-profile.html" className="company">
								<div className="company-inner-alignment">
									<span className="company-logo"><img src="images/browse-companies-03.png" alt="" /></span>
									<h4>Acodia</h4>
									<div className="star-rating" data-rating="4.9"></div>
								</div>
							</a>
							<a href="single-company-profile.html" className="company">
								<div className="company-inner-alignment">
									<span className="company-logo"><img src="images/company-logo-placeholder.png" alt="" /></span>
									<h4>Acagic</h4>
									<span className="company-not-rated">Minimum of 3 votes required</span>
								</div>
							</a>
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
												<img src="images/logo2.png" alt="" />
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
			// {/* <!-- Wrapper / End --> */}
		)
	}
}

export default BrowseCompanies;  

