import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { elementType } from "sideBar/operators/operatorsData";

import Drawer from "material-ui/Drawer";
import Button from "material-ui/Button";

import QueryDrawer from "workbench/configDrawer/QueryDrawer";

const styles = {
  form: {
    padding: 15,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center"
  },
  paper: {
    width: "85%",
    marginTop: 49
  }
};

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
      {drawerByType(configDrawerOpen)}
      <Button onClick={closeConfigDrawer}>Close</Button>
    </form>
  </Drawer>
);

ConfigDrawerSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
  configDrawerOpen: PropTypes.string.isRequired,
  closeConfigDrawer: PropTypes.func.isRequired
};

export default withStyles(styles)(ConfigDrawerSwitch);
