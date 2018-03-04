import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { getElementId } from "workbench/utils";

import Avatar from "material-ui/Avatar";

import Typography from "material-ui/Typography";

const styles = {
  operatorContainer: {
    position: "absolute",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    cursor: "all-scroll",
    borderRadius: 5,
    border: "1px solid #003b86",
    padding: 5,
    width: 165
  },
  title: {
    display: "flex",
    alignItems: "center",
    marginBottom: 15
  },
  avatar: {
    marginRight: 15
  }
};

const CanvasOperator = ({
  classes,
  index,
  x,
  y,
  label,
  backgroundColor,
  IconComponent
}) => (
  <div
    id={getElementId(index)}
    className={classes.operatorContainer}
    style={{ left: x, top: y }}
  >
    <div className={classes.title}>
      <Avatar className={classes.avatar} style={{ backgroundColor }}>
        <IconComponent />
      </Avatar>
      <Typography variant="subheading" gutterBottom>
        {label}
      </Typography>
    </div>
    <Typography variant="subheading" gutterBottom noWrap>
      Query #1
    </Typography>
  </div>
);

CanvasOperator.propTypes = {
  classes: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  IconComponent: PropTypes.func.isRequired
};

export default withStyles(styles)(CanvasOperator);
