import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { jsPlumb } from "jsplumb";

import { CANVAS_DRAGGABLE_CONTAINER_ID } from "workbench/utils";
import { sessionRequest, addQuery } from "workbench/actions";

import LoaderContainer from "common/LoaderContainer";
import WorkbenchToolbar from "workbench/toolBar/WorkbenchToolbar";
import Workbench from "workbench/Workbench";
import ConfigSwitchContainer from "workbench/configSwitch/ConfigSwitchContainer";

const DROPPABLE_CANVAS_ID = "droppable-canvas";

class WorkbenchContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    dispatchSessionRequest: PropTypes.func.isRequired,
    dispatchAddQuery: PropTypes.func.isRequired,
    //dispatchCanvasOperatorMove: PropTypes.func.isRequired,
    session: PropTypes.object.isRequired,
    graph: PropTypes.object.isRequired,
    queries: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    connections: PropTypes.object.isRequired
  };

  state = {
    jsPlumbCanvasInstance: undefined,
    jsPlumbInstance: undefined
  };

  componentDidMount() {
    jsPlumb.ready(() => {
      const jsPlumbCanvasInstance = jsPlumb.getInstance({
        Container: CANVAS_DRAGGABLE_CONTAINER_ID
      });

      const jsPlumbInstance = jsPlumb.getInstance({
        Container: DROPPABLE_CANVAS_ID
      });

      this.setState({ jsPlumbCanvasInstance, jsPlumbInstance });
    });

    const { match } = this.props;
    const dataViewId = match.params.id === "new" ? undefined : match.params.id;

    this.props.dispatchSessionRequest(dataViewId);
  }

  moveOperatorInCanvas = (type, index, x, y) => {
    //this.props.dispatchCanvasOperatorMove(type, index, x, y);
  };

  render() {
    const { isLoading, dispatchAddQuery, session, graph } = this.props;
    const { jsPlumbCanvasInstance, jsPlumbInstance } = this.state;

    console.log(this.props);
    return (
      <LoaderContainer isLoading={isLoading || !jsPlumbCanvasInstance}>
        <WorkbenchToolbar />
        <ConfigSwitchContainer />
        <Workbench
          jsPlumbCanvasInstance={jsPlumbCanvasInstance}
          jsPlumbInstance={jsPlumbInstance}
          dispatchAddQuery={dispatchAddQuery}
          moveOperatorInCanvas={this.moveOperatorInCanvas}
          session={session}
          graph={graph}
        />
      </LoaderContainer>
    );
  }
}

const mapStateToProps = ({ sessionReducer: { ...state } }) => state;

const mapDispatchToProps = dispatch => ({
  dispatchSessionRequest: dataViewId => {
    dispatch(sessionRequest(dataViewId));
  },
  dispatchAddQuery: elementId => dispatch(addQuery(elementId))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkbenchContainer);
