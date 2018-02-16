import "index.css";
import "typeface-roboto";

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
import configureTheme from "lib/configureTheme";
import loadAsync from "lib/loadAsync";

import { MuiThemeProvider } from "material-ui/styles";
import Reboot from "material-ui/Reboot";

import AnonymousRoute from "routes/AnonymousRoute";
import AuthenticatedRoute from "routes/AuthenticatedRoute";

const store = configureStore();
const theme = configureTheme();

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
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
            path="/"
            component={loadAsync(() => import("app/App"))}
          />
        </Switch>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
