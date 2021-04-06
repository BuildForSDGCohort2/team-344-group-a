import React, { Component } from 'react';

class ManageCandidates extends Component {
  render() {
    return (
      <>
        <div className="dashboard-headline">
				<h3>Manage Candidates</h3>
				<span className="margin-top-7">Job Applications for <a href={"/#"}>Full Stack PHP Developer</a></span>

				{/* <!-- Breadcrumbs --> */}
				<nav id="breadcrumbs" className="dark">
					<ul>
						<li><a href={"/#"}>Home</a></li>
						<li><a href={"/#"}>Dashboard</a></li>
						<li>Manage Candidates</li>
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
							<h3><i className="icon-material-outline-supervisor-account"></i> 3 Candidates</h3>
						</div>

						<div className="content">
							<ul className="dashboard-box-list">
								<li>
									{/* <!-- Overview --> */}
									<div className="freelancer-overview manage-candidates">
										<div className="freelancer-overview-inner">

											{/* <!-- Avatar --> */}
											<div className="freelancer-avatar">
												<div className="verified-badge"></div>
												<a href={"/#"}><img src="images/user-avatar-big-03.jpg" alt=""/></a>
											</div>

											{/* <!-- Name --> */}
											<div className="freelancer-name">
												<h4><a href={"/#"}>Sindy Forest <img className="flag" src="images/flags/au.svg" alt="" title="Australia" data-tippy-placement="top"/></a></h4>

												{/* <!-- Details --> */}
												<span className="freelancer-detail-item"><a href={"/#"}><i className="icon-feather-mail"></i> <span className="__cf_email__" data-cfemail="02716b6c667b42677a636f726e672c616d6f">[email&#160;protected]</span></a></span>
												<span className="freelancer-detail-item"><i className="icon-feather-phone"></i> (+61) 123-456-789</span>

												{/* <!-- Rating --> */}
												<div className="freelancer-rating">
													<div className="star-rating" data-rating="5.0"></div>
												</div>

												{/* <!-- Buttons --> */}
												<div className="buttons-to-right always-visible margin-top-25 margin-bottom-5">
													<a href={"/#"} className="button ripple-effect"><i className="icon-feather-file-text"></i> Download CV</a>
													<a href={"/#small-dialog"} className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail"></i> Send Message</a>
													<a href={"/#"} className="button gray ripple-effect ico" title="Remove Candidate" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
												</div>
											</div>
										</div>
									</div>
								</li>

								<li>
									{/* <!-- Overview --> */}
									<div className="freelancer-overview manage-candidates">
										<div className="freelancer-overview-inner">

											{/* <!-- Avatar --> */}
											<div className="freelancer-avatar">
												<a href={"/#"}><img src="images/user-avatar-placeholder.png" alt=""/></a>
											</div>

											{/* <!-- Name --> */}
											<div className="freelancer-name">
												<h4><a href={"/#"}>Sebastiano Piccio <img className="flag" src="images/flags/it.svg" alt="" title="Italy" data-tippy-placement="top"/></a></h4>
											

												{/* <!-- Details --> */}
												<span className="freelancer-detail-item"><a href={"/#"}><i className="icon-feather-mail"></i> <span className="__cf_email__" data-cfemail="e89b8d8a899b9c81898687a88d90898598848dc68b8785">[email&#160;protected]</span></a></span>
												<span className="freelancer-detail-item"><i className="icon-feather-phone"></i> (+39) 123-456-789</span>

												{/* <!-- Rating --> */}
												<br/>
												<span className="company-not-rated">Minimum of 3 votes required</span>

												{/* <!-- Buttons --> */}
												<div className="buttons-to-right always-visible margin-top-25 margin-bottom-5">
													<a href={"/#"} className="button ripple-effect"><i className="icon-feather-file-text"></i> Download CV</a>
													<a href={"/#small-dialog"} className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail"></i> Send Message</a>
													<a href={"/#"} className="button gray ripple-effect ico" title="Remove Candidate" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
												</div>
											</div>
										</div>
									</div>
								</li>

								<li>
									{/* <!-- Overview --> */}
									<div className="freelancer-overview manage-candidates">
										<div className="freelancer-overview-inner">

											{/* <!-- Avatar --> */}
											<div className="freelancer-avatar">
												<a href={"/#"}><img src="images/user-avatar-placeholder.png" alt=""/></a>
											</div>

											{/* <!-- Name --> */}
											<div className="freelancer-name">
												<h4><a href={"/#"}>Nikolay Azarov <img className="flag" src="images/flags/ru.svg" alt="" title="Russia" data-tippy-placement="top"/></a></h4>

												{/* <!-- Details --> */}
												<span className="freelancer-detail-item"><a href={"/#"}><i className="icon-feather-mail"></i> <span className="__cf_email__" data-cfemail="2e40474541424f576e4b564f435e424b004d4143">[email&#160;protected]</span></a></span>
												<span className="freelancer-detail-item"><i className="icon-feather-phone"></i> (+7) 123-456-789</span>

												{/* <!-- Rating --> */}
												<br/>
												<span className="company-not-rated">Minimum of 3 votes required</span>

												{/* <!-- Buttons --> */}
												<div className="buttons-to-right always-visible margin-top-25 margin-bottom-5">
													<a href={"/#"} className="button ripple-effect"><i className="icon-feather-file-text"></i> Download CV</a>
													<a href={"/#small-dialog"} className="popup-with-zoom-anim button dark ripple-effect"><i className="icon-feather-mail"></i> Send Message</a>
													<a href={"/#"} className="button gray ripple-effect ico" title="Remove Candidate" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
												</div>
											</div>
										</div>
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

export default ManageCandidates;