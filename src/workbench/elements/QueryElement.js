import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { getElementId } from "workbench/utils";
import { operatorsExtraInfo } from "sideBar/operators/operatorsData";

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

const QueryElement = ({ classes, elementId, elementLabel, x, y }) => (
  <div
    id={getElementId(elementId)}
    className={classes.operatorContainer}
    style={{ left: x, top: y }}
  >
    <div className={classes.title}>
      <Avatar
        className={classes.avatar}
        style={{ backgroundColor: operatorsExtraInfo[1].backgroundColor }}
      >
        {React.createElement(operatorsExtraInfo[1].IconComponent)}
      </Avatar>
    </div>
    <Typography variant="subheading" gutterBottom noWrap>
      {elementLabel}
    </Typography>
  </div>
);

QueryElement.propTypes = {
  classes: PropTypes.object.isRequired,
  elementId: PropTypes.number.isRequired,
  elementLabel: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default withStyles(styles)(QueryElement);
