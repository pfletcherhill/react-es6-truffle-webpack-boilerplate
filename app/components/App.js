import React, { Component } from "react";
import { BrowserRouter, matchPath } from "react-router-dom";
import { Provider } from "mobx-react";
import Home from "./Home";

export default class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
  }
}
