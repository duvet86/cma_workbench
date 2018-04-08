import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { elementType as ELEMENT_TYPE } from "sideBar/operators/operatorsData";

import Grid from "material-ui/Grid";
import Drawer from "material-ui/Drawer";

import QueryConfigContainer from "workbench/query/QueryConfigContainer";

const styles = theme => ({
  paper: {
    width: "85%",
    marginTop: 48
  },
  form: {
    position: "relative",
    height: "100%",
    padding: theme.spacing.unit,
    overflow: "auto",
    marginBottom: 48
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

const ConfigSwitch = ({ classes, elementType, isDrawerOpen }) => (
  <Drawer classes={{ paper: classes.paper }} anchor="right" open={isDrawerOpen}>
    {isDrawerOpen && (
      <form className={classes.form} noValidate autoComplete="off">
        <Grid container spacing={16}>
          {drawerByType(elementType)}
        </Grid>
      </form>
    )}
  </Drawer>
);

ConfigSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  elementType: PropTypes.string.isRequired
};

export default withStyles(styles)(ConfigSwitch);
