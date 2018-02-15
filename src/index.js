import "typeface-roboto";
import "index.css";

import "rxjs/add/observable/of";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/observable/concat";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";

import history from "lib/history";
import registerServiceWorker from "lib/registerServiceWorker";
import configureStore from "lib/configureStore";
import loadAsync from "lib/loadAsync";

import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import Reboot from "material-ui/Reboot";

import AnonymousRoute from "routes/AnonymousRoute";
import AuthenticatedRoute from "routes/AuthenticatedRoute";

const store = configureStore();

render(
  <Provider store={store}>
    <MuiThemeProvider theme={createMuiTheme()}>
      <Reboot />
      <ConnectedRouter history={history}>
        <Switch>
          <AnonymousRoute
            path="/login"
            component={loadAsync(() =>
              import("login/components/LoginContainer")
            )}
          />
          <AuthenticatedRoute
            exact
            path="/"
            component={loadAsync(() => import("workbench/Workbench"))}
          />
        </Switch>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
