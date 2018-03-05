import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { DropTarget } from "react-dnd";
import { jsPlumb } from "jsplumb";

import { itemType } from "sideBar/operators/operatorsData";
import {
  QUERY_ADD,
  QUERY_MOVE,
  QUERY_REMOVE,
  FILTER_ADD,
  FILTER_MOVE,
  FILTER_REMOVE,
  operatorAdd,
  operatorMove,
  operatorRemove,
  connectionAdd,
  connectioRemove
} from "workbench/canvas/actions";
import { getGraphQueries, getGraphFilters } from "workbench/canvas/selectors";
import { elementType } from "sideBar/operators/operatorsData";

import LoaderContainer from "common/LoaderContainer";
import Canvas from "workbench/canvas/Canvas";

const CONTAINER_ID = "droppable-canvas";
const ADJUST_X = 370;
const ADJUST_Y = 65;

const operatorTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const { x, y } = monitor.getClientOffset();

    component.dropOperatorFromSideBar(
      item.operatorId,
      x - ADJUST_X,
      y - ADJUST_Y
    );
  }
};

class CanvasContainer extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    dispatchCanvasOperatorAdd: PropTypes.func.isRequired,
    dispatchCanvasOperatorMove: PropTypes.func.isRequired,
    dispatchCanvasOperatorRemove: PropTypes.func.isRequired,
    dispatchConnectionAdd: PropTypes.func.isRequired,
    dispatchConnectioRemove: PropTypes.func.isRequired,
    queries: PropTypes.array,
    filters: PropTypes.array
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
        Container: CONTAINER_ID
      });

      this.setState({ jsPlumbInstance });
    });
  }

  dropOperatorFromSideBar = (operatorId, x, y) => {
    this.props.dispatchCanvasOperatorAdd(operatorId, x, y);
  };

  moveOperatorInCanvas = (type, index, x, y) => {
    this.props.dispatchCanvasOperatorMove(type, index, x, y);
  };

  deleteOperatorFromCanvas = (operatorId, index) => {
    this.props.dispatchCanvasOperatorRemove(operatorId, index);
  };

  addConnection = (source, target) => {
    this.props.dispatchConnectionAdd(source, target);
  };

  removeConnection = index => {
    this.props.dispatchConnectioRemove(index);
  };

  render() {
    const { connectDropTarget, queries, filters } = this.props;
    const { jsPlumbInstance } = this.state;

    return (
      <LoaderContainer isLoading={this.props.isLoading || !jsPlumbInstance}>
        {connectDropTarget(
          <span>
            <Canvas
              containerId={CONTAINER_ID}
              jsPlumbInstance={jsPlumbInstance}
              moveOperatorInCanvas={this.moveOperatorInCanvas}
              queries={queries}
              filters={filters}
            />
          </span>
        )}
      </LoaderContainer>
    );
  }
}

const mapStateToProps = ({ canvasReducer: { sessionInfo, isLoading } }) => ({
  isLoading,
  queries: sessionInfo && getGraphQueries(sessionInfo),
  filters: sessionInfo && getGraphFilters(sessionInfo)
});

const mapDispatchToProps = dispatch => ({
  dispatchCanvasOperatorAdd: (type, operatorId, x, y) => {
    const actionType = type === elementType.QUERY ? QUERY_ADD : FILTER_ADD;
    dispatch(operatorAdd(actionType)(operatorId, x, y));
  },
  dispatchCanvasOperatorMove: (type, index, x, y) => {
    const actionType = type === elementType.QUERY ? QUERY_MOVE : FILTER_MOVE;
    dispatch(operatorMove(actionType)(index, x, y));
  },
  dispatchCanvasOperatorRemove: (type, index) => {
    const actionType =
      type === elementType.QUERY ? QUERY_REMOVE : FILTER_REMOVE;
    dispatch(operatorRemove(actionType)(index));
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
  }))(CanvasContainer)
);
