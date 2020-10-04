import React, {Component} from 'react';

class Freelancers extends Component {
  render() {
    return(
      <>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="sidebar-container">
                
                {/* <!-- Location --> */}
                <div className="sidebar-widget">
                  <h3>Location</h3>
                  <div className="input-with-icon">
                    <div id="autocomplete-container">
                      <input id="autocomplete-input" type="text" placeholder="Anywhere"/>
                    </div>
                    <i className="icon-material-outline-location-on"></i>
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

                {/* <!-- Keywords --> */}
                <div className="sidebar-widget">
                  <h3>Keywords</h3>
                  <div className="keywords-container">
                    <div className="keyword-input-container">
                      <input type="text" className="keyword-input" placeholder="e.g. task title"/>
                      <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
                    </div>
                    <div className="keywords-list">
                    {/* <!-- keywords go here --> */}
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>


                {/* <!-- Hourly Rate --> */}
                <div className="sidebar-widget">
                  <h3>Hourly Rate</h3>
                  <div className="margin-top-55"></div>

                  {/* <!-- Range Slider --> */}
                  <input className="range-slider" type="text" value="" data-slider-currency="$" data-slider-min="10" data-slider-max="250" data-slider-step="5" data-slider-value="[10,250]"/>
                </div>

                {/* <!-- Tags --> */}
                <div className="sidebar-widget">
                  <h3>Skills</h3>

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

                  {/* <!-- More Skills --> */}
                  <div className="keywords-container margin-top-20">
                    <div className="keyword-input-container">
                      <input type="text" className="keyword-input" placeholder="add more skills"/>
                      <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
                    </div>
                    <div className="keywords-list">
                    {/* <!-- keywords go here --> */}
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
                <div className="clearfix"></div>

              </div>
            </div>
            <div className="col-xl-9 col-lg-8 content-left-offset">

              <h3 className="page-title">Search Results</h3>

              <div className="notify-box margin-top-15">
                <div className="switch-container">
                  <label className="switch"><input type="checkbox"/><span className="switch-button"></span><span className="switch-text">Turn on email alerts for this search</span></label>
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
              
              {/* <!-- Freelancers List Container --> */}
              <div className="freelancers-container freelancers-grid-layout margin-top-35">
                
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
                        <a href={"/#"}><img src="images/user-avatar-big-01.jpg" alt=""/></a>
                      </div>

                      {/* <!-- Name --> */}
                      <div className="freelancer-name">
                        <h4><a href={""}>Tom Smith <img className="flag" src="images/flags/gb.svg" alt="" title="United Kingdom" data-tippy-placement="top"/></a></h4>
                        <span>UI/UX Designer</span>
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
                        <li>Location <strong><i className="icon-material-outline-location-on"></i> London</strong></li>
                        <li>Rate <strong>$60 / hr</strong></li>
                        <li>Job Success <strong>95%</strong></li>
                      </ul>
                    </div>
                    <a href={""} className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
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
                        <a href={"/#"}><img src="images/user-avatar-big-02.jpg" alt=""/></a>
                      </div>

                      {/* <!-- Name --> */}
                      <div className="freelancer-name">
                        <h4><a href={""}>David Peterson <img className="flag" src="images/flags/de.svg" alt="" title="Germany" data-tippy-placement="top"/></a></h4>
                        <span>iOS Expert + Node Dev</span>
                      </div>

                      {/* <!-- Rating --> */}
                      <div className="freelancer-rating">
                        <div className="star-rating" data-rating="4.2"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* <!-- Details --> */}
                  <div className="freelancer-details">
                    <div className="freelancer-details-list">
                      <ul>
                        <li>Location <strong><i className="icon-material-outline-location-on"></i> Berlin</strong></li>
                        <li>Rate <strong>$40 / hr</strong></li>
                        <li>Job Success <strong>88%</strong></li>
                      </ul>
                    </div>
                    <a href={""} className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
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
                        <a href={""}><img src="images/user-avatar-placeholder.png" alt=""/></a>
                      </div>

                      {/* <!-- Name --> */}
                      <div className="freelancer-name">
                        <h4><a href={""}>Marcin Kowalski <img className="flag" src="images/flags/pl.svg" alt="" title="Poland" data-tippy-placement="top"/></a></h4>
                        <span>Front-End Developer</span>
                      </div>

                      {/* <!-- Rating --> */}
                      <span className="company-not-rated margin-bottom-5">Minimum of 3 votes required</span>

                    </div>
                  </div>
                  
                  {/* <!-- Details --> */}
                  <div className="freelancer-details">
                    <div className="freelancer-details-list">
                      <ul>
                        <li>Location <strong><i className="icon-material-outline-location-on"></i> Warsaw</strong></li>
                        <li>Rate <strong>$50 / hr</strong></li>
                        <li>Job Success <strong>100%</strong></li>
                      </ul>
                    </div>
                    <a href={""} className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
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
                        <a href={""}><img src="images/user-avatar-big-03.jpg" alt=""/></a>
                      </div>

                      {/* <!-- Name --> */}
                      <div className="freelancer-name">
                        <h4><a href={"/#"}>Sindy Forest <img className="flag" src="images/flags/au.svg" alt="" title="Australia" data-tippy-placement="top"/></a></h4>
                        <span>Magento Certified Developer</span>
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
                        <li>Location <strong><i className="icon-material-outline-location-on"></i> Brisbane</strong></li>
                        <li>Rate <strong>$70 / hr</strong></li>
                        <li>Job Success <strong>100%</strong></li>
                      </ul>
                    </div>
                    <a href={""} className="button button-sliding-icon ripple-effect">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
                  </div>
                </div>
                {/* <!-- Freelancer / End --> */}
          
              </div>
              {/* <!-- Freelancers Container / End --> */}


              {/* <!-- Pagination --> */}
              <div className="clearfix"></div>
              <div className="row">
                <div className="col-md-12">
                  {/* <!-- Pagination --> */}
                  <div className="pagination-container margin-top-40 margin-bottom-60">
                    <nav className="pagination">
                      <ul>
                        <li className="pagination-arrow"><a href={"/#"}className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
                        <li><a href={"/#"} className="ripple-effect">1</a></li>
                        <li><a href={"/#"} className="current-page ripple-effect">2</a></li>
                        <li><a href={"/#"} className="ripple-effect">3</a></li>
                        <li><a href={"/#"} className="ripple-effect">4</a></li>
                        <li className="pagination-arrow"><a href={"/#"} className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              {/* <!-- Pagination / End --> */}

            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Freelancers;