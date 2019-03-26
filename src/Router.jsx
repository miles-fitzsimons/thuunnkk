import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  MemoryRouter
} from "react-router-dom";

import App from "./App";

import Page2 from "./Page2";

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <MemoryRouter>
      <div>
        {/* <div style={{ display: "none" }}>
          <Link to="/">App</Link>
          <Link to="/page2/">Page 2</Link>
          <Link to="/users/">Users</Link>
        </div> */}
        <Route path="/" exact component={App} />
        <Route path="/page2/" component={Page2} />
        <Route path="/users/" component={Users} />
      </div>
    </MemoryRouter>
  );
}

export default AppRouter;
