import React, { Component, Fragment } from 'react'

             
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
        name="Laxo",
        location:"San Franciso",
        type: "Full Time",
        date: "2 days ago"
},
{
    title:"Barista and Cashier",
    name="Coffee",
    location:"San Franciso",
    type: "Full Time",
    date: "2 days ago"
},
{
    title:"Restaurant General Manager",
    name="King",
    location:"San Franciso",
    type: "Full Time",
    date: "2 days ago"
},
{
    title:"International Marketing Coordinator",
    name="Skyist",
    location:"San Franciso",
    type: "Full Time",
    date: "2 days ago"
},

{
    title:"Administrative Assistant",
    name="Mates",
    location:"San Franciso",
    type: "Full Time",
    date: "2 days ago"
},

{
    title:"Construction Labourers",
    name="Podous",
    location:"San Franciso",
    type: "Full Time",
    date: "2 days ago"
},
{
    title:"Human Resources Consultant",
    name="Trideo",
    location:"San Franciso",
    type: "Full Time",
    date: "2 days ago"
}]


class JobsLayout extends Component {
 render() {
     
     return(
         <Fragment>
   
<div class="clearfix"></div>
{/* Header Container / End */}


<div class="margin-top-90"></div>


{/* Page Content */}
<div class="container">
	<div class="row">
		<div class="col-xl-3 col-lg-4">
			<div class="sidebar-container">
				
				
				<div class="sidebar-widget">
					<h3>Location</h3>
					<div class="input-with-icon">
						<div id="autocomplete-container">
							<input id="autocomplete-input" type="text" placeholder="Location"/>
						</div>
						<i class="icon-material-outline-location-on"></i>
					</div>
				</div>

				
				<div class="sidebar-widget">
					<h3>Keywords</h3>
					<div class="keywords-container">
						<div class="keyword-input-container">
							<input type="text" class="keyword-input" placeholder="e.g. job title"/>
							<button class="keyword-input-button ripple-effect"><i class="icon-material-outline-add"></i></button>
						</div>
						<div class="keywords-list">
                            {/*<!-- keywords go here -->*/}</div>
						<div class="clearfix"></div>
					</div>
				</div>
				
				
				<div class="sidebar-widget">
					<h3>Category</h3>
					<select class="selectpicker" multiple data-selected-text-format="count" data-size="7" title="All Categories">
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
				<div class="sidebar-widget">
					<h3>Job Type</h3>
					<div class="switches-list">
						<div class="switch-container">
							<label class="switch">
                                <input type="checkbox"/>
                                    <span class="switch-button"></span> Freelance</label>
						</div>

						<div class="switch-container">
							<label class="switch">
                                <input type="checkbox"/><span class="switch-button"></span> Full Time</label>
						</div>

						<div class="switch-container">
							<label class="switch">
                            <input type="checkbox"/><span class="switch-button"></span> Part Time</label>
						</div>

						<div class="switch-container">
							<label class="switch">
                            <input type="checkbox"/><span class="switch-button"></span> Internship</label>
						</div>
						<div class="switch-container">
							<label class="switch">
                            <input type="checkbox"/><span class="switch-button"></span> Temporary</label>
						</div>
					</div>

				</div>

				
				<div class="sidebar-widget">
					<h3>Salary</h3>
					<div class="margin-top-55"></div>
                    
                    <input class="range-slider" type="text" value="" 
                    data-slider-currency="$" data-slider-min="1500" data-slider-max="15000" 
                    data-slider-step="100" data-slider-value="[1500,15000]"/>
				</div>

				
				<div class="sidebar-widget">
					<h3>Tags</h3>

					<div class="tags-container">
						<div class="tag">
							<input type="checkbox" id="tag1"/>
							<label for="tag1">front-end dev</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag2"/>
							<label for="tag2">angular</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag3"/>
							<label for="tag3">react</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag4"/>
							<label for="tag4">vue js</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag5"/>
							<label for="tag5">web apps</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag6"/>
							<label for="tag6">design</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag7"/>
							<label for="tag7">wordpress</label>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>

			</div>
		</div>
		<div class="col-xl-9 col-lg-8 content-left-offset">

			<h3 class="page-title">Search Results</h3>

			<div class="notify-box margin-top-15">
				<div class="switch-container">
					<label class="switch">
                        <input type="checkbox"/><span class="switch-button"></span>
                        <span class="switch-text">Turn on email alerts for this search</span>
                    </label>
				</div>

				<div class="sort-by">
					<span>Sort by:</span>
					<select class="selectpicker hide-tick">
						<option>Relevance</option>
						<option>Newest</option>
						<option>Oldest</option>
						<option>Random</option>
					</select>
				</div>
			</div>
            {jobs.map((job,index) => {
            <div key ={index}class="listings-container compact-list-layout margin-top-35">
                <a href="single-job-page.html" 
                class="job-listing">	
                 <div class="job-listing-details">										
                    <div class="job-listing-description">
            <h3 class="job-listing-title">{job.title}</h3>
                            <div class="job-listing-footer"> 
                        <ul>                                            
            <li><i class="icon-material-outline-business"></i> {job.name}
            <div class="verified-badge" title="Verified Employer" data-tippy-placement="top"></div></li>
            <li><i class="icon-material-outline-location-on"></i> {job.location}</li>
            <li><i class="icon-material-outline-business-center"></i>{job.type}</li>
            <li><i class="icon-material-outline-access-time"></i> {job.date}</li>
                        </ul>
                    </div>
                </div>
                    
                            
                <span class="bookmark-icon"></span>
                </div>
               </a>
                                })}
			
                                
			{/*<!-- Pagination -->*/}
			<div class="clearfix"></div>
			<div class="row">
				<div class="col-md-12">
				
					<div class="pagination-container margin-top-60 margin-bottom-60">
						<nav class="pagination">
							<ul>
								<li class="pagination-arrow"><a href="#"><i class="icon-material-outline-keyboard-arrow-left"></i></a></li>
								<li><a href="#">1</a></li>
								<li><a href="#" class="current-page">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li class="pagination-arrow"><a href="#"><i class="icon-material-outline-keyboard-arrow-right"></i></a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			
            </div>
            </div>
	</div>
</div>

         </Fragment>
     )
   }
 }



export default JobsLayout
// <img src="images/company-logo-01.png" alt=""/>
/*
<div class="job-listing-company-logo">
                           
                        </div>	
                        */