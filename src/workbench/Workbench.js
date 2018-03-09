import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import {
  CANVAS_DRAGGABLE_CONTAINER_ID,
  CANVAS_DRAGGABLE_ID
} from "workbench/utils";

import CanvasContainer from "workbench/canvas/CanvasContainer";

const styles = {
  container: {
    position: "relative",
    height: "400%",
    width: "400%"
  },
  draggableItem: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
};

class Workbench extends Component {
  componentDidMount() {
    this.props.jsPlumbCanvasInstance.draggable(CANVAS_DRAGGABLE_ID);
  }

  render() {
    const { classes, sessionInfo } = this.props;

    return (
      <div id={CANVAS_DRAGGABLE_CONTAINER_ID} className={classes.container}>
        <div id={CANVAS_DRAGGABLE_ID} className={classes.draggableItem}>
          <CanvasContainer sessionInfo={sessionInfo} />
        </div>
      </div>
    );
  }
}

Workbench.propTypes = {
  classes: PropTypes.object.isRequired,
  sessionInfo: PropTypes.object
};

export default withStyles(styles)(Workbench);
