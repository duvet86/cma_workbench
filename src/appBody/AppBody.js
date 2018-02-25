import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import loadAsync from "lib/loadAsync";
import NotFoundRoute from "routes/NotFoundRoute";

const styles = theme => ({
  innerContainer: {
    padding: 25
  }
});

const AppBody = ({ classes }) => (
  <Grid container>
    <Grid item xs={12}>
      <Grid container className={classes.innerContainer}>
        <Switch>
          <Route
            exact
            path="/"
            component={loadAsync(() => import("welcomePage/WelcomePage"))}
          />
          <Route
            exact
            path="/workbench/:id"
            component={loadAsync(() => import("workbench/Workbench"))}
          />
          <Route
            exact
            path="/pagebuilder/:id"
            component={loadAsync(() => import("pagebuilder/Pagebuilder"))}
          />
          <Route
            exact
            path="/profile"
            component={loadAsync(() => import("profile/ProfileContainer"))}
          />
          <Route
            exact
            path="/error"
            component={loadAsync(() => import("errorPage/ErrorPageContainer"))}
          />
          <NotFoundRoute />
        </Switch>
      </Grid>
    </Grid>
  </Grid>
);

AppBody.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBody);
