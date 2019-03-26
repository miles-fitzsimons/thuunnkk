import React, { Component } from "react";

import "./Header.scss";

class Header extends Component {
  render() {
    return <div className="Header">Header</div>;
  }
}

// const mapStateToProps = state => ({
//   items: state.items,
//   isLoading: state.isLoading,
//   error: state.error
// });

// const mapDispatchToProps = dispatch => ({
//   hydrateStore: items => dispatch(hydrateStore(items)),
//   fetchItems: () => dispatch(fetchItems())
// });

export default Header;
