import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, Action } from "redux";
import { fetchItems } from "./actions";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import List from "./components/List/List";
import Header from "./components/Header/Header";

import * as actions from "./actions";

import "./App.scss";

export interface Props {
  error: string;
  isLoading: boolean;
  items: [];
  fetchItems: () => void;
}

interface State {
  items: [];
  isLoading: boolean;
  error: string;
}

class App extends Component<Props, State> {
  componentWillMount = () => {
    this.props.fetchItems();
  };
  renderMain = () => {
    if (this.props.error) {
      return <h1>Loading</h1>;
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
    return (
      <div className="app">
        <Header />
        <main className="main">{this.renderMain()}</main>
      </div>
    );
  }
}

const mapStateToProps = ({ items, isLoading, error }: State) => ({
  items,
  isLoading,
  error
});

// export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
//   return {
//     onIncrement: () => dispatch(actions.incrementEnthusiasm()),
//     onDecrement: () => dispatch(actions.decrementEnthusiasm()),
//   }
// }

type MyThunkDispatch = ThunkDispatch<State, {}, Action>;

const mapDispatchToProps = (dispatch: MyThunkDispatch) => ({
  fetchItems: () => dispatch(actions.fetchItems())
});

// const mapDispatchToProps = (dispatch: any) => ({
//   fetchItems: () => dispatch(fetchItems())
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
