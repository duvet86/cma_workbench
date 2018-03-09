import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { DragSource } from "react-dnd";

import { withStyles } from "material-ui/styles";
import { ListItem, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import Avatar from "material-ui/Avatar";

import { itemType } from "sideBar/operators/operatorsData";

const operatorSource = {
  beginDrag({ type, operatorServiceId }) {
    return {
      type,
      operatorServiceId
    };
  }
};

const styles = theme => ({
  listItemRoot: {
    minHeight: 70,
    paddingTop: 3,
    paddingBottom: 3
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  avatarContainer: {
    cursor: "pointer",
    padding: 8,
    borderRadius: 5,
    "&:hover": {
      border: "1px solid #003b86"
    }
  }
});

const Operator = ({
  classes,
  label,
  description,
  backgroundColor,
  IconComponent,
  isDragging,
  connectDragSource
}) => (
  <Fragment>
    <ListItem classes={{ root: classes.listItemRoot }}>
      <ListItemText
        primary={label}
        secondary={description}
        classes={{
          primary: classes.heading
        }}
      />
      {connectDragSource(
        <span className={classes.avatarContainer}>
          <Avatar
            style={{
              backgroundColor: backgroundColor
            }}
          >
            <IconComponent />
          </Avatar>
        </span>
      )}
    </ListItem>
    <Divider />
  </Fragment>
);

Operator.propTypes = {
  classes: PropTypes.object.isRequired,
  operatorServiceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  IconComponent: PropTypes.func.isRequired
};

export default DragSource(
  itemType.OPERATOR,
  operatorSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(withStyles(styles)(Operator));
