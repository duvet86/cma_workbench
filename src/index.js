import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";

import App from "./App";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import registerServiceWorker from "lib/registerServiceWorker";

import configureStore from "lib/configureStore";

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
