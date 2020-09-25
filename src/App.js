import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/common/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </Router>
  );
}

export default App;
