import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {

  constructor(props) {
    super(props); 
    
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      incorrectPass: false,
      passConfirmed: true,
    } 

    this.NameHandler = this.NameHandler.bind(this);
    this.repeatPasswordHandler = this.repeatPasswordHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.register = this.register.bind(this);
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

  passAlert = () => <p style={{color:'red', fontFamily:'sans-serif', paddingLeft: 20}}>Passwords don't match!</p>

  register() { 
    return (
      !(this.state.confirmPassword === this.state.password) ?
        this.setState({passConfirmed:false}) 
        : () => {
          const userDetails = {
            firsName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
          } 
          fetch('url', {
            method: 'post',
            body: JSON.stringify(
              userDetails
            ), 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            } 
          }) 
          .then(response => {
            response.json().then(resp => {
              console.log(resp)
            })
          })
        } 

    )

  }

  render() {
    const { incorrectPass, passConfirmed } = this.state;

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
                  {/* <i className="icon-material-baseline-mail-outline"></i> */}
                  <input 
                  type="text" 
                  className="input-text with-border" 
                  name="firstName" 
                  id="fist-name" 
                  placeholder="First Name"  
                  onChange={this.NameHandler}
                  required/>
                </div>
                <div className="input-with-icon-left">
                  {/* <i className="icon-material-baseline-mail-outline"></i> */}
                  <input 
                  type="text" 
                  className="input-text with-border" 
                  name="lastName" 
                  id="last-name" 
                  placeholder="last Name"  
                  onChange={this.NameHandler}
                  required/>
                </div>
                <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline"></i>
                  <input 
                  type="email" 
                  className="input-text with-border" 
                  name="email-register" 
                  id="email-register" 
                  placeholder="Email Address"  
                  onChange={this.emailHandler}
                  required/>
                </div>

                <div className="input-with-icon-left" title="Should be at least 8 characters long" data-tippy-placement="bottom">
                  <i className="icon-material-outline-lock"></i>
                  <input type="password" className="input-text with-border" name="password-register" id="password-register" placeholder="Password" required onChange={this.passwordHandler}
                  style = {incorrectPass ? {border: '1px solid red'} : null}
                  /> 
                </div>

                <div className="input-with-icon-left">
                  <i className="icon-material-outline-lock"></i>
                  <input type="password" className="input-text with-border" name="password-repeat-register" id="password-repeat-register" placeholder="Repeat Password" required onChange={this.repeatPasswordHandler}
                  /> 
                  { !passConfirmed ? this.passAlert() : '' }
                </div>
                
              </form>
              
              {/* <!-- Button --> */}
              <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form" onClick={this.register}>Register <i className="icon-material-outline-arrow-right-alt"></i></button>
              
              {/* <!-- Social Login --> */}
              {/* <div className="social-login-separator"><span>or</span></div>
              <div className="social-login-buttons">
                <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Register via Facebook</button>
                <button className="google-login ripple-effect"><i className="icon-brand-google-plus-g"></i> Register via Google+</button>
              </div> */}
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