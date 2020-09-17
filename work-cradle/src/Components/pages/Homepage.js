import { Component } from 'react';
import React from 'react';

import Header from '../body-component/HomepageComps/HomeHeader';
import Footer from '../body-component/Footer';
import SearchBar from '../body-component/HomepageComps/SearchBar';
import { Link } from 'react-router-dom';

class Homepage extends Component {
 render () {
	 return (
		 <>
		 	<div id="wrapper" className="wrapper-with-transparent-header">
			<Header /> 
			{/* <!-- Intro Banner
			================================================== --> */}
			<div className="intro-banner dark-overlay big-padding">
				
				{/* <!-- Transparent Header Spacer --> */}
				<div className="transparent-header-spacer"></div>

				<div className="container">
					
					{/* <!-- Intro Headline --> */}
					<div className="row">
						<div className="col-md-12">
							<div className="banner-headline-alt">
								<h3>Make things happen.™</h3>
								<span>Bridging the gap between Employers and Talents.   In-demand Talents, On Demand</span>
							</div>
						</div>
					</div> 
					
					{/* <!-- Search Bar --> */}
					<div className="row">
						<div className="col-md-12">
							<SearchBar />
						</div>
					</div>
				
				</div>
				
				{/* <!-- Video Container --> */}
				<div className="video-container" data-background-image="images/home-video-background-poster.jpg">
					<video loop autoplay muted>
						<source src="images/home-video-background.mp4" type="video/mp4" />
					</video>
				</div>

			</div>

			{/* <!-- Content */}
			{/* ================================================== --> */}

			{/* <!-- Popular Job Categories --> */}
			<div className="section margin-top-65 margin-bottom-30">
				<div className="container">
					<div className="row">

						{/* <!-- Section Headline --> */}
						<div className="col-xl-12">
							<div className="section-headline centered margin-top-0 margin-bottom-45" style={{borderBottom: '1px solid', margin:''}}>
								<h3>Popular Categories</h3>
							</div>
						</div>

						<div className="col-xl-3 col-md-6">
							{/* <!-- Photo Box --> */}
							<Link to="/jobs/web_software_dev" className="photo-box small" data-background-image="images/job-category-01.jpg">
							<div className="photo-box-content">
								<h3>Web / Software Dev</h3>
								<span></span>
							</div>
						</Link>
					</div>
					
					<div className="col-xl-3 col-md-6">
						{/* <!-- Photo Box --> */}
						<Link to="/jobs/data_science_analalytics" className="photo-box small" data-background-image="images/job-category-02.jpg">
							<div className="photo-box-content">
								<h3>Data Science / Analitycs</h3>
								<span></span>
							</div>
						</Link>
					</div>
					
					<div className="col-xl-3 col-md-6">
						{/* <!-- Photo Box --> */}
						<Link to="/jobs/javascript" className="photo-box small" data-background-image="images/job-category-03.jpg">
							<div className="photo-box-content">
								<h3>Javascript</h3>
								<span></span>
							</div>
						</Link>
					</div>

					<div className="col-xl-3 col-md-6">
						{/* <!-- Photo Box --> */}
						<Link to="/jobs/goland" className="photo-box small" data-background-image="images/job-category-04.jpg">
							<div className="photo-box-content">
								<h3>Goland</h3>
								<span></span>
							</div>
						</Link>
					</div>

					<div className="col-xl-3 col-md-6">
						{/* <!-- Photo Box --> */}
						<Link to="/jobs/python" className="photo-box small" data-background-image="images/job-category-05.jpg">
							<div className="photo-box-content">
								<h3>Python</h3>
								<span></span>
							</div>
						</Link>
					</div>
					
					<div className="col-xl-3 col-md-6">
						{/* <!-- Photo Box --> */}
						<Link to="/jobs/graphic_&_design" className="photo-box small" data-background-image="images/job-category-06.jpg">
							<div className="photo-box-content">
								<h3>Graphics & Design</h3>
								<span></span>
							</div>
						</Link>
					</div>
					
					<div className="col-xl-3 col-md-6">
						{/* <!-- Photo Box --> */}
						<Link to="/jobs/digital_marketing" className="photo-box small" data-background-image="images/job-category-07.jpg">
							<div className="photo-box-content">
								<h3>Digital Marketing</h3>
								<span></span>
							</div>
						</Link>
					</div>

					<div className="col-xl-3 col-md-6">
						{/* <!-- Photo Box --> */}
						<Link to="/jobs/education_training" className="photo-box small" data-background-image="images/job-category-08.jpg">
							<div className="photo-box-content">
								<h3>Education & Training</h3>
								<span></span>
							</div>
						</Link>
					</div>

				</div>
			</div>
		</div>
		{/* <!-- Features Cities / End --> */}


		{/* <!-- Features Jobs --> */}
		<div className="section padding-top-65 padding-bottom-75">
			<div className="container">
				<div className="row">
					<div className="col-xl-12">
						
						{/* <!-- Section Headline --> */}
						{/* <div className="section-headline margin-top-0 margin-bottom-35">
							<h3>Recent Projects</h3>
							<Link href="pages/jobs-list-layout-full-page-map.html" className="headline-link">Browse All Jobs</Link>
						</div> */}
						
						{/* <!-- Jobs Container --> */}
						
						{/* <!-- Jobs Container / End --> */}

					</div>
				</div>
			</div>
		</div>
		{/* <!-- Featured Jobs / End --> */}


		{/* <!-- Photo Section --> */}
		<div className="photo-section" data-background-image="images/section-background.jpg">

			{/* <!-- Infobox --> */}
			<div className="text-content white-font">
				<div className="container">

					<div className="row">
						<div className="col-lg-6 col-md-8 col-sm-12">
							<h2>Find a Talent. <br /> Get the right talent to get that job done.</h2>
							<Link href="/freelancers" className="button button-sliding-icon ripple-effect big margin-top-20">Get Started <i className="icon-material-outline-arrow-right-alt"></i></Link>
						</div>
					</div>

				</div>
			</div>

			{/* <!-- Infobox / End --> */}

		</div>
		{/* <!-- Photo Section / End --> */}


		{/* <!-- Highest Rated Freelancers --> */}
		<div className="section gray padding-top-65 padding-bottom-70 full-width-carousel-fix">
			<div className="container">
				<div className="row">

					<div className="col-xl-12">
						{/* <!-- Section Headline --> */}
						<div className="section-headline margin-top-0 margin-bottom-25">
							<h3>Highest Rated Talents</h3>
							<a href="pages/freelancers-grid-layout.html" className="headline-link">Browse All Talents</a>
						</div>
					</div>

					<div className="col-xl-12">
						<div className="default-slick-carousel freelancers-container freelancers-grid-layout">

							{/* <!--Freelancer --> */}
							<div className="freelancer">

								{/* <!-- Overview --> */}
								<div className="freelancer-overview">
									<div className="freelancer-overview-inner">
										
										{/* <!-- Bookmark Icon --> */}
										<span className="bookmark-icon"></span>
										
										{/* <!-- Avatar --> */}
										<div className="freelancer-avatar">
											<div className="verified-badge"></div>
											<a href="pages/single-freelancer-profile.html"><img src="images/user-avatar-big-01.jpg" alt="" /></a>
										</div>

										{/* <!-- Name --> */}
										<div className="freelancer-name">
											<h4><a href="pages/single-freelancer-profile.html">Emmanuel Omale <img className="flag" src="images/flags/gb.svg" alt="" title="United Kingdom" data-tippy-placement="top" /></a></h4>
											<span>UI/UX Designer</span>
										</div>

										{/* <!-- Rating --> */}
										<div className="freelancer-rating">
											<div className="star-rating" data-rating="5.0"></div>
										</div>
									</div>
								</div>
								
								{/* <!-- Details --> */}
								<div className="freelancer-details">
									<div className="freelancer-details-list">
										<ul>
											<li>Location <strong><i className="icon-material-outline-location-on"></i> Nigeria</strong></li>
											<li>Rate <strong>$60 / hr</strong></li>
											<li>Job Success <strong>95%</strong></li>
										</ul>
									</div>
									<a href="pages/single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
								</div>
							</div>
							{/* <!-- Freelancer / End --> */}

							{/* <!--Freelancer --> */}
							<div className="freelancer">

								{/* <!-- Overview --> */}
								<div className="freelancer-overview">
									<div className="freelancer-overview-inner">
										
										{/* <!-- Bookmark Icon --> */}
										<span className="bookmark-icon"></span>
										
										{/* <!-- Avatar --> */}
										<div className="freelancer-avatar">
											<div className="verified-badge"></div>
											<a href="pages/single-freelancer-profile.html"><img src="images/user-avatar-big-02.jpg" alt="" /></a>
										</div>

										{/* <!-- Name --> */}
										<div className="freelancer-name">
											<h4><a href="#">Christian Ndu<img className="flag" src="images/flags/de.svg" alt="" title="Germany" data-tippy-placement="top" /></a></h4>
											<span>Front-End Developer</span>
										</div>

										{/* <!-- Rating --> */}
										<div className="freelancer-rating">
											<div className="star-rating" data-rating="5.0"></div>
										</div>
									</div>
								</div>
								
								{/* <!-- Details --> */}
								<div className="freelancer-details">
									<div className="freelancer-details-list">
										<ul>
											<li>Location <strong><i className="icon-material-outline-location-on"></i> Nigeria</strong></li>
											<li>Rate <strong>$40 / hr</strong></li>
											<li>Job Success <strong>88%</strong></li>
										</ul>
									</div>
									<a href="pages/single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
								</div>
							</div>
							{/* <!-- Freelancer / End --> */}

							{/* <!--Freelancer --> */}
							<div className="freelancer">

								{/* <!-- Overview --> */}
								<div className="freelancer-overview">
									<div className="freelancer-overview-inner">
										{/* <!-- Bookmark Icon --> */}
										<span className="bookmark-icon"></span>
										
										{/* <!-- Avatar --> */}
										<div className="freelancer-avatar">
											<a href="single-freelancer-profile.html"><img src="images/user-avatar-placeholder.png" alt="" /></a>
										</div>

										{/* <!-- Name --> */}
										<div className="freelancer-name">
											<h4><a href="#">Job Oaikhenah <img className="flag" src="images/flags/pl.svg" alt="" title="Poland" data-tippy-placement="top"/></a></h4>
											<span>Front-End Developer</span>
										</div>

										{/* <!-- Rating --> */}
										<div className="freelancer-rating">
											<div className="star-rating" data-rating="4.9"></div>
										</div>
									</div>
								</div>
								
								{/* <!-- Details --> */}
								<div className="freelancer-details">
									<div className="freelancer-details-list">
										<ul>
											<li>Location <strong><i className="icon-material-outline-location-on"></i>Nigeria</strong></li>
											<li>Rate <strong>$50 / hr</strong></li>
											<li>Job Success <strong>100%</strong></li>
										</ul>
									</div>
									<a href="pages/single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
								</div>
							</div>
							{/* <!-- Freelancer / End --> */}

							{/* <!--Freelancer --> */}
							<div className="freelancer">

								{/* <!-- Overview --> */}
								<div className="freelancer-overview">
										<div className="freelancer-overview-inner">
										{/* <!-- Bookmark Icon --> */}
										<span className="bookmark-icon"></span>
										
										{/* <!-- Avatar --> */}
										<div className="freelancer-avatar">
											<div className="verified-badge"></div>
											<a href="pages/single-freelancer-profile.html"><img src="images/user-avatar-big-03.jpg" alt="" /></a>
										</div>

										{/* <!-- Name --> */}
										<div className="freelancer-name">
											<h4><a href="#">Gain John <img className="flag" src="images/flags/au.svg" alt="" title="Australia" data-tippy-placement="top" /></a></h4>
											<span>Back-End Developer</span>
										</div>

										{/* <!-- Rating --> */}
										<div className="freelancer-rating">
											<div className="star-rating" data-rating="5.0"></div>
										</div>
									</div>
								</div>
								
								{/* <!-- Details --> */}
								<div className="freelancer-details">
									<div className="freelancer-details-list">
										<ul>
											<li>Location <strong><i className="icon-material-outline-location-on"></i> Nigeria</strong></li>
											<li>Rate <strong>$70 / hr</strong></li>
											<li>Job Success <strong>100%</strong></li>
										</ul>
									</div>
									<a href="pages/single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
								</div>
							</div>
							{/* <!-- Freelancer / End --> */}
					
						</div>
					</div>

				</div>
			</div>
		</div>
		{/* <!-- Highest Rated Freelancers / End--> */}

		{/* <!-- Icon Boxes --> */}
		<a id="how_it_works"></a>
		<div className="section padding-top-65 padding-bottom-65">
			<div className="container">
				<div className="row">

					<div className="col-xl-12">
						{/* <!-- Section Headline --> */}
						<div className="section-headline centered margin-top-0 margin-bottom-5" style={{borderBottom: '1px solid', margin:''}}>
							<h3>How It Works?</h3>
						</div>
					</div>
					
					<div className="col-xl-4 col-md-4" style={{display:'flex', alignItems:'center'}}>
						{/* <!-- Icon Box --> */}
						<div className="icon-box with-line">
							{/* <!-- Icon --> */}
							<div className="icon-box-circle">
								<div className="icon-box-circle-inner">
									<i className="icon-line-awesome-lock"></i>
									<div className="icon-box-check"><i className="icon-material-outline-check"></i></div>
								</div>
							</div>
							<h3>Create an Account</h3>
						</div>
					</div>
					
					<div className="col-xl-8 col-md-8">
						<h3 style={{textAlign:'center', marginTop: '30px'}}>As a Freelancer</h3>
						<div className="col-xl-12 col-md-12 row">
							<div className="col-xl-6 col-md-6">
								{/* <!-- Icon Box --> */}
								<div className="icon-box with-line">
									{/* <!-- Icon --> */}
									<div className="icon-box-circle">
										<div className="icon-box-circle-inner">
											<i className="icon-line-awesome-legal"></i>
											<div className="icon-box-check"><i className="icon-material-outline-check"></i></div>
										</div>
									</div>
									<h3>Find a Task</h3>
								</div>
							</div>

							<div className="col-xl-6 col-md-6">
								{/* <!-- Icon Box --> */}
								<div className="icon-box">
									{/* <!-- Icon --> */}
									<div className="icon-box-circle">
										<div className="icon-box-circle-inner">
											<i className=" icon-line-awesome-trophy"></i>
											<div className="icon-box-check"><i className="icon-material-outline-check"></i></div>
										</div>
									</div>
									<h3>Get Awarded</h3>
								</div>
							</div>
						</div>
						<div className="col-xl-12 col-md-12 row">
							<div className="col-xl-6 col-md-6">
								{/* <!-- Icon Box --> */}
								<div className="icon-box with-line">
									{/* <!-- Icon --> */}
									<div className="icon-box-circle">
										<div className="icon-box-circle-inner">
											<i className="icon-line-awesome-legal"></i>
											<div className="icon-box-check"><i className="icon-material-outline-check"></i></div>
										</div>
									</div>
									<h3>Post a Task</h3>
								</div>
							</div>

							<div className="col-xl-6 col-md-6">
								{/* <!-- Icon Box --> */}
								<div className="icon-box">
									{/* <!-- Icon --> */}
									<div className="icon-box-circle">
										<div className="icon-box-circle-inner">
											<i className=" icon-line-awesome-trophy"></i>
											<div className="icon-box-check"><i className="icon-material-outline-check"></i></div>
										</div>
									</div>
									<h3>Choose an Expert</h3>
								</div>
							</div>
						</div>
						<h3 style={{textAlign:'center', marginTop: '30px'}}>As an Employer</h3>
					</div>	
				</div>
			</div>
		</div>
		{/* <!-- Icon Boxes / End --> */}



		<div className="section border-top padding-top-45 padding-bottom-45">
			<div className="section-headline centered margin-top-0 margin-bottom-6">
				<h3>Companies</h3>
			</div>
			{/* <!-- Logo Carousel --> */}
			<div className="container">
				<div className="row">
					<div className="col-xl-12">
						{/* <!-- Carousel --> */}
						<div className="col-md-12">
							<div className="logo-carousel">
								
								<div className="carousel-item">
									<a href="http://acmelogos.com/" target="_blank" title="http://acmelogos.com/"><img src="images/logo-carousel-01.png" alt="" /></a>
								</div>
								
								<div className="carousel-item">
									<a href="http://acmelogos.com/" target="_blank" title="http://acmelogos.com/"><img src="images/logo-carousel-02.png" alt="" /></a>
								</div>
								
								<div className="carousel-item">
									<a href="http://acmelogos.com/" target="_blank" title="http://acmelogos.com/"><img src="images/logo-carousel-03.png" alt="" /></a>
								</div>
								
								<div className="carousel-item">
									<a href="http://acmelogos.com/" target="_blank" title="http://acmelogos.com/"><img src="images/logo-carousel-04.png" alt="" /></a>
								</div>
								
								<div className="carousel-item">
									<a href="http://acmelogos.com/" target="_blank" title="http://acmelogos.com/"><img src="images/logo-carousel-05.png" alt="" /></a>
								</div>

								<div className="carousel-item">
									<a href="http://acmelogos.com/" target="_blank" title="http://acmelogos.com/"><img src="images/logo-carousel-06.png" alt="" /></a>
								</div>

							</div>
						</div>
						{/* <!-- Carousel / End --> */}
					</div>
				</div>
			</div>
		</div>
		<Footer />
		</div>
		</>
		)
 	}
}

export default Homepage;



{/* <div className="footer-middle-section">
				<div className="container">
					<div className="row"> */}

						{/* <!-- Links --> */}
						// <div className="col-xl-2 col-lg-2 col-md-3">
						// 	<div className="footer-links">
						// 		<h3>For Candidates</h3>
						// 		<ul>
						// 			<li><a href="#"><span>Browse Jobs</span></a></li>
						// 			<li><a href="#"><span>Add Resume</span></a></li>
						// 			<li><a href="#"><span>Job Alerts</span></a></li>
						// 			<li><a href="#"><span>My Bookmarks</span></a></li>
						// 		</ul>
						// 	</div>
						// </div>

						{/* <!-- Links --> */}
						// <div className="col-xl-2 col-lg-2 col-md-3">
						// 	<div className="footer-links">
						// 		<h3>For Employers</h3>
						// 		<ul>
						// 			<li><a href="#"><span>Browse Candidates</span></a></li>
						// 			<li><a href="#"><span>Post a Job</span></a></li>
						// 			<li><a href="#"><span>Post a Task</span></a></li>
						// 		</ul>
						// 	</div>
						// </div>

						{/* <!-- Links --> */}
						// <div className="col-xl-2 col-lg-2 col-md-3">
						// 	<div className="footer-links">
						// 		<h3>Helpful Links</h3>
						// 		<ul>
						// 			<li><a href="#"><span>Contact</span></a></li>
						// 			<li><a href="#"><span>Privacy Policy</span></a></li>
						// 			<li><a href="#"><span>Terms of Use</span></a></li>
						// 		</ul>
						// 	</div>
						// </div>

						{/* <!-- Links --> */}
						// <div className="col-xl-2 col-lg-2 col-md-3">
						// 	<div className="footer-links">
						// 		<h3>Account</h3>
						// 		<ul>
						// 			<li><a href="#"><span>Log In</span></a></li>
						// 			<li><a href="#"><span>My Account</span></a></li>
						// 		</ul>
						// 	</div>
						// </div>

						{/* <!-- Newsletter --> */}
			// 			<div className="col-xl-4 col-lg-4 col-md-12">
			// 				<h3><i className="icon-feather-mail"></i> Sign Up For a Newsletter</h3>
			// 				<p>Weekly breaking news, analysis and cutting edge advices on job searching.</p>
			// 				<form action="#" method="get" className="newsletter">
			// 					<input type="text" name="fname" placeholder="Enter your email address" />
			// 					<button type="submit"><i className="icon-feather-arrow-right"></i></button>
			// 				</form>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>






		{/* <div className="listings-container compact-list-layout margin-top-35">
							
			<!-- Job Listing -->
			<a href="pages/single-job-page.html" className="job-listing with-apply-button">

				<!-- Job Listing Details -->
				<div className="job-listing-details">

					<!-- Logo -->
					<div className="job-listing-company-logo">
						<img src="images/company-logo-01.png" alt="">
					</div>

					<!-- Details -->
					<div className="job-listing-description">
						<h3 className="job-listing-title">Bilingual Event Support Specialist</h3>

						<!-- Job Listing Footer -->
						<div className="job-listing-footer">
							<ul>
								<li><i className="icon-material-outline-business"></i> Hexagon <div className="verified-badge" title="Verified Employer" data-tippy-placement="top"></div></li>
								<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
								<li><i className="icon-material-outline-business-center"></i> Full Time</li>
								<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
							</ul>
						</div>
					</div>

					<!-- Apply Button -->
					<span className="list-apply-button ripple-effect">Apply Now</span>
				</div>
			</a>	 */}

	{/* <!-- Job Listing -->
	<a href="single-job-page.html" className="job-listing with-apply-button">

		<!-- Job Listing Details -->
		<div className="job-listing-details">

			<!-- Logo -->
			<div className="job-listing-company-logo">
				<img src="images/company-logo-05.png" alt="">
			</div>

			<!-- Details -->
			<div className="job-listing-description">
				<h3 className="job-listing-title">Competition Law Officer</h3>

				<!-- Job Listing Footer -->
				<div className="job-listing-footer">
					<ul>
						<li><i className="icon-material-outline-business"></i> Laxo</li>
						<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
						<li><i className="icon-material-outline-business-center"></i> Full Time</li>
						<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
					</ul>
				</div>
			</div>

			<!-- Apply Button -->
			<span className="list-apply-button ripple-effect">Apply Now</span>
		</div>
	</a>
	<!-- Job Listing -->
	<a href="pages/single-job-page.html" className="job-listing with-apply-button">

		<!-- Job Listing Details -->
		<div className="job-listing-details">

			<!-- Logo -->
			<div className="job-listing-company-logo">
				<img src="images/company-logo-02.png" alt="">
			</div>

			<!-- Details -->
			<div className="job-listing-description">
				<h3 className="job-listing-title">Barista and Cashier</h3>

				<!-- Job Listing Footer -->
				<div className="job-listing-footer">
					<ul>
						<li><i className="icon-material-outline-business"></i> Coffee</li>
						<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
						<li><i className="icon-material-outline-business-center"></i> Full Time</li>
						<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
					</ul>
				</div>
			</div>

			<!-- Apply Button -->
			<span className="list-apply-button ripple-effect">Apply Now</span>
		</div>
	</a>
	

	<!-- Job Listing -->
	<a href="single-job-page.html" className="job-listing with-apply-button">

		<!-- Job Listing Details -->
		<div className="job-listing-details">

			<!-- Logo -->
			<div className="job-listing-company-logo">
				<img src="images/company-logo-03.png" alt="">
			</div>

			<!-- Details -->
			<div className="job-listing-description">
				<h3 className="job-listing-title">Restaurant General Manager</h3>

				<!-- Job Listing Footer -->
				<div className="job-listing-footer">
					<ul>
						<li><i className="icon-material-outline-business"></i> King <div className="verified-badge" title="Verified Employer" data-tippy-placement="top"></div></li>
						<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
						<li><i className="icon-material-outline-business-center"></i> Full Time</li>
						<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
					</ul>
				</div>
			</div>

			<!-- Apply Button -->
			<span className="list-apply-button ripple-effect">Apply Now</span>
		</div>
	</a>

	<!-- Job Listing -->
	<a href="pages/single-job-page.html" className="job-listing with-apply-button">

		<!-- Job Listing Details -->
		<div className="job-listing-details">

			<!-- Logo -->
			<div className="job-listing-company-logo">
				<img src="images/company-logo-05.png" alt="">
			</div>

			<!-- Details -->
			<div className="job-listing-description">
				<h3 className="job-listing-title">International Marketing Coordinator</h3>

				<!-- Job Listing Footer -->
				<div className="job-listing-footer">
					<ul>
						<li><i className="icon-material-outline-business"></i> Skyist</li>
						<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
						<li><i className="icon-material-outline-business-center"></i> Full Time</li>
						<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
					</ul>
				</div>
			</div>

			<!-- Apply Button -->
			<span className="list-apply-button ripple-effect">Apply Now</span>
		</div>
	</a>

</div> */}

