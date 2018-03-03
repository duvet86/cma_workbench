import React, { Component } from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";
import { connect } from "react-redux";
import { DropTarget } from "react-dnd";

import { itemType } from "sideBar/operators/operatorsData";

import DroppableCanvas from "workbench/droppableCanvas/DroppableCanvas";

const operatorTarget = {
  drop(props, monitor, component) {
    const droppedItemType = monitor.getItemType();
    const item = monitor.getItem();

    if (droppedItemType === itemType.OPERATOR) {
      const { x, y } = monitor.getClientOffset();
      const { scale } = component.state;

      component.dropOperatorFromSideBar(
        item.operatorId,
        (x - 370) * scale,
        (y - 65) * scale
      );
    } else if (droppedItemType === itemType.CANVAS_OPERATOR) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const x = Math.round(item.x + delta.x);
      const y = Math.round(item.y + delta.y);

      component.moveOperatorInCanvas(item.index, x, y);
    }
  },
  hover(props, monitor, component) {
    const hoveringItemType = monitor.getItemType();
    if (hoveringItemType === itemType.CANVAS_OPERATOR) {
      const item = monitor.getItem();
      const delta = monitor.getDifferenceFromInitialOffset();
      const x = Math.round(item.x + delta.x);
      const y = Math.round(item.y + delta.y);

      component.updateConnector(item.index, x, y);
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
    scale: 1,
    operatorsInCanvas: [
      { operatorId: 2, x: 500, y: 150 },
      { operatorId: 1, x: 1000, y: 300 }
    ],
    connectors: [{ connectorId: 1, x1: 590, y1: 210, x2: 1000, y2: 315 }]
  };

  handleWheel = e => {
    e.preventDefault();
    // Probably better to use the ref and update the attribute manually.
    // See: https://stackoverflow.com/questions/29725828/update-style-of-a-component-onscroll-in-react-js/29726000#29726000
    e.persist();

    this.setState(prevState => ({
      scale: prevState.scale - e.deltaY * 0.0012
    }));
  };

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

  updateConnector = (index, x, y) => {
    this.setState(
      update(this.state, {
        connectors: {
          [index]: { $merge: { x1: x, y1: y } }
        }
      })
    );
  };

  render() {
    const { connectDropTarget } = this.props;
    const { operatorsInCanvas, connectors, scale } = this.state;

    return connectDropTarget(
      <span>
        <DroppableCanvas
          {...this.props}
          handleWheel={this.handleWheel}
          scale={scale}
          operatorsInCanvas={operatorsInCanvas}
          connectors={connectors}
        />
      </span>
    );
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
