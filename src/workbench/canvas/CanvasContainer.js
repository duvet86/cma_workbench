import React, { Component } from "react";
import { findDOMNode } from "react-dom";
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
import {
  getGraphQueries,
  getGraphFilters,
  getGraphConnections
} from "workbench/canvas/selectors";
import { elementType } from "sideBar/operators/operatorsData";

import LoaderContainer from "common/LoaderContainer";
import Canvas from "workbench/canvas/Canvas";
import ConfigDrawerSwitch from "workbench/configDrawer/ConfigDrawerSwitch";

const DROPPABLE_CANVAS_ID = "droppable-canvas";

const operatorTarget = {
  drop(props, monitor, component) {
    const { type, operatorServiceId } = monitor.getItem();
    // const clientOffset = monitor.getClientOffset();
    // const containerCoordinates = findDOMNode(component).getBoundingClientRect();

    // const left = Math.round(clientOffset.x - containerCoordinates.x);
    // const top = Math.round(clientOffset.y - containerCoordinates.y);

    component.openConfigDrawer(type);
    //component.dropOperatorFromSideBar(type, operatorServiceId, left, top);
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
    filters: PropTypes.array,
    connections: PropTypes.array
  };

  state = {
    jsPlumbInstance: undefined,
    configDrawerOpen: elementType.QUERY // SET IT TO NONE
  };

  componentDidMount() {
    jsPlumb.ready(() => {
      const jsPlumbInstance = jsPlumb.getInstance({
        Container: DROPPABLE_CANVAS_ID
      });

      this.setState({ jsPlumbInstance });
    });
  }

  openConfigDrawer = type => {
    this.setState({
      configDrawerOpen: type
    });
  };

  closeConfigDrawer = () => {
    this.setState({
      configDrawerOpen: elementType.NONE
    });
  };

  dropOperatorFromSideBar = (type, operatorServiceId, x, y) => {
    this.props.dispatchCanvasOperatorAdd(type, operatorServiceId, x, y);
  };

  moveOperatorInCanvas = (type, index, x, y) => {
    this.props.dispatchCanvasOperatorMove(type, index, x, y);
  };

  deleteOperatorFromCanvas = (type, operatorServiceId, index) => {
    this.props.dispatchCanvasOperatorRemove(type, operatorServiceId, index);
  };

  addConnection = (source, target) => {
    this.props.dispatchConnectionAdd(source, target);
  };

  removeConnection = index => {
    this.props.dispatchConnectioRemove(index);
  };

  render() {
    const { connectDropTarget, queries, filters, connections } = this.props;
    const { jsPlumbInstance, configDrawerOpen } = this.state;

    return (
      <LoaderContainer isLoading={this.props.isLoading || !jsPlumbInstance}>
        <ConfigDrawerSwitch
          configDrawerOpen={configDrawerOpen}
          closeConfigDrawer={this.closeConfigDrawer}
        />
        {connectDropTarget(
          <span>
            <Canvas
              containerId={DROPPABLE_CANVAS_ID}
              jsPlumbInstance={jsPlumbInstance}
              moveOperatorInCanvas={this.moveOperatorInCanvas}
              queries={queries}
              filters={filters}
              connections={connections}
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
  filters: sessionInfo && getGraphFilters(sessionInfo),
  connections: sessionInfo && getGraphConnections(sessionInfo)
});

const mapDispatchToProps = dispatch => ({
  dispatchCanvasOperatorAdd: (type, operatorServiceId, x, y) => {
    const actionType = type === elementType.QUERY ? QUERY_ADD : FILTER_ADD;
    dispatch(operatorAdd(actionType)(operatorServiceId, x, y));
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
