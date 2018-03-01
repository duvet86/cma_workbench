import React from "react";
import PropTypes from "prop-types";

import { DragSource } from "react-dnd";

import { withStyles } from "material-ui/styles";
import Avatar from "material-ui/Avatar";

import { itemType } from "sideBar/operators/operatorsData";

const operatorSource = {
  beginDrag(props) {
    return {
      operatorId: props.operatorServiceId
    };
  }
};

const styles = theme => ({
  avatarContainer: {
    cursor: "pointer",
    padding: 8,
    borderRadius: 5,
    border: "1px solid #003b86"
  }
});

const CanvasOperator = ({
  classes,
  label,
  backgroundColor,
  IconComponent,
  isDragging,
  connectDragSource,
  connectDragPreview
}) =>
  connectDragSource(
    <span className={classes.avatarContainer}>
      {label}
      <Avatar
        style={{
          backgroundColor: backgroundColor
        }}
      >
        <IconComponent />
      </Avatar>
    </span>
  );

CanvasOperator.propTypes = {
  classes: PropTypes.object.isRequired,
  operatorServiceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  IconComponent: PropTypes.func.isRequired
};

export default DragSource(
  itemType.OPERATOR,
  operatorSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  })
)(withStyles(styles)(CanvasOperator));
