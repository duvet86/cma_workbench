import React from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";

import { itemType } from "sideBar/operators/operatorsData";

import { withStyles } from "material-ui/styles";
import Avatar from "material-ui/Avatar";

import Typography from "material-ui/Typography";

const operatorSource = {
  beginDrag(props) {
    const { index, x, y } = props;

    return { index, x, y };
  }
};

const styles = theme => ({
  operatorContainer: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    cursor: "all-scroll",
    borderRadius: 5,
    border: "1px solid #003b86",
    padding: 5,
    backgroundColor: "#eee",
    width: 150
  },
  avatar: {
    marginRight: 15
  }
});

const CanvasOperator = ({
  classes,
  connectDragSource,
  isDragging,
  x,
  y,
  backgroundColor,
  iconComponent: IconComponent,
  label
}) =>
  isDragging
    ? null
    : connectDragSource(
        <div className={classes.operatorContainer} style={{ left: x, top: y }}>
          <Avatar className={classes.avatar} style={{ backgroundColor }}>
            <IconComponent />
          </Avatar>
          <Typography variant="subheading" gutterBottom>
            {label}
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

export default DragSource(
  itemType.CANVAS_OPERATOR,
  operatorSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(withStyles(styles)(CanvasOperator));
