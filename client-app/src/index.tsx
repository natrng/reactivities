import React from "react";
import ReactDOM from "react-dom";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import ScrollToTop from "./app/layout/ScrollToTop";
import {createBrowserHistory} from 'history';
import 'react-toastify/dist/ReactToastify.min.css';

export const history = createBrowserHistory();

ReactDOM.render(
  // we use this Router to use it in our agent.ts file, so we can use history.push(~~~) in our exception handeling (line 8)
  <Router history={history}> 
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
