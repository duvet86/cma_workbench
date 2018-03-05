import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { getElementId } from "workbench/utils";
import { operatorsExtraInfo } from "sideBar/operators/operatorsData";

import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";

const styles = theme => ({
  operatorContainer: {
    position: "absolute",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    cursor: "all-scroll",
    borderRadius: "0px 0px 80px 80px",
    border: "1px solid #2c5367",
    width: 130,
    height: 75,
    backgroundColor: theme.palette.background.paper
  },
  avatar: {
    width: 25,
    height: 25
  }
});

const FilterElement = ({ classes, elementId, elementLabel, x, y }) => (
  <div
    id={getElementId(elementId)}
    className={classes.operatorContainer}
    style={{ left: x, top: y }}
  >
    <Typography variant="subheading" noWrap>
      {elementLabel}
    </Typography>
    <Avatar
      className={classes.avatar}
      style={{ backgroundColor: operatorsExtraInfo[2].backgroundColor }}
    >
      {React.createElement(operatorsExtraInfo[2].IconComponent)}
    </Avatar>
  </div>
);

FilterElement.propTypes = {
  classes: PropTypes.object.isRequired,
  elementId: PropTypes.number.isRequired,
  elementLabel: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default withStyles(styles)(FilterElement);
