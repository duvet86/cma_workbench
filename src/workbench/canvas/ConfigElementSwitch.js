import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { elementType } from "sideBar/operators/operatorsData";

import Grid from "material-ui/Grid";
import Drawer from "material-ui/Drawer";
import Button from "material-ui/Button";

import QueryConfigContainer from "workbench/query/QueryConfigContainer";

const styles = theme => ({
  form: {
    padding: 15,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center"
  },
  paper: {
    width: "85%",
    marginTop: 49
  },
  actionButtons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    margin: theme.spacing.unit
  }
});

const drawerByType = props => {
  switch (props.elementConfig.ElementType) {
    case elementType.QUERY:
      return <QueryConfigContainer {...props} />;
    case elementType.FILTER:
      return "FILTER";
    default:
      return null;
  }
};

const ConfigElementSwitch = ({
  classes,
  isDrawerOpen,
  dispatchCloseConfig,
  ...props
}) => (
  <Drawer
    classes={{ paper: classes.paper }}
    anchor="right"
    open={isDrawerOpen}
    onClose={dispatchCloseConfig}
  >
    {isDrawerOpen && (
      <form className={classes.form} noValidate autoComplete="off">
        <Grid container>
          {drawerByType(props)}
          <Grid item xs={12} className={classes.actionButtons}>
            <Button
              onClick={dispatchCloseConfig}
              variant="raised"
              className={classes.button}
            >
              Close
            </Button>
            <Button
              onClick={dispatchCloseConfig}
              variant="raised"
              color="secondary"
              className={classes.button}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    )}
  </Drawer>
);

ConfigElementSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatchCloseConfig: PropTypes.func.isRequired,
  session: PropTypes.object.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  elementConfig: PropTypes.object
};

export default withStyles(styles)(ConfigElementSwitch);
