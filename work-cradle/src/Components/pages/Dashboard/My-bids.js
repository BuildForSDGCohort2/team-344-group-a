import React, { Component } from 'react';
 
class MyBids extends Component {
  render() {
    return (
      <>
        <div className="dashboard-headline">
          <h3>My Active Bids</h3>

          {/* <!-- Breadcrumbs --> */}
          <nav id="breadcrumbs" className="dark">
            <ul>
              <li><a href={"/#"}>Home</a></li>
              <li><a href={"/#"}>Dashboard</a></li>
              <li>My Active Bids</li>
            </ul>
          </nav>
			  </div>
	
			  {/* <!-- Row --> */}
        <div className="row">

          {/* <!-- Dashboard Box --> */}
          <div className="col-xl-12">
            <div className="dashboard-box margin-top-0">

              {/* <!-- Headline --> */}
              <div className="headline">
                <h3><i className="icon-material-outline-gavel"></i> Bids List</h3>
              </div>

              <div className="content">
                <ul className="dashboard-box-list">
                  <li>
                    {/* <!-- Job Listing --> */}
                    <div className="job-listing width-adjustment">

                      {/* <!-- Job Listing Details --> */}
                      <div className="job-listing-details">

                        {/* <!-- Details --> */}
                        <div className="job-listing-description">
                          <h3 className="job-listing-title"><a href={"/#"}>WordPress Guru Needed</a></h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* <!-- Task Details --> */}
                    <ul className="dashboard-task-info">
                      <li><strong>$40</strong><span>Hourly Rate</span></li>
                      <li><strong>2 Days</strong><span>Delivery Time</span></li>
                    </ul>

                    {/* <!-- Buttons --> */}
                    <div className="buttons-to-right always-visible">
                      <a href={"/#small-dialog"} className="popup-with-zoom-anim button dark ripple-effect ico" title="Edit Bid" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
                      <a href={"/#"} className="button red ripple-effect ico" title="Cancel Bid" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                    </div>
                  </li>
                  <li>
                    {/* <!-- Job Listing --> */}
                    <div className="job-listing width-adjustment">

                      {/* <!-- Job Listing Details --> */}
                      <div className="job-listing-details">

                        {/* <!-- Details --> */}
                        <div className="job-listing-description">
                          <h3 className="job-listing-title"><a href={"/#"}>Build me a website in Angular JS</a></h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* <!-- Task Details --> */}
                    <ul className="dashboard-task-info">
                      <li><strong>$2,550</strong><span>Fixed price</span></li>
                      <li><strong>14 Days</strong><span>Delivery Time</span></li>
                    </ul>

                    {/* <!-- Buttons --> */}
                    <div className="buttons-to-right always-visible">
                      <a href={"/#small-dialog"} className="popup-with-zoom-anim button dark ripple-effect ico" title="Edit Bid" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
                      <a href={"/#"} className="button red ripple-effect ico" title="Cancel Bid" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                    </div>
                  </li>
                  <li>
                    {/* <!-- Job Listing --> */}
                    <div className="job-listing width-adjustment">

                      {/* <!-- Job Listing Details --> */}
                      <div className="job-listing-details">

                        {/* <!-- Details --> */}
                        <div className="job-listing-description">
                          <h3 className="job-listing-title"><a href={"/#"}>Android and iOS React Appe</a></h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* <!-- Task Details --> */}
                    <ul className="dashboard-task-info">
                      <li><strong>$3,000</strong><span>Fixed Price</span></li>
                      <li><strong>21 Days</strong><span>Delivery Time</span></li>
                    </ul>

                    {/* <!-- Buttons --> */}
                    <div className="buttons-to-right always-visible">
                      <a href={"/#small-dialog"} className="popup-with-zoom-anim button dark ripple-effect ico" title="Edit Bid" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
                      <a href={"/#"} className="button red ripple-effect ico" title="Cancel Bid" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                    </div>
                  </li>
                  <li>
                    {/* <!-- Job Listing --> */}
                    <div className="job-listing width-adjustment">

                      {/* <!-- Job Listing Details --> */}
                      <div className="job-listing-details">

                        {/* <!-- Details --> */}
                        <div className="job-listing-description">
                          <h3 className="job-listing-title"><a href={"/#"}>Write Simple Python Script</a></h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* <!-- Task Details --> */}
                    <ul className="dashboard-task-info">
                      <li><strong>$30</strong><span>Hourly Rate</span></li>
                      <li><strong>1 Day</strong><span>Delivery Time</span></li>
                    </ul>

                    {/* <!-- Buttons --> */}
                    <div className="buttons-to-right always-visible">
                      <a href={"/#small-dialog"} className="popup-with-zoom-anim button dark ripple-effect ico" title="Edit Bid" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
                      <a href={"/#"} className="button red ripple-effect ico" title="Cancel Bid" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
          </div>

        </div>
      </>
    )
  }
}

export default MyBids;