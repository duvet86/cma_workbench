import "typeface-roboto";
import "index.css";

import "rxjs/add/observable/of";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";

import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import Reboot from "material-ui/Reboot";

import App from "App";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import registerServiceWorker from "lib/registerServiceWorker";

import configureStore from "lib/configureStore";

const store = configureStore();

render(
  <Provider store={store}>
    <MuiThemeProvider theme={createMuiTheme()}>
      <Reboot />
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
