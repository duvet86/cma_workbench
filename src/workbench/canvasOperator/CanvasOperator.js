import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
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
  id,
  x,
  y,
  backgroundColor,
  iconComponent: IconComponent,
  label
}) => (
  <div
    id={`canvas-operator-${id}`}
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
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  iconComponent: PropTypes.func.isRequired
};

export default withStyles(styles)(CanvasOperator);
