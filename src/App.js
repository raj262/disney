import React from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
             <Route>
                <Login />
             </Route>
          </Switch>
      </Router>
     
    </div>
  );
}

export default App;
