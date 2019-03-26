import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { reducer } from "./reducers/reducers";
import thunk from "redux-thunk";

import Router from "./Router";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
