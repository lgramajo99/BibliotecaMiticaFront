import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Inicio from './components/common/Inicio';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route><Inicio></Inicio></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
