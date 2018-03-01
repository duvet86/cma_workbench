import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";

import toolbarData from "workbench/toolbarData";

const styles = theme => ({
  root: {
    position: "absolute",
    marginLeft: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1
  },
  leftIcon: {
    fill: "#bdbdbd",
    marginRight: theme.spacing.unit
  }
});

const WorkbenchToolbar = ({ classes }) => (
  <Paper className={classes.root}>
    <Toolbar>
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
