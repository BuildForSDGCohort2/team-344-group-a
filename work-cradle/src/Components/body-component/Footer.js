import React from 'react';
import { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <>
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
                        <div className="col-xl-12" style={{position: 'relative', left: '25vw'}}>
                          © 2020 <strong>WorkCradle</strong>. All Rights Reserved.
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  {/* <!-- Footer Rows Container / End --> */}
                </div>
              </div>
            </div>
          </div>

        </div>
      </>
    )
  }
}

export default Footer;