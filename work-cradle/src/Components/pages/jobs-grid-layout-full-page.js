import React from 'react';
import { Component } from 'react';
import Header from './Header';

class JobsGridLayoutFullPage extends Component {
	render() {
		return (
			<>
				{/* <!-- Wrapper --> */}
				<div id="wrapper">

				{/* <!-- Header Container */}
				{/* ================================================== --> */}
				<Header />
				{/* <!-- Header Container / End --> */}

				{/* <!-- Page Content */}
				{/* ================================================== --> */}
				<div className="full-page-container">

					<div className="full-page-sidebar">
						<div className="full-page-sidebar-inner" data-simplebar>
							<div className="sidebar-container">
								
								{/* <!-- Location --> */}
								<div className="sidebar-widget">
									<h3>Location</h3>
									<div className="input-with-icon">
										<div id="autocomplete-container">
											<input id="autocomplete-input" type="text" placeholder="Location" />
										</div>
										<i className="icon-material-outline-location-on"></i>
									</div>
								</div>

								
								{/* <!-- Keywords --> */}
								<div className="sidebar-widget">
									<h3>Keywords</h3>
									<div className="keywords-container">
										<div className="keyword-input-container">
											<input type="text" className="keyword-input" placeholder="e.g. job title"/>
											<button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
										</div>
										<div className="keywords-list">
										{/* <!-- keywords go here --> */}
										</div>
										<div className="clearfix"></div>
									</div>
								</div>
								
								{/* <!-- Category --> */}
								<div className="sidebar-widget">
									<h3>Category</h3>
									<select className="selectpicker default" multiple data-selected-text-format="count" data-size="7" title="All Categories" >
										<option>Admin Support</option>
										<option>Customer Service</option>
										<option>Data Analytics</option>
										<option>Design & Creative</option>
										<option>Legal</option>
										<option>Software Developing</option>
										<option>IT & Networking</option>
										<option>Writing</option>
										<option>Translation</option>
										<option>Sales & Marketing</option>
									</select>
								</div>
								
								{/* <!-- Job Types --> */}
								<div className="sidebar-widget">
									<h3>Job Type</h3>

									<div className="switches-list">
										<div className="switch-container">
											<label className="switch"><input type="checkbox" /><span className="switch-button"></span> Freelance</label>
										</div>

										<div className="switch-container">
											<label className="switch"><input type="checkbox" /><span className="switch-button"></span> Full Time</label>
										</div>

										<div className="switch-container">
											<label className="switch"><input type="checkbox" /><span className="switch-button"></span> Part Time</label>
										</div>

										<div className="switch-container">
											<label className="switch"><input type="checkbox" /><span className="switch-button"></span> Internship</label>
										</div>
										<div className="switch-container">
											<label className="switch"><input type="checkbox" /><span className="switch-button"></span> Temporary</label>
										</div>
									</div>

								</div>

								{/* <!-- Salary --> */}
								<div className="sidebar-widget">
									<h3>Salary</h3>
									<div className="margin-top-55"></div>

									{/* <!-- Range Slider --> */}
									<input className="range-slider" type="text" value="" data-slider-currency="$" data-slider-min="1500" data-slider-max="15000" data-slider-step="100" data-slider-value="[1500,15000]"/>
								</div>

								{/* <!-- Tags --> */}
								<div className="sidebar-widget">
									<h3>Tags</h3>

									<div className="tags-container">
										<div className="tag">
											<input type="checkbox" id="tag1"/>
											<label for="tag1">front-end dev</label>
										</div>
										<div className="tag">
											<input type="checkbox" id="tag2"/>
											<label for="tag2">angular</label>
										</div>
										<div className="tag">
											<input type="checkbox" id="tag3"/>
											<label for="tag3">react</label>
										</div>
										<div className="tag">
											<input type="checkbox" id="tag4"/>
											<label for="tag4">vue js</label>
										</div>
										<div className="tag">
											<input type="checkbox" id="tag5"/>
											<label for="tag5">web apps</label>
										</div>
										<div className="tag">
											<input type="checkbox" id="tag6"/>
											<label for="tag6">design</label>
										</div>
										<div className="tag">
											<input type="checkbox" id="tag7"/>
											<label for="tag7">wordpress</label>
										</div>
									</div>
									<div className="clearfix"></div>
								</div>

							</div>
							{/* <!-- Sidebar Container / End --> */}

							{/* <!-- Search Button --> */}
							<div className="sidebar-search-button-container">
								<button className="button ripple-effect">Search</button>
							</div>
							{/* <!-- Search Button / End--> */}

						</div>
					</div>
					{/* <!-- Full Page Sidebar / End --> */}
					
					{/* <!-- Full Page Content --> */}
					<div className="full-page-content-container" data-simplebar>
						<div className="full-page-content-inner">

							<h3 className="page-title">Search Results</h3>

							<div className="notify-box margin-top-15">
								<div className="switch-container">
									<label className="switch"><input type="checkbox" /><span className="switch-button"></span><span className="switch-text">Turn on email alerts for this search</span></label>
								</div>

								<div className="sort-by">
									<span>Sort by:</span>
									<select className="selectpicker hide-tick">
										<option>Relevance</option>
										<option>Newest</option>
										<option>Oldest</option>
										<option>Random</option>
									</select>
								</div>
							</div>

							<div className="listings-container grid-layout margin-top-35">
								
								{/* <!-- Job Listing --> */}
								<a href="single-job-page.html" className="job-listing">

									{/* <!-- Job Listing Details --> */}
									<div className="job-listing-details">
										{/* <!-- Logo --> */}
										<div className="job-listing-company-logo">
											<img src="images/company-logo-01.png" alt="" />
										</div>

										{/* <!-- Details --> */}
										<div className="job-listing-description">
											<h4 className="job-listing-company">Hexagon <span className="verified-badge" title="Verified Employer" data-tippy-placement="top"></span></h4>
											<h3 className="job-listing-title">Bilingual Event Support Specialist</h3>
										</div>
									</div>

									{/* <!-- Job Listing Footer --> */}
									<div className="job-listing-footer">
										<span className="bookmark-icon"></span>
										<ul>
											<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
											<li><i className="icon-material-outline-business-center"></i> Full Time</li>
											<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
											<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
										</ul>
									</div>
								</a>	

								{/* <!-- Job Listing --> */}
								<a href="single-job-page.html" className="job-listing">

									{/* <!-- Job Listing Details --> */}
									<div className="job-listing-details">
										{/* <!-- Logo --> */}
										<div className="job-listing-company-logo">
											<img src="images/company-logo-05.png" alt="" />
										</div>

										{/* <!-- Details --> */}
										<div className="job-listing-description">
											<h4 className="job-listing-company">Laxo</h4>
											<h3 className="job-listing-title">Competition Law Officer</h3>
										</div>
									</div>

									{/* <!-- Job Listing Footer --> */}
									<div className="job-listing-footer">
										<span className="bookmark-icon"></span>
										<ul>
											<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
											<li><i className="icon-material-outline-business-center"></i> Full Time</li>
											<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
											<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
										</ul>
									</div>
								</a>

								{/* <!-- Job Listing --> */}
								<a href="single-job-page.html" className="job-listing">

									{/* <!-- Job Listing Details --> */}
									<div className="job-listing-details">
										{/* <!-- Logo --> */}
										<div className="job-listing-company-logo">
											<img src="images/company-logo-02.png" alt="" />
										</div>

										{/* <!-- Details --> */}
										<div className="job-listing-description">
											<h4 className="job-listing-company">Coffee</h4>
											<h3 className="job-listing-title">Barista and Cashier</h3>
										</div>
									</div>

									{/* <!-- Job Listing Footer --> */}
									<div className="job-listing-footer">
										<span className="bookmark-icon"></span>
										<ul>
											<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
											<li><i className="icon-material-outline-business-center"></i> Full Time</li>
											<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
											<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
										</ul>
									</div>
								</a>
								

								{/* <!-- Job Listing --> */}
								<a href="single-job-page.html" className="job-listing">

									{/* <!-- Job Listing Details --> */}
									<div className="job-listing-details">
										{/* <!-- Logo --> */}
										<div className="job-listing-company-logo">
											<img src="images/company-logo-03.png" alt="" />
										</div>

										{/* <!-- Details --> */}
										<div className="job-listing-description">
											<h4 className="job-listing-company">King <span className="verified-badge" title="Verified Employer" data-tippy-placement="top"></span></h4>
											<h3 className="job-listing-title">Restaurant General Manager</h3>
										</div>
									</div>

									{/* <!-- Job Listing Footer --> */}
									<div className="job-listing-footer">
										<span className="bookmark-icon"></span>
										<ul>
											<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
											<li><i className="icon-material-outline-business-center"></i> Full Time</li>
											<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
											<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
										</ul>
									</div>
								</a>


								{/* <!-- Job Listing --> */}
								<a href="single-job-page.html" className="job-listing">

									{/* <!-- Job Listing Details --> */}
									<div className="job-listing-details">
										{/* <!-- Logo --> */}
										<div className="job-listing-company-logo">
											<img src="images/company-logo-05.png" alt="" />
										</div>

										{/* <!-- Details --> */}
										<div className="job-listing-description">
											<h4 className="job-listing-company">Skyist</h4>
											<h3 className="job-listing-title">International Marketing Coordinator</h3>
										</div>
									</div>

									{/* <!-- Job Listing Footer --> */}
									<div className="job-listing-footer">
										<span className="bookmark-icon"></span>
										<ul>
											<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
											<li><i className="icon-material-outline-business-center"></i> Full Time</li>
											<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
											<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
										</ul>
									</div>
								</a>

								{/* <!-- Job Listing --> */}
								<a href="single-job-page.html" className="job-listing">

									{/* <!-- Job Listing Details --> */}
									<div className="job-listing-details">
										{/* <!-- Logo --> */}
										<div className="job-listing-company-logo">
											<img src="images/company-logo-05.png" alt=""/>
										</div>

										{/* <!-- Details --> */}
										<div className="job-listing-description">
											<h4 className="job-listing-company">Podous</h4>
											<h3 className="job-listing-title">Construction Labourers</h3>
										</div>
									</div>

									{/* <!-- Job Listing Footer --> */}
									<div className="job-listing-footer">
										<span className="bookmark-icon"></span>
										<ul>
											<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
											<li><i className="icon-material-outline-business-center"></i> Full Time</li>
											<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
											<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
										</ul>
									</div>
								</a>

								{/* <!-- Job Listing --> */}
								<a href="single-job-page.html" className="job-listing">

									{/* <!-- Job Listing Details --> */}
									<div className="job-listing-details">
										{/* <!-- Logo --> */}
										<div className="job-listing-company-logo">
											<img src="images/company-logo-04.png" alt="" />
										</div>

										{/* <!-- Details --> */}
										<div className="job-listing-description">
											<h4 className="job-listing-company">Mates</h4>
											<h3 className="job-listing-title">Administrative Assistant</h3>
										</div>
									</div>

									{/* <!-- Job Listing Footer --> */}
									<div className="job-listing-footer">
										<span className="bookmark-icon"></span>
										<ul>
											<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
											<li><i className="icon-material-outline-business-center"></i> Full Time</li>
											<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
											<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
										</ul>
									</div>
								</a>

								{/* <!-- Job Listing --> */}
								<a href="single-job-page.html" className="job-listing">

									{/* <!-- Job Listing Details --> */}
									<div className="job-listing-details">
										{/* <!-- Logo --> */}
										<div className="job-listing-company-logo">
											<img src="images/company-logo-06.png" alt="" />
										</div>

										{/* <!-- Details --> */}
										<div className="job-listing-description">
											<h4 className="job-listing-company">Trideo</h4>
											<h3 className="job-listing-title">Human Resources Consultant</h3>
										</div>
									</div>

									{/* <!-- Job Listing Footer --> */}
									<div className="job-listing-footer">
										<span className="bookmark-icon"></span>
										<ul>
											<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
											<li><i className="icon-material-outline-business-center"></i> Full Time</li>
											<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
											<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
										</ul>
									</div>
								</a>
								
								{/* <!-- Job Listing --> */}
								<a href="single-job-page.html" className="job-listing">

									{/* <!-- Job Listing Details --> */}
									<div className="job-listing-details">
										{/* <!-- Logo --> */}
										<div className="job-listing-company-logo">
											<img src="images/company-logo-06.png" alt="" />
										</div>

										{/* <!-- Details --> */}
										<div className="job-listing-description">
											<h4 className="job-listing-company">Trideo</h4>
											<h3 className="job-listing-title">International Marketing Specialist</h3>
										</div>
									</div>

									{/* <!-- Job Listing Footer --> */}
									<div className="job-listing-footer">
										<span className="bookmark-icon"></span>
										<ul>
											<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
											<li><i className="icon-material-outline-business-center"></i> Full Time</li>
											<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
											<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
										</ul>
									</div>
								</a>
								
								{/* <!-- Job Listing --> */}
								<a href="single-job-page.html" className="job-listing">

									{/* <!-- Job Listing Details --> */}
									<div className="job-listing-details">
										{/* <!-- Logo --> */}
										<div className="job-listing-company-logo">
											<img src="images/company-logo-02.png" alt="" />
										</div>

										{/* <!-- Details --> */}
										<div className="job-listing-description">
											<h4 className="job-listing-company">Coffee</h4>
											<h3 className="job-listing-title">Terrain Cafe Barista</h3>
										</div>
									</div>

									{/* <!-- Job Listing Footer --> */}
									<div className="job-listing-footer">
										<span className="bookmark-icon"></span>
										<ul>
											<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
											<li><i className="icon-material-outline-business-center"></i> Full Time</li>
											<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
											<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
										</ul>
									</div>
								</a>
								
								{/* <!-- Job Listing --> */}
								<a href="single-job-page.html" className="job-listing">

									{/* <!-- Job Listing Details --> */}
									<div className="job-listing-details">
										{/* <!-- Logo --> */}
										<div className="job-listing-company-logo">
											<img src="images/company-logo-05.png" alt="" />
										</div>

										{/* <!-- Details --> */}
										<div className="job-listing-description">
											<h4 className="job-listing-company">Kinte</h4>
											<h3 className="job-listing-title">Skilled Labourer</h3>
										</div>
									</div>

									{/* <!-- Job Listing Footer --> */}
									<div className="job-listing-footer">
										<span className="bookmark-icon"></span>
										<ul>
											<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
											<li><i className="icon-material-outline-business-center"></i> Full Time</li>
											<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
											<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
										</ul>
									</div>
								</a>

								{/* <!-- Job Listing --> */}
								<a href="single-job-page.html" className="job-listing">

									{/* <!-- Job Listing Details --> */}
									<div className="job-listing-details">
										{/* <!-- Logo --> */}
										<div className="job-listing-company-logo">
											<img src="images/company-logo-05.png" alt="" />
										</div>

										{/* <!-- Details --> */}
										<div className="job-listing-description">
											<h4 className="job-listing-company">Alilia</h4>
											<h3 className="job-listing-title">Healthcare Claims Advisor</h3>
										</div>
									</div>

									{/* <!-- Job Listing Footer --> */}
									<div className="job-listing-footer">
										<span className="bookmark-icon"></span>
										<ul>
											<li><i className="icon-material-outline-location-on"></i> San Francissco</li>
											<li><i className="icon-material-outline-business-center"></i> Full Time</li>
											<li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
											<li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
										</ul>
									</div>
								</a>

							</div>

							{/* <!-- Pagination --> */}
							<div className="clearfix"></div>
							<div className="pagination-container margin-top-20 margin-bottom-20">
								<nav className="pagination">
									<ul>
										<li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
										<li><a href="#" className="ripple-effect">1</a></li>
										<li><a href="#" className="ripple-effect current-page">2</a></li>
										<li><a href="#" className="ripple-effect">3</a></li>
										<li><a href="#" className="ripple-effect">4</a></li>
										<li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
									</ul>
								</nav>
							</div>
							<div className="clearfix"></div>
							{/* <!-- Pagination / End --> */}

							{/* <!-- Footer --> */}
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
					{/* <!-- Full Page Content / End --> */}

				</div>


				</div>
				{/* <!-- Wrapper / End --> */}

			</>
		)
	}
}

export default JobsGridLayoutFullPage;