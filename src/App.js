import React from 'react';
import './App.css';
import Circuit from './components/Hypodrome/Circuit';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/circuit" exact component={Circuit} />
          <Route path="/about" exact />
        </Switch>
      </div>
    </Router>
  )
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;