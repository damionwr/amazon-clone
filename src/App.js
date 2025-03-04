import React from 'react';

import './App.css';
import Header from "./Header";
import Home from "./Home";
import Menutwo from "./Menutwo";
import Checkout from "./Checkout";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {

  return (< Router >
    <div className="app" >
      <Switch >

        <Route path="/cheackout" >
          <Header />
          <Menutwo />
          <Checkout />
        </Route >

        <Route path="/login" >
          <h1 > Login </h1>
        </Route>

        <Route path="/" >

          <Header />
          <Menutwo />
          <Home />
        </Route >

      </Switch>
    </div >

  </Router>
  );
}

export default App;