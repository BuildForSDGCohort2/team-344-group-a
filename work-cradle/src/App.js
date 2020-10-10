import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//constants  
import PageHeader from './Components/body-components/PageHeader';

// pages
import Base from './Components/pages/Base';
import Dashboard from './Components/pages/Dashboard/Dashboard';

const Homepage = lazy(() => import('./Components/pages/Homepage')); 
const Jobs = lazy(() => import('./Components/pages/Jobs'));
const Companies = lazy(() => import('./Components/pages/Companies'));
const Freelancers = lazy(() => import('./Components/pages/Freelancers'));
const Login = lazy(() => import('./Components/pages/Login'));
const SignUp = lazy(() => import('./Components/pages/Signup'));
const Messages =  lazy(() => import('./Components/pages/Dashboard/Messages'));


class App extends React.Component{
  render () {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Base>
            <Switch>
              <Route exact path='/' render={props => <Homepage {...props}/>}/>
              <div id="wrapper">
                <PageHeader/> 
                <Route exact path='/jobs' component={Jobs}/>
                <Route exact path='/companies' component={Companies}/>
                <Route exact path='/freelancers' component={Freelancers}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={SignUp}/>  
                <Route exact path='/user/dashboard' component={Dashboard}/>
                <Route exact path='/user/dashboard/messages' component={Messages}/>
              </div> 
            </Switch>
          </Base>
        </Suspense>
      </Router>
    )
  }
}

export default App;
