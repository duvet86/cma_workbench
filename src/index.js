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
import { locationChange } from "rootActions";

import { MuiThemeProvider } from "material-ui/styles";
import Reboot from "material-ui/Reboot";

import AnonymousRoute from "routes/AnonymousRoute";
import AuthenticatedRoute from "routes/AuthenticatedRoute";

const store = configureStore();
const theme = configureTheme();

history.listen(location => store.dispatch(locationChange(location)));

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Reboot />
      <ConnectedRouter history={history}>
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
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
