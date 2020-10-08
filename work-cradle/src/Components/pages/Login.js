import React from 'react';
import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PostData from '../Services /PostData';
import Footer from '../body-components/Footer';

class Login extends Component {
  constructor(){
    super();
    this.state= {
      emailAddress: '',
      password: '',
      invalidLoginDetails: false,
      loggedIn: false,
      userToken: '',
      isLoggingIn: false
    }

    this.login = this.login.bind(this);
    this.grabInputOnChange = this.grabInputOnChange.bind(this);
  }

  login(e) {
    e.preventDefault();
    this.setState({isLoggingIn: true})
    const loginDetails = {
      email: this.state.emailAddress,
      password: this.state.password
    };
    console.log(loginDetails);
    if((loginDetails.emailAddress !== '') && (loginDetails.passsword !== '')) {
      PostData('login', loginDetails).then(result =>{
        let responseJSON = result;
        if(responseJSON.access_token) {
          sessionStorage.setItem('userData', responseJSON.access_token);
          this.setState({
            loggedIn:true, userToken: responseJSON.access_token
          })
        }
      });
    } else {
        this.setState({
          isLoggingIn: false,
          invalidLoginDetails: true,
        })
      }
  }

  grabInputOnChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    if(this.state.loggedIn){
      return (<Redirect 
            to={{
            pathname: '/',
            state: { 
              token: this.state.userToken, 
              loggedIn: true 
            }  
          }}
        />
      ) 
    } 
    else {
      return(
        <>
          <div id="titlebar" className="gradient">
            <div className="container">
              <div className="row">
                <div className="col-md-12">

                  <h2>Log In</h2>

                  {/* <!-- Breadcrumbs --> */}
                  <nav id="breadcrumbs" className="dark">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li>Log in</li>
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
                    <h3>We're glad to see you again!</h3>
                    <span>Don't have an account? <Link to="/signup">Sign Up!</Link></span>
                  </div>

                  {this.state.invalidLoginDetails ?  <p style={{color: 'red', textAlign: 'center'}}>Invalid email or password</p> : '' }

                  {/* <!-- Form --> */}
                  <form method="post" id="login-form">
                    <div className="input-with-icon-left">
                      <i className="icon-material-baseline-mail-outline"></i>
                      <input type="text" className="input-text with-border" name="emailAddress" id="emailaddress" placeholder="Email Address" onChange={this.grabInputOnChange} required/> 
                    </div>

                    <div className="input-with-icon-left">
                      <i className="icon-material-outline-lock"></i>
                      <input type="password" className="input-text with-border" name="password" id="password" placeholder="Password" onChange={this.grabInputOnChange} required/>
                    </div>
                  
                  </form>
                  
                  {/* <!-- Button --> */}
                  <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form" onClick={this.login}>{this.state.isLoggingIn ? 'Logging in' : 'Log In'}<i className={this.state.isLoggingIn ? '' : "icon-material-outline-arrow-right-alt"}></i></button>
                  
                </div>

              </div>
            </div>
          </div>

          {/* <!-- Spacer --> */}
          <div className="margin-top-70"></div>
          {/* <!-- Spacer / End--> */}

          <Footer />
        </>
      )
    }  
  }
}

export default Login;