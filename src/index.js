import "index.css";
import "typeface-roboto";

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
import CssBaseline from "material-ui/CssBaseline";

import AnonymousRoute from "routes/AnonymousRoute";
import AuthenticatedRoute from "routes/AuthenticatedRoute";

const store = configureStore();
const theme = configureTheme();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <AnonymousRoute
            path="/login"
            component={loadAsync(() => import("login/LoginContainer"))}
          />
          <AuthenticatedRoute
            path="/"
            component={loadAsync(() => import("app/AppContainer"))}
          />
        </Switch>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
