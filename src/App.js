import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Signup from './pages/Signup.js';
import {Weather} from './pages/Weather';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Weather} />
        <Route path={'/Signup'} component={Signup} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
