import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { toolbarData } from "workbench/utils";

const styles = theme => ({
  root: {
    position: "absolute",
    right: 0,
    marginRight: 5,
    marginTop: 10,
    zIndex: 1
  },
  toolBar: {
    minHeight: 0
  },
  leftIcon: {
    fill: "#bdbdbd",
    marginRight: theme.spacing.unit
  }
});

const WorkbenchToolbar = ({ classes }) => (
  <Paper className={classes.root}>
    <Toolbar className={classes.toolBar} disableGutters>
      {toolbarData.map(({ id, label, IconComponent }) => (
        <Button key={id} size="small">
          <IconComponent className={classes.leftIcon} />
          {label}
        </Button>
      ))}
    </Toolbar>
  </Paper>
);

WorkbenchToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WorkbenchToolbar);
