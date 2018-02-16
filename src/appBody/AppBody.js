import React from "react";
import { Route, Switch } from "react-router-dom";

import loadAsync from "lib/loadAsync";

import Grid from "material-ui/Grid";

import NotFoundRoute from "routes/NotFoundRoute";

const yo = () => <div>PIppo</div>;

const AppBody = () => (
  <Grid container>
    <Grid item xs={12}>
      <Switch>
        <Route exact path="/" component={yo} />
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
        <NotFoundRoute />
      </Switch>
    </Grid>
  </Grid>
);

export default AppBody;
