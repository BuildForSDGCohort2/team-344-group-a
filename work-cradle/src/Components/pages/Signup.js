import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  render() {
    return(
      <>
      <div id="titlebar" className="gradient">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
      
              <h2>Register</h2>
      
              {/* <!-- Breadcrumbs --> */}
              <nav id="breadcrumbs" className="dark">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li>Register</li>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-5 offset-xl-3">

            <div className="login-register-page">
              {/* <!-- Welcome Text --> */}
              <div className="welcome-text">
                <h3 style={{fontSize: 26}}>Let's create your account!</h3>
                <span>Already have an account? <Link to="/login">Log In!</Link></span>
              </div>

              {/* <!-- Account Type --> */}
              <div className="account-type">
                <div>
                  <input type="radio" name="account-type-radio" id="freelancer-radio" className="account-type-radio" checked/>
                  <label for="freelancer-radio" className="ripple-effect-dark"><i className="icon-material-outline-account-circle"></i> Freelancer</label>
                </div>

                <div>
                  <input type="radio" name="account-type-radio" id="employer-radio" className="account-type-radio"/>
                  <label for="employer-radio" className="ripple-effect-dark"><i className="icon-material-outline-business-center"></i> Employer</label>
                </div>
              </div>
                
              {/* <!-- Form --> */}
              <form method="post" id="register-account-form">
                <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline"></i>
                  <input type="text" className="input-text with-border" name="emailaddress-register" id="emailaddress-register" placeholder="Email Address" required/>
                </div>

                <div className="input-with-icon-left" title="Should be at least 8 characters long" data-tippy-placement="bottom">
                  <i className="icon-material-outline-lock"></i>
                  <input type="password" className="input-text with-border" name="password-register" id="password-register" placeholder="Password" required/>
                </div>

                <div className="input-with-icon-left">
                  <i className="icon-material-outline-lock"></i>
                  <input type="password" className="input-text with-border" name="password-repeat-register" id="password-repeat-register" placeholder="Repeat Password" required/>
                </div>
              </form>
              
              {/* <!-- Button --> */}
              <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form">Register <i className="icon-material-outline-arrow-right-alt"></i></button>
              
              {/* <!-- Social Login --> */}
              <div className="social-login-separator"><span>or</span></div>
              <div className="social-login-buttons">
                <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Register via Facebook</button>
                <button className="google-login ripple-effect"><i className="icon-brand-google-plus-g"></i> Register via Google+</button>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* <!-- Spacer --> */}
      <div className="margin-top-70"></div>
      {/* <!-- Spacer / End--> */}
      </>
    )
  }
}

export default SignUp;