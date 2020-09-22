import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'


function App() {
  return (
    <div className="App">
      <button><Link to = '/login'>Login</Link></button>
      <button><Link to = '/signup'>SignUp</Link></button>
      <header className="App-header">
       <Switch>
          <Route path = '/login'>
            <Login/>
          </Route>
          <Route path= '/signup'>
            <SignUp/>
          </Route>
        </Switch> 
      </header>
    </div>
  );
}

export default App;
