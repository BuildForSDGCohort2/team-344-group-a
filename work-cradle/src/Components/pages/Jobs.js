import React, { Component, Fragment } from 'react';
import Footer from '../body-components/Footer';

             
const jobs  = [
    {
        title:"Bilingual Event Support Specialist",
        name:"Hexagon",
        location:"San Franciso",
        type: "Full Time",
        date: "2 days ago"
},
{
        title:"Competition Law Officer",
        name:"Laxo",
        location:"San Franciso",
        type: "Full Time",
        date: "2 days ago"
},
{
    title:"Barista and Cashier",
    name:"Coffee",
    location:"San Franciso",
    type: "Full Time",
    date: "2 days ago"
},
{
    title:"Restaurant General Manager",
    name:"King",
    location:"San Franciso",
    type: "Full Time",
    date: "2 days ago"
},
{
    title:"International Marketing Coordinator",
    name:"Skyist",
    location:"San Franciso",
    type: "Full Time",
    date: "2 days ago"
},

{
    title:"Administrative Assistant",
    name:"Mates",
    location:"San Franciso",
    type: "Full Time",
    date: "2 days ago"
},

{
    title:"Construction Labourers",
    name:"Podous",
    location:"San Franciso",
    type: "Full Time",
    date: "2 days ago"
},
{
    title:"Human Resources Consultant",
    name:"Trideo",
    location:"San Franciso",
    type: "Full Time",
    date: "2 days ago"
}]


class JobsLayout extends Component {
 render() {
     
     return (
        <Fragment>
   
					<div className="clearfix"></div>
					{/* Header Container / End */}


					<div className="margin-top-90"></div>


					{/* Page Content */}
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-4">
								<div className="sidebar-container">
									
									
									<div className="sidebar-widget">
										<h3>Location</h3>
										<div className="input-with-icon">
											<div id="autocomplete-container">
												<input id="autocomplete-input" type="text" placeholder="Location"/>
											</div>
											<i className="icon-material-outline-location-on"></i>
										</div>
									</div>

									
									<div className="sidebar-widget">
										<h3>Keywords</h3>
										<div className="keywords-container">
											<div className="keyword-input-container">
												<input type="text" className="keyword-input" placeholder="e.g. job title"/>
												<button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
											</div>
											<div className="keywords-list">
																			{/*<!-- keywords go here -->*/}</div>
											<div className="clearfix"></div>
										</div>
									</div>
									
									
									<div className="sidebar-widget">
										<h3>Category</h3>
										<select className="selectpicker" multiple data-selected-text-format="count" data-size="7" title="All Categories">
											<option>Accounting and Finance</option>
											<option>Clerical & Data Entry</option>
											<option>Counseling</option>
											<option>Court Administration</option>
											<option>Human Resources</option>
											<option>Investigative</option>
											<option>IT and Computers</option>
											<option>Law Enforcement</option>
											<option>Management</option>
											<option>Miscellaneous</option>
											<option>Public Relations</option>
										</select>
									</div>
									<div className="sidebar-widget">
										<h3>Job Type</h3>
										<div className="switches-list">
											<div className="switch-container">
												<label className="switch">
													<input type="checkbox"/>
													<span className="switch-button"></span> 
													Freelance
												</label>
											</div>

											<div className="switch-container">
												<label className="switch">
													<input type="checkbox"/><span className="switch-button"></span> Full Time
												</label>
											</div>

											<div className="switch-container">
												<label className="switch">
													<input type="checkbox"/><span className="switch-button"></span> Part Time</label>
											</div>

											<div className="switch-container">
												<label className="switch">
													<input type="checkbox"/><span className="switch-button"></span> Internship</label>
											</div>
											<div className="switch-container">
												<label className="switch">
													<input type="checkbox"/><span className="switch-button"></span> Temporary</label>
											</div>
										</div>

									</div>

									
									<div className="sidebar-widget">
										<h3>Salary</h3>
										<div className="margin-top-55"></div>
											
											<input className="range-slider" type="text" value="" 
											data-slider-currency="$" data-slider-min="1500" data-slider-max="15000" 
											data-slider-step="100" data-slider-value="[1500,15000]"/>
									</div>

									
									<div className="sidebar-widget">
										<h3>Tags</h3>

										<div className="tags-container">
											<div className="tag">
												<input type="checkbox" id="tag1"/>
												<label htmlFor="tag1">front-end dev</label>
											</div>
											<div className="tag">
												<input type="checkbox" id="tag2"/>
												<label htmlFor="tag2">angular</label>
											</div>
											<div className="tag">
												<input type="checkbox" id="tag3"/>
												<label htmlFor="tag3">react</label>
											</div>
											<div className="tag">
												<input type="checkbox" id="tag4"/>
												<label htmlFor="tag4">vue js</label>
											</div>
											<div className="tag">
												<input type="checkbox" id="tag5"/>
												<label htmlFor="tag5">web apps</label>
											</div>
											<div className="tag">
												<input type="checkbox" id="tag6"/>
												<label htmlFor="tag6">design</label>
											</div>
											<div className="tag">
												<input type="checkbox" id="tag7"/>
												<label htmlFor="tag7">wordpress</label>
											</div>
										</div>
										<div className="clearfix"></div>
									</div>

								</div>
							</div>
							<div className="col-xl-9 col-lg-8 content-left-offset">

								<h3 className="page-title">Search Results</h3>

								<div className="notify-box margin-top-15">
									<div className="switch-container">
										<label className="switch">
																	<input type="checkbox"/><span className="switch-button"></span>
																	<span className="switch-text">Turn on email alerts for this search</span>
															</label>
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
								
								{jobs.map((job,index) => ( 
										<div key ={index}className="listings-container compact-list-layout margin-top-35">
											<a href={""} className="job-listing">	
												<div className="job-listing-details">										
													<div className="job-listing-description">
														<h3 className="job-listing-title">{job.title}</h3>
														<div className="job-listing-footer"> 
															<ul>                                            
																<li><i className="icon-material-outline-business"></i> {job.name}
																	<div className="verified-badge" title="Verified Employer" data-tippy-placement="top"></div>
																</li>
																<li><i className="icon-material-outline-location-on"></i> {job.location}</li>
																<li><i className="icon-material-outline-business-center"></i>{job.type}</li>
																<li><i className="icon-material-outline-access-time"></i> {job.date}</li>
															</ul>
														</div>
													</div>
													<span className="bookmark-icon"></span>
												</div>
											</a>
										</div>
									))
								}
								
																		
								{/* /* <!-- Pagination --> */ }
								<div className="clearfix"></div>
								<div className="row">
									<div className="col-md-12">
									
										<div className="pagination-container margin-top-60 margin-bottom-60">
											<nav className="pagination">
												<ul> 
													<li className="pagination-arrow"><a href={"#"}><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
													<li><a href={"/#"}>1</a></li>
													<li><a href={"/#"} className="current-page">2</a></li>
													<li><a href={"/#"}>3</a></li>
													<li><a href={"/#"}>4</a></li>
													<li className="pagination-arrow"><a href={"#"}><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
												</ul>
											</nav>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div> 
					
					<Footer />
				</Fragment>
     	)
   	}
 	}


export default JobsLayout;