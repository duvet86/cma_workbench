import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import loadAsync from "lib/loadAsync";
import NotFoundRoute from "routes/NotFoundRoute";

const styles = theme => ({
  innerContainer: {
    marginTop: 15
  }
});

const AppBody = ({ classes }) => (
  <Grid item xs={10}>
    <Grid container justify="center" className={classes.innerContainer}>
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
