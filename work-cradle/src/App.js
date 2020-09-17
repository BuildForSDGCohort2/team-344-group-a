import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//constants  
import PageHeader from './Components/body-component/PageHeader';
import Footer from './Components/body-component/Footer';

// pages
import Base from './Components/pages/Base';
import Homepage from './Components/pages/Homepage';
import Companies from './Components/pages/Companies';
import Jobs from './Components/pages/Jobs';


class App extends React.Component{
  render () {
    return (
      <Router>
        <Base>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <div id="wrapper">
              <PageHeader/>
              <Route path='/jobs' component={Jobs}/>
              <Route path='/companies' component={Companies}/>
              <Footer />
            </div>
          </Switch>
        </Base>
      </Router>
    )
  }
}

export default App;
