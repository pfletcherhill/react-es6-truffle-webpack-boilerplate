import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class Home extends Component {
  render() {
    const { currentAccount } = this.props.store;
    return <div>Current account: {currentAccount}</div>;
  }
}
