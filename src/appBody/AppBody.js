import React from "react";
import { Route, Switch } from "react-router-dom";

import loadAsync from "lib/loadAsync";

import Grid from "material-ui/Grid";

import NotFoundRoute from "routes/NotFoundRoute";

const AppBody = () => (
  <Grid item>
    <Grid container>
      <Grid item xs={12}>
        <Switch>
          <Route
            exact
            path="/"
            component={loadAsync(() => import("helpPage/HelpPage"))}
          />
          <Route
            exact
            path="/workbench/:id"
            component={loadAsync(() => import("workbench/Workbench"))}
          />
          <Route
            exact
            path="/pagebuilder/:id"
            component={loadAsync(() => import("workbench/Workbench"))}
          />
          <Route
            exact
            path="/profile"
            component={loadAsync(() => import("profile/ProfileContainer"))}
          />
          <NotFoundRoute />
        </Switch>
      </Grid>
    </Grid>
  </Grid>
);

export default AppBody;
