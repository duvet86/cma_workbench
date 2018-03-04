import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { DropTarget } from "react-dnd";
import { jsPlumb } from "jsplumb";

import { itemType } from "sideBar/operators/operatorsData";
import { getEnhancedOperators } from "workbench/droppableCanvas/selectors";
import {
  canvasOperatorsRequest,
  canvasOperatorAdd,
  canvasOperatorMove,
  canvasOperatorRemove,
  connectionAdd,
  connectioRemove
} from "workbench/droppableCanvas/actions";

import LoaderContainer from "common/LoaderContainer";
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
    connectDropTarget: PropTypes.func.isRequired,
    dispatchCanvasOperatorsRequest: PropTypes.func.isRequired,
    dispatchCanvasOperatorAdd: PropTypes.func.isRequired,
    dispatchCanvasOperatorMove: PropTypes.func.isRequired,
    dispatchCanvasOperatorRemove: PropTypes.func.isRequired,
    dispatchConnectionAdd: PropTypes.func.isRequired,
    dispatchConnectioRemove: PropTypes.func.isRequired,
    connections: PropTypes.array.isRequired,
    operatorsInCanvas: PropTypes.array
  };

  state = {
    jsPlumbInstance: undefined
    // operatorsInCanvas: [
    //   { operatorId: 2, x: 500, y: 150 },
    //   { operatorId: 1, x: 1000, y: 300 }
    // ],
    // connections: [
    //   {
    //     source: "canvas-operator-0",
    //     target: "canvas-operator-1"
    //   }
    // ]
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
    this.props.dispatchCanvasOperatorAdd(operatorId, x, y);
  };

  moveOperatorInCanvas = (index, x, y) => {
    this.props.dispatchCanvasOperatorMove(index, x, y);
  };

  addConnection = (source, target) => {
    this.props.dispatchConnectionAdd(source, target);
  };

  removeConnection = index => {
    this.props.dispatchConnectioRemove(index);
  };

  render() {
    const { connectDropTarget, ...rest } = this.props;
    const { jsPlumbInstance, operatorsInCanvas, connections } = this.state;

    return (
      <LoaderContainer isLoading={this.props.isLoading || !jsPlumbInstance}>
        {connectDropTarget(
          <span>
            <DroppableCanvas
              containerId={COMPONENT_ID}
              jsPlumbInstance={jsPlumbInstance}
              moveOperatorInCanvas={this.moveOperatorInCanvas}
              operatorsInCanvas={operatorsInCanvas}
              connections={connections}
              {...rest}
            />
          </span>
        )}
      </LoaderContainer>
    );
  }
}

const mapStateToProps = state => {
  const {
    operatorsReducer: { isLoading: isOperatorsLoading, operators },
    droppableCanvasReducer: {
      operatorsInCanvas,
      connections,
      isLoading: isCanvasLoading
    }
  } = state;

  return {
    isLoading: isOperatorsLoading && isCanvasLoading,
    operatorsInCanvas:
      operators && operatorsInCanvas && getEnhancedOperators(state),
    connections
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchCanvasOperatorsRequest: () => {
    dispatch(canvasOperatorsRequest());
  },
  dispatchCanvasOperatorAdd: (operatorId, x, y) => {
    dispatch(canvasOperatorAdd(operatorId, x, y));
  },
  dispatchCanvasOperatorMove: (index, x, y) => {
    dispatch(canvasOperatorMove(index, x, y));
  },
  dispatchCanvasOperatorRemove: index => {
    dispatch(canvasOperatorRemove(index));
  },
  dispatchConnectionAdd: (source, target) => {
    dispatch(connectionAdd(source, target));
  },
  dispatchConnectioRemove: index => {
    dispatch(connectioRemove(index));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DropTarget(itemType.OPERATOR, operatorTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget()
  }))(DroppableCanvasContainer)
);
