import React from 'react';
import { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import PostData from '../Services /PostData';
import Footer from '../body-component/Footer';

class SignUp extends Component {

  constructor() {
    super(); 
    
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
      incorrectPass: false,
      passConfirmed: true,
      freelancer: false,
      employer: false,
      registering: false,
      token: '',
      registered:  false
    } 

    this.NameHandler = this.NameHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.repeatPasswordHandler = this.repeatPasswordHandler.bind(this);
    this.register = this.register.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  NameHandler(e) {
   this.setState({
    [e.target.name]: e.target.value
   }) 
  }

  emailHandler(e) {
    this.setState({
      email: e.target.value
    })
  }

  passwordHandler(e) { 
    if (e.target.value.length >= 8) {
      this.setState({
        password: e.target.value,
        incorrectPass: false
      }) 
    } else {
      this.setState({
        incorrectPass: true
      })
    }
  }

  repeatPasswordHandler(e) {
    this.setState({
      confirmPassword: e.target.value,
    })  
  }

  register() {
    let newUser = {
      name: `${this.state.first_name} ${this.state.last_name}`,
      password: this.state.password,
      email: this.state.email
    };  
    console.log(newUser);
    PostData('register', newUser).then(result =>{
      let responseJSON = result;
      if(responseJSON.access_token) {
        sessionStorage.setItem('userData', responseJSON.access_token);
        this.setState({
          token: responseJSON.access_token,
          resigistered : true
        }); 
      }
    }) 
  }  

  submitForm(e) {
    if (this.state.password === this.state.confirmPassword) {
      this.setState({passConfirmed: true, registering: true});
      e.preventDefault();
      this.register();
    } else {this.setState({passConfirmed: false})}
  }

  render() {
    const { incorrectPass, passConfirmed, token, registered } = this.state;
    if(registered) {
      return <Redirect 
      to={{
        pathname: '/',
        state: {
          registered : registered, 
          token: token
        } 
      }}/> 
    }
    else { 
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

                <div className="login-submitForm-page">
                  {/* <!-- Welcome Text --> */}
                  <div className="welcome-text">
                    <h3 style={{fontSize: 26}}>Let's create your account!</h3>
                    <span>Already have an account? <Link to="/login">Log In!</Link></span>
                  </div>

                  {/* <!-- Form --> */}
                  <form method="post" id="submitForm-account-form">
                    
                    <div className="input-with-icon-left">
                      {/* <i className="icon-material-baseline-mail-outline"></i> */}
                      <input 
                      type="text" 
                      className="input-text with-border" 
                      name="first_name" 
                      id="first_name" 
                      placeholder="First Name"  
                      onChange={this.NameHandler}
                      required/>
                    </div>
                    <div className="input-with-icon-left">
                      {/* <i className="icon-material-baseline-mail-outline"></i> */}
                      <input 
                      type="text" 
                      className="input-text with-border" 
                      name="last_name" 
                      id="last_name" 
                      placeholder="Last Name"  
                      onChange={this.NameHandler}
                      required/>
                    </div>
                    <div className="input-with-icon-left">
                      <i className="icon-material-baseline-mail-outline"></i>
                      <input 
                      type="email" 
                      className="input-text with-border" 
                      name="email-submitForm" 
                      id="email-submitForm" 
                      placeholder="Email Address"  
                      onChange={this.emailHandler}
                      required/>
                    </div>

                    <div className="input-with-icon-left" title="Should be at least 8 characters long" data-tippy-placement="bottom">
                      <i className="icon-material-outline-lock"></i>
                      <input type="password" 
                      className="input-text with-border" name="password-submitForm" 
                      id="password-submitForm" 
                      placeholder="Password" 
                      onChange={this.passwordHandler}
                      style = {incorrectPass ? {border: '1px solid red'} : null}
                      required/> 
                    </div>

                    <div className="input-with-icon-left">
                      <i className="icon-material-outline-lock"></i>
                      <input type="password" 
                      className="input-text with-border" name="password-repeat-submitForm" id="password-repeat-submitForm" 
                      placeholder="Repeat Password"  
                      onChange={this.repeatPasswordHandler}
                      required/> 
                      { passConfirmed ? '' : <p style={{color:'red', fontFamily:'sans-serif', textAlign: 'center'}}>Passwords don't match!</p> } 
                    </div>
                    
                  </form>
                  
                  {/* <!-- Button --> */}
                  <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form" onClick={this.submitForm}>{this.state.registering ? 'Registering...' : 'Register'}<i className="icon-material-outline-arrow-right-alt"></i></button>
                  
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

export default SignUp;