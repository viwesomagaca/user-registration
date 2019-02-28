import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";

export default class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    )
  }
};