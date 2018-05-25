import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Warning from "@material-ui/icons/Warning";

const styles = {
  gridContainer: {
    overflow: "auto",
    height: "100%"
  },
  grid: {
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

const ErrorPage = ({ classes, error }) => (
  <div className={classes.gridContainer}>
    <Grid container className={classes.grid}>
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
  </div>
);

ErrorPage.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.object
};

export default withStyles(styles)(ErrorPage);
