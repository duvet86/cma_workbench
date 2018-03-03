import React, { Component } from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";
import { connect } from "react-redux";
import { DropTarget } from "react-dnd";
import { jsPlumb } from "jsplumb";

import { itemType } from "sideBar/operators/operatorsData";

import DroppableCanvas from "workbench/droppableCanvas/DroppableCanvas";

const COMPONENT_ID = "droppable-canvas";

const operatorTarget = {
  drop(props, monitor, component) {
    const droppedItemType = monitor.getItemType();
    const item = monitor.getItem();

    if (droppedItemType === itemType.OPERATOR) {
      const { x, y } = monitor.getClientOffset();

      component.dropOperatorFromSideBar(item.operatorId, x - 370, y - 65);
    } else if (droppedItemType === itemType.CANVAS_OPERATOR) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const x = Math.round(item.x + delta.x);
      const y = Math.round(item.y + delta.y);

      component.moveOperatorInCanvas(item.index, x, y);
    }
  }
};

class DroppableCanvasContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    operators: PropTypes.object
  };

  state = {
    jsPlumbInstance: undefined,
    operatorsInCanvas: [
      { operatorId: 2, x: 500, y: 150 },
      { operatorId: 1, x: 1000, y: 300 }
    ]
  };

  componentDidMount() {
    jsPlumb.ready(() => {
      const jsPlumbInstance = jsPlumb.getInstance({
        Container: COMPONENT_ID
      });

      this.setState({ jsPlumbInstance });
    });
  }

  dropOperatorFromSideBar = (operatorId, x, y) => {
    this.setState(
      update(this.state, {
        operatorsInCanvas: { $push: [{ operatorId, y, x }] }
      })
    );
  };

  moveOperatorInCanvas = (index, x, y) => {
    this.setState(
      update(this.state, {
        operatorsInCanvas: {
          [index]: { $merge: { x, y } }
        }
      })
    );
  };

  makeConnection = e => {
    this.state.jsPlumbInstance.connect({
      source: "canvas-operator-0",
      target: "canvas-operator-1"
    });
  };

  render() {
    const { connectDropTarget, ...rest } = this.props;
    const { jsPlumbInstance, operatorsInCanvas } = this.state;

    return jsPlumbInstance
      ? connectDropTarget(
          <span>
            <button onClick={this.makeConnection}>click</button>
            <DroppableCanvas
              id={COMPONENT_ID}
              jsPlumbInstance={jsPlumbInstance}
              moveOperatorInCanvas={this.moveOperatorInCanvas}
              operatorsInCanvas={operatorsInCanvas}
              {...rest}
            />
          </span>
        )
      : null;
  }
}

const mapStateToProps = ({
  operatorsReducer: { isLoading, operators, error }
}) => ({
  operators: operators,
  isLoading,
  error
});

export default connect(mapStateToProps)(
  DropTarget(
    [itemType.OPERATOR, itemType.CANVAS_OPERATOR],
    operatorTarget,
    (connect, monitor) => ({
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  )(DroppableCanvasContainer)
);
