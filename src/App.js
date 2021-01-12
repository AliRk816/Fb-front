import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Switch , Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';





function App() {
  return (
    <div className="app">
      <Router>   
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path = '/home'  component = {Home}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
