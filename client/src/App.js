import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import CreateVisitkort from "./components/createVisitkort.component"
import EditVisitkort from "./components/editVisitkort.component"
import DeleteVisitkort from "./components/deleteVisitkort.component"
import VisitkortList from "./components/visitkortList.component"


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Kodtest CGI - Visitkort</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Visitkort</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Visitkort</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
        <Route path="/" exact component={VisitkortList} />
        <Route path="/create" exact component={CreateVisitkort} />
        <Route path="/edit/:id" exact component={EditVisitkort} />
          <Route path="/delete/:id" exact component={DeleteVisitkort} />
          </div>
      </Router>
    );
  }
}

export default App;
