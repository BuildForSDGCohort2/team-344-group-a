import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//constants  
import PageHeader from './Components/body-component/PageHeader';
// pages
import Base from './Components/pages/Base';
import Homepage from './Components/pages/Homepage';
import Companies from './Components/pages/Companies';
import Jobs from './Components/pages/Jobs';
import Freelancers from './Components/pages/Freelancers';
import Login from './Components/pages/Login';
import SignUp from './Components/pages/Signup';
import Dashboard from './Components/pages/Dashboard/Dashboard';

class App extends React.Component{
  render () {
    return (
      <Router>
        <Base>
          <Switch>
            <Route exact path='/' render={props => <Homepage {...props}/>}/>
            <div id="wrapper">
              <PageHeader/> 
              <Route path='/jobs' component={Jobs}/>
              <Route path='/companies' component={Companies}/>
              <Route path='/freelancers' component={Freelancers}/>
              <Route path='/login' component={Login}/>
              <Route path='/signup' component={SignUp}/>  
              <Route path='/user/dashboard' component={Dashboard}/>
            </div>
          </Switch>
        </Base>
      </Router>
    )
  }
}

export default App;
