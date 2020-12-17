import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GameCards from './components/GameCardEngine.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Start from './components/Start/Start.jsx';


function App() {
    return (
        <Router>
          <div className="App">
            <div className="Wrapper">
              <Header/>
              <Switch>
                <Route path='/' exact component={Start}/>
                <Route path='/home' component={GameCards}/>
              </Switch>
              <Footer/>
            </div>
          </div>
        </Router>
    );
};

export default App;
