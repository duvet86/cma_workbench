import React, { Component } from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";

import { itemType } from "sideBar/operators/operatorsData";
import { withStyles } from "material-ui/styles";
import {
  CANVAS_DRAGGABLE_CONTAINER_ID,
  CANVAS_DRAGGABLE_ID
} from "workbench/utils";

import Canvas from "workbench/canvas/Canvas";

const DROPPABLE_CANVAS_ID = "droppable-canvas";

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

const operatorTarget = {
  drop(props, monitor, component) {
    //const { type, operatorServiceId } = monitor.getItem();
    // const clientOffset = monitor.getClientOffset();
    // const containerCoordinates = findDOMNode(component).getBoundingClientRect();

    // const left = Math.round(clientOffset.x - containerCoordinates.x);
    // const top = Math.round(clientOffset.y - containerCoordinates.y);

    //const { type } = monitor.getItem();

    props.dispatchAddQuery(props.graph.NextElementId);
    //component.dropOperatorFromSideBar(type, operatorServiceId, left, top);
  }
};

class Workbench extends Component {
  componentDidMount() {
    this.props.jsPlumbCanvasInstance.draggable(CANVAS_DRAGGABLE_ID);
  }

  render() {
    const {
      classes,
      connectDropTarget,
      moveOperatorInCanvas,
      jsPlumbInstance,
      session
    } = this.props;

    return (
      <div id={CANVAS_DRAGGABLE_CONTAINER_ID} className={classes.container}>
        <div id={CANVAS_DRAGGABLE_ID} className={classes.draggableItem}>
          {connectDropTarget(
            <span>
              <Canvas
                containerId={DROPPABLE_CANVAS_ID}
                jsPlumbInstance={jsPlumbInstance}
                moveOperatorInCanvas={moveOperatorInCanvas}
                session={session}
              />
            </span>
          )}
        </div>
      </div>
    );
  }
}

Workbench.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatchAddQuery: PropTypes.func.isRequired,
  session: PropTypes.object,
  graph: PropTypes.object
};

export default withStyles(styles)(
  DropTarget(itemType.OPERATOR, operatorTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget()
  }))(Workbench)
);
