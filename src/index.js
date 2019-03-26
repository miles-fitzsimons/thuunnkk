import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { reducer } from "./reducers/reducers";
import thunk from "redux-thunk";
import { routerMiddleware, push } from "react-router-redux";

import Router from "./Router";

const middleware = routerMiddleware(browserHistory);

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk, middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

// // Apply the middleware to the store
// const store = createStore(
//   reducers,
//   applyMiddleware(middleware)
// )

// // Dispatch from anywhere like normal.
// store.dispatch(push('/foo'))
