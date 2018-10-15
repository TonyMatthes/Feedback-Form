import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from '../structural-components/Header/Header'
import Feeling from '../views/Feeling/Feeling'
import Understanding from '../views/Understanding/Understanding'
import Supported from '../views/Supported/Supported'
import Comments from '../views/Comments/Comments'
import NewFeedback from '../views/NewFeedback/NewFeedback'
import Admin from '../views/Admin/Admin'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Feeling} />
          <Route exact path='/2' component={Understanding} />
          <Route exact path='/3' component={Supported} />
          <Route exact path='/4' component={Comments} />
          <Route exact path='/5' component={NewFeedback} />
          <Route exact path='/admin' component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
