import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { elementType } from "sideBar/operators/operatorsData";

import Grid from "material-ui/Grid";
import Drawer from "material-ui/Drawer";
import Button from "material-ui/Button";

import QueryDrawer from "workbench/queryConfig/QueryDrawer";

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

const drawerByType = type => {
  switch (type) {
    case elementType.QUERY:
      return <QueryDrawer />;
    case elementType.FILTER:
      return "FILTER";
    default:
      return null;
  }
};

const ConfigDrawerSwitch = ({
  classes,
  configDrawerOpen,
  closeConfigDrawer
}) => (
  <Drawer
    classes={{ paper: classes.paper }}
    anchor="right"
    open={configDrawerOpen !== elementType.NONE}
    onClose={closeConfigDrawer}
  >
    <form className={classes.form} noValidate autoComplete="off">
      <Grid container>
        {drawerByType(configDrawerOpen)}
        <Grid item xs={12} className={classes.actionButtons}>
          <Button
            onClick={closeConfigDrawer}
            variant="raised"
            className={classes.button}
          >
            Close
          </Button>
          <Button
            onClick={closeConfigDrawer}
            variant="raised"
            color="secondary"
            className={classes.button}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  </Drawer>
);

ConfigDrawerSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
  configDrawerOpen: PropTypes.string.isRequired,
  closeConfigDrawer: PropTypes.func.isRequired
};

export default withStyles(styles)(ConfigDrawerSwitch);
