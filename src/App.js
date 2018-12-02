import React, { Component } from "react";

import { hot } from "react-hot-loader";
import "../styles/styles.css";

import NavContainer from "./NavContainer";
import RouterContainer from './RouterContainer';
import { BrowserRouter, withRouter } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavContainer className="sticky"/>
          <RouterContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;