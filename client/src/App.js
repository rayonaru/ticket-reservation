import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GameCards from './components/GameCardEngine.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Start from './components/Start/Start.jsx';
import GameDetail from './components/GameDetailEngine.jsx';


function App() {
    return (
        <Router>
          <div className="App">
            <div className="Wrapper">
              <Header/>
              <Switch>
                <Route 
                  exact 
                  path='/' 
                  component={Start}
                />
                <Route 
                  exact
                  path='/games' 
                  component={GameCards}
                />
                <Route
                  exact 
                  path='/games/:id' 
                  component={GameDetail}
                />
              </Switch>
              <Footer/>
            </div>
          </div>
        </Router>
    );
};

export default App;
