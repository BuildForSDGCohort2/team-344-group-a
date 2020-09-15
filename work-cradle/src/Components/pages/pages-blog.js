import React from 'react';
import { Component } from 'react';
import Header from './Header';

class PagesBlog extends Component {
	render() {
		return(
			<>
				{/* <!-- Wrapper --> */}
				<div id="wrapper">

				{/* <!-- Header Container */}
				{/* ================================================== --> */}
				<Header />
				{/* <!-- Header Container / End --> */}



				{/* <!-- Content */}
				{/* ================================================== --> */}
				<div id="titlebar" className="white margin-bottom-30">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h2>Blog</h2>
								<span>Featured Posts</span>

								{/* <!-- Breadcrumbs --> */}
								<nav id="breadcrumbs" className="dark">
									<ul>
										<li><a href="#">Home</a></li>
										<li>Blog</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Recent Blog Posts --> */}
				<div className="section white padding-top-0 padding-bottom-60 full-width-carousel-fix">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="blog-carousel">

									<a href="pages-blog-post.html" className="blog-compact-item-container">
										<div className="blog-compact-item">
											<img src="images/blog-04a.jpg" alt=""/>
											<span className="blog-item-tag">Tips</span>
											<div className="blog-compact-item-content">
												<ul className="blog-post-tags">
													<li>20 May 2019</li>
												</ul>
												<h3>5 Myths That Prevent Job Seekers from Overcoming Failure</h3>
												<p>Distinctively reengineer revolutionary meta-services and premium architectures intuitive opportunities.</p>
											</div>
										</div>
									</a>

									<a href="pages-blog-post.html" className="blog-compact-item-container">
										<div className="blog-compact-item">
											<img src="images/blog-05a.jpg" alt=""/>
											<span className="blog-item-tag">Recruiting</span>
											<div className="blog-compact-item-content">
												<ul className="blog-post-tags">
													<li>28 April 2019</li>
												</ul>
												<h3>12 Dog-Friendly Companies Hiring Now</h3>
												<p>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively front-end.</p>
											</div>
										</div>
									</a>

									<a href="pages-blog-post.html" className="blog-compact-item-container">
										<div className="blog-compact-item">
											<img src="images/blog-03a.jpg" alt=""/>
											<span className="blog-item-tag">Marketing</span>
											<div className="blog-compact-item-content">
												<ul className="blog-post-tags">
													<li>10 June 2019</li>
												</ul>
												<h3>11 Tips to Help You Get New Clients Through Cold Calling</h3>
												<p>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively front-end.</p>
											</div>
										</div>
									</a>
									<a href="pages-blog-post.html" className="blog-compact-item-container">
										<div className="blog-compact-item">
											<img src="images/blog-06a.jpg" alt=""/>
											<span className="blog-item-tag">Recruiting</span>
											<div className="blog-compact-item-content">
												<ul className="blog-post-tags">
													<li>9 June 2019</li>
												</ul>
												<h3>Follow Up On Job Application With This Template</h3>
												<p>Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive.</p>
											</div>
										</div>
									</a>

									<a href="pages-blog-post.html" className="blog-compact-item-container">
										<div className="blog-compact-item">
											<img src="images/blog-07a.jpg" alt=""/>
											<span className="blog-item-tag">Recruiting</span>
											<div className="blog-compact-item-content">
												<ul className="blog-post-tags">
													<li>3 June 2019</li>
												</ul>
												<h3>What It Really Takes to Make $100k Before You Turn 30</h3>
												<p>Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive.</p>
											</div>
										</div>
									</a>

								</div>

							</div>
						</div>
					</div>
				</div>
				{/* <!-- Recent Blog Posts / End --> */}


				{/* <!-- Section --> */}
				<div className="section gray">
					<div className="container">
						<div className="row">
							<div className="col-xl-8 col-lg-8">

								{/* <!-- Section Headline --> */}
								<div className="section-headline margin-top-60 margin-bottom-35">
									<h4>Recent Posts</h4>
								</div>

								{/* <!-- Blog Post --> */}
								<a href="pages-blog-post.html" className="blog-post">
									{/* <!-- Blog Post Thumbnail --> */}
									<div className="blog-post-thumbnail">
										<div className="blog-post-thumbnail-inner">
											<span className="blog-item-tag">Tips</span>
											<img src="images/blog-01a.jpg" alt=""/>
										</div>
									</div>
									{/* <!-- Blog Post Content --> */}
									<div className="blog-post-content">
										<span className="blog-post-date">22 July 2019</span>
										<h3>16 Ridiculously Easy Ways to Find & Keep a Remote Job</h3>
										<p>Efficiently myocardinate market-driven innovation via open-source alignments. Dramatically engage high-payoff infomediaries rather than. </p>
									</div>
									{/* <!-- Icon --> */}
									<div className="entry-icon"></div>
								</a>
								
								{/* <!-- Blog Post --> */}
								<a href="pages-blog-post.html" className="blog-post">
									{/* <!-- Blog Post Thumbnail --> */}
									<div className="blog-post-thumbnail">
										<div className="blog-post-thumbnail-inner">
											<span className="blog-item-tag">Recruiting</span>
											<img src="images/blog-02a.jpg" alt="" />
										</div>
									</div>
									{/* <!-- Blog Post Content --> */}
									<div className="blog-post-content">
										<span className="blog-post-date">29 June 2019</span>
										<h3>How to "Woo" a Recruiter and Land Your Dream Job</h3>
										<p>Efficiently myocardinate market-driven innovation via open-source alignments. Dramatically engage high-payoff infomediaries rather than. </p>
									</div>
								</a>

								{/* <!-- Blog Post --> */}
								<a href="pages-blog-post.html" className="blog-post">
									{/* <!-- Blog Post Thumbnail --> */}
									<div className="blog-post-thumbnail">
										<div className="blog-post-thumbnail-inner">
											<span className="blog-item-tag">Marketing</span>
											<img src="images/blog-03a.jpg" alt="" />
										</div>
									</div>
									{/* <!-- Blog Post Content --> */}
									<div className="blog-post-content">
										<span className="blog-post-date">10 June 2019</span>
										<h3>11 Tips to Help You Get New Clients Through Cold Calling</h3>
										<p>Efficiently myocardinate market-driven innovation via open-source alignments. Dramatically engage high-payoff infomediaries rather than. </p>
									</div>
								</a>

								{/* <!-- Blog Post --> */}
								<a href="pages-blog-post.html" className="blog-post">
									{/* <!-- Blog Post Thumbnail --> */}
									<div className="blog-post-thumbnail">
										<div className="blog-post-thumbnail-inner">
											<span className="blog-item-tag">Tips</span>
											<img src="images/blog-04a.jpg" alt=""/>
										</div>
									</div>
									{/* <!-- Blog Post Content --> */}
									<div className="blog-post-content">
										<span className="blog-post-date">5 June 2019</span>
										<h3>5 Myths That Prevent Job Seekers from Overcoming Failure</h3>
										<p>Efficiently myocardinate market-driven innovation via open-source alignments. Dramatically engage high-payoff infomediaries rather than. </p>
									</div>
								</a>

								{/* <!-- Pagination --> */}
								<div className="clearfix"></div>
								<div className="row">
									<div className="col-md-12">
										{/* <!-- Pagination --> */}
										<div className="pagination-container margin-top-10 margin-bottom-20">
											<nav className="pagination">
												<ul>
													<li><a href="#" className="current-page ripple-effect">1</a></li>
													<li><a href="#" className="ripple-effect">2</a></li>
													<li><a href="#" className="ripple-effect">3</a></li>
													<li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
												</ul>
											</nav>
										</div>
									</div>
								</div>
								{/* <!-- Pagination / End --> */}

							</div>


							<div className="col-xl-4 col-lg-4 content-left-offset">
								<div className="sidebar-container margin-top-65">
									
									{/* <!-- Location --> */}
									<div className="sidebar-widget margin-bottom-40">
										<div className="input-with-icon">
											<input id="autocomplete-input" type="text" placeholder="Search"/>
											<i className="icon-material-outline-search"></i>
										</div>
									</div>

									{/* <!-- Widget --> */}
									<div className="sidebar-widget">

										<h3>Trending Posts</h3>
										<ul className="widget-tabs">

											{/* <!-- Post #1 --> */}
											<li>
												<a href="pages-blog-post.html" className="widget-content active">
													<img src="images/blog-02a.jpg" alt=""/>
													<div className="widget-text">
														<h5>How to "Woo" a Recruiter and Land Your Dream Job</h5>
														<span>29 June 2019</span>
													</div>
												</a>
											</li>

											{/* <!-- Post #2 --> */}
											<li>
												<a href="pages-blog-post.html" className="widget-content">
													<img src="images/blog-07a.jpg" alt=""/>
													<div className="widget-text">
														<h5>What It Really Takes to Make $100k Before You Turn 30</h5>
														<span>3 June 2019</span>
													</div>
												</a>
											</li>
											{/* <!-- Post #3 --> */}
											<li>
												<a href="pages-blog-post.html" className="widget-content">
													<img src="images/blog-04a.jpg" alt=""/>
													<div className="widget-text">
														<h5>5 Myths That Prevent Job Seekers from Overcoming Failure</h5>
														<span>5 June 2019</span>
													</div>
												</a>
											</li>
										</ul>

									</div>
									{/* <!-- Widget / End--> */}


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

									{/* <!-- Widget --> */}
									<div className="sidebar-widget">
										<h3>Tags</h3>
										<div className="task-tags">
											<a href="#"><span>employer</span></a>
											<a href="#"><span>recruiting</span></a>
											<a href="#"><span>work</span></a>
											<a href="#"><span>salary</span></a>
											<a href="#"><span>tips</span></a>
											<a href="#"><span>income</span></a>
											<a href="#"><span>application</span></a>
										</div>
									</div>

								</div>
							</div>

						</div>
					</div>

					{/* <!-- Spacer --> */}
					<div className="padding-top-40"></div>
					{/* <!-- Spacer --> */}

				</div>
				{/* <!-- Section / End --> */}

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
									© 2019 <strong>CodeCradle Innovaions</strong>. All Rights Reserved.
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

export default PagesBlog;