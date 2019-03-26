import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItems } from "./actions/actions";

import List from "./List";
import Header from "./Header";
import Button from "./Button";

import "./App.scss";

class App extends Component {
  componentWillMount = () => {
    console.log("COMP MOUNT", this.props.history.push);
    this.props.fetchItems(this.props.history.push);
  };
  renderMain = () => {
    if (this.props.error) {
      return <h1>{this.props.error}</h1>;
    }

    if (this.props.isLoading) {
      return (
        <div className="lds-ellipsis">
          <div className="a" />
          <div className="a" />
          <div className="a" />
          <div className="a" />
        </div>
      );
    }

    return <List items={this.props.items} />;
  };

  render() {
    console.log("PROP", this.props);
    return (
      <div className="app">
        <Header />
        <main className="main">
          {this.renderMain()}
          <Button />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  isLoading: state.isLoading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
