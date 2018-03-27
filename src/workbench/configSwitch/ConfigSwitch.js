import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { elementType as ELEMENT_TYPE } from "sideBar/operators/operatorsData";

import Grid from "material-ui/Grid";
import Drawer from "material-ui/Drawer";
import Button from "material-ui/Button";

import QueryConfigContainer from "workbench/query/QueryConfigContainer";

const styles = theme => ({
  form: {
    padding: 15,
    position: "relative",
    height: "100%",
    overflow: "hidden"
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

const drawerByType = elementType => {
  switch (elementType) {
    case ELEMENT_TYPE.QUERY:
      return <QueryConfigContainer />;
    case ELEMENT_TYPE.FILTER:
      return "FILTER";
    default:
      return null;
  }
};

const ConfigSwitch = ({
  classes,
  elementType,
  isDrawerOpen,
  dispatchCloseQueryConfig
}) => (
  <Drawer
    classes={{ paper: classes.paper }}
    anchor="right"
    open={isDrawerOpen}
    onClose={dispatchCloseQueryConfig}
  >
    {isDrawerOpen && (
      <form className={classes.form} noValidate autoComplete="off">
        <Grid container>
          {drawerByType(elementType)}
          <Grid item xs={12} className={classes.actionButtons}>
            <Button
              onClick={dispatchCloseQueryConfig}
              variant="raised"
              className={classes.button}
            >
              Close
            </Button>
            <Button
              onClick={dispatchCloseQueryConfig}
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

ConfigSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatchCloseQueryConfig: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  elementType: PropTypes.string.isRequired
};

export default withStyles(styles)(ConfigSwitch);
