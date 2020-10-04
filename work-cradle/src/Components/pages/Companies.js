import React from 'react';
import { Component } from 'react';
import Footer from '../body-component/Footer';

class Companies extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="letters-list">
                <a href={"/#"} className="current">A</a>
                <a href={"/#"}>B</a>
                <a href={"/#"}>C</a>
                <a href={"/#"}>D</a>
                <a href={"/#"}>E</a>
                <a href={"/#"}>F</a>
                <a href={"/#"}>G</a>
                <a href={"/#"}>H</a>
                <a href={"/#"}>I</a>
                <a href={"/#"}>J</a>
                <a href={"/#"}>K</a>
                <a href={"/#"}>L</a>
                <a href={"/#"}>M</a>
                <a href={"/#"}>N</a>
                <a href={"/#"}>O</a>
                <a href={"/#"}>P</a>
                <a href={"/#"}>Q</a>
                <a href={"/#"}>R</a>
                <a href={"/#"}>S</a>
                <a href={"/#"}>T</a>
                <a href={"/#"}>U</a>
                <a href={"/#"}>V</a>
                <a href={"/#"}>W</a>
                <a href={"/#"}>X</a>
                <a href={"/#"}>Y</a>
                <a href={"/#"}>Z</a>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="companies-list">
                <a href={""} className="company">
                  <div className="company-inner-alignment">
                    <span className="company-logo"><img src="images/company-logo-placeholder.png" alt=""/></span>
                    <h4>Acra</h4>
                    <div className="star-rating" data-rating="3.5"></div>
                  </div>
                </a>
                <a href={""} className="company">
                  <div className="company-inner-alignment">
                    <span className="company-logo"><img src="images/browse-companies-02.png" alt=""/></span>
                    <h4>Acue</h4>
                    <div className="star-rating" data-rating="5.0"></div>
                  </div>
                </a>
                <a href={""} className="company">
                  <div className="company-inner-alignment">
                    <span className="company-logo"><img src="images/browse-companies-04.png" alt=""/></span>
                    <h4>Acorta</h4>
                    <span className="company-not-rated">Minimum of 3 votes required</span>
                  </div>
                </a>
                <a href={""} className="company">
                  <div className="company-inner-alignment">
                    <span className="company-logo"><img src="images/company-logo-placeholder.png" alt=""/></span>
                    <h4>Acuneol</h4>
                    <span className="company-not-rated">Minimum of 3 votes required</span>
                  </div>
                </a>
                <a href={""} className="company">
                  <div className="company-inner-alignment">
                    <span className="company-logo"><img src="images/browse-companies-03.png" alt=""/></span>
                    <h4>Acodia</h4>
                    <div className="star-rating" data-rating="4.9"></div>
                  </div>
                </a>
                <a href={""} className="company">
                  <div className="company-inner-alignment">
                    <span className="company-logo"><img src="images/company-logo-placeholder.png" alt=""/></span>
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
        {/* <!-- Spacer End--> */}

        <Footer />
      </>

    )
  }
}

export default Companies;