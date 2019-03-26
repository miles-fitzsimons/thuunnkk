import React from "react";
import { withRouter } from "react-router-dom";

import "./Button.scss";

const Button = withRouter(({ history }) => (
  <div
    className="button"
    onClick={() => {
      history.push("/page2/");
    }}
  >
    Next Page
  </div>
));

export default Button;

// import { withRouter } from 'react-router-dom'
// divthis also works with reactdiv-native

// const Button = withRouter(({ history }) => (
//   <button
//     type='button'
//     onClick={() => { history.push('/new-location') }}
//   >
//     Click Me!
//   </button>
// ))
