import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { jsPlumb } from "jsplumb";

import { CANVAS_DRAGGABLE_CONTAINER_ID } from "workbench/utils";
import { sessionRequest } from "workbench/actions";

import LoaderContainer from "common/LoaderContainer";
import WorkbenchToolbar from "workbench/toolBar/WorkbenchToolbar";
import Workbench from "workbench/Workbench";

class WorkbenchContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    sessionInfo: PropTypes.object
  };

  state = {
    jsPlumbCanvasInstance: undefined
  };

  componentDidMount() {
    jsPlumb.ready(() => {
      const jsPlumbCanvasInstance = jsPlumb.getInstance({
        Container: CANVAS_DRAGGABLE_CONTAINER_ID
      });

      this.setState({ jsPlumbCanvasInstance });
    });

    const { match } = this.props;
    const dataViewId = match.params.id === "new" ? undefined : match.params.id;

    this.props.dispatchSessionRequest(dataViewId);
  }

  render() {
    const { isLoading, sessionInfo } = this.props;
    const { jsPlumbCanvasInstance } = this.state;

    console.log(sessionInfo);
    return (
      <LoaderContainer isLoading={isLoading || !jsPlumbCanvasInstance}>
        <WorkbenchToolbar />
        <Workbench
          jsPlumbCanvasInstance={jsPlumbCanvasInstance}
          sessionInfo={sessionInfo}
        />
      </LoaderContainer>
    );
  }
}

const mapStateToProps = ({ sessionReducer: { isLoading, sessionInfo } }) => ({
  isLoading,
  sessionInfo
});

const mapDispatchToProps = dispatch => ({
  dispatchSessionRequest: dataViewId => {
    dispatch(sessionRequest(dataViewId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkbenchContainer);
