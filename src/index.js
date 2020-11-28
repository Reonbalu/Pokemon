import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Pokemon from "./components/Pokemon";
import Images from "./components/Images";
import Test from "./components/Test";
import AsyncHook from "./components/AsyncHook";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/Pokemon">
          <Pokemon />
        </Route>
        <Route path="/Images">
          <Images />
        </Route>
        <Route path="/Test">
          <Test />
        </Route>
        <Route path="/AsyncHook">
          <AsyncHook />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
