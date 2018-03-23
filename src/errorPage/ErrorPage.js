import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

import Warning from "material-ui-icons/Warning";

const styles = {
  container: {
    padding: 25
  },
  cardActions: {
    justifyContent: "flex-end"
  },
  cardContent: {
    textAlign: "center"
  },
  title: {
    marginBottom: 12
  },
  icon: {
    fill: "#B71C1C",
    width: 40,
    height: 40
  }
};

const ErrorPage = ({ error, classes }) => (
  <Grid container className={classes.container}>
    <Grid item xs={12}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Card>
            <CardContent className={classes.cardContent}>
              <Warning className={classes.icon} />
              <Typography variant="headline" component="h2">
                OOOPS SOMETHING WENT WRONG
              </Typography>
            </CardContent>
            <CardContent>
              <Typography>{JSON.stringify(error)}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button variant="raised" component={Link} to="/">
                Back to the Home Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

ErrorPage.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.object
};

export default withStyles(styles)(ErrorPage);
