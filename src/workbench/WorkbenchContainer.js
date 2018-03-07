import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DropTarget } from "react-dnd";

import { sessionRequest } from "workbench/actions";

import LoaderContainer from "common/LoaderContainer";
import WorkbenchToolbar from "workbench/toolBar/WorkbenchToolbar";
import CanvasContainer from "workbench/canvas/CanvasContainer";

const canvasTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);

    component.moveBox(left, top);
  }
};

class WorkbenchContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    sessionInfo: PropTypes.object
  };

  state = {
    top: 0,
    left: 0
  };

  componentDidMount() {
    const { match } = this.props;
    const dataViewId = match.params.id === "new" ? undefined : match.params.id;

    this.props.dispatchSessionRequest(dataViewId);
  }

  moveBox(left, top) {
    this.setState({
      top,
      left
    });
  }

  render() {
    const { connectDropTarget, isLoading, sessionInfo } = this.props;

    console.log(sessionInfo);
    return (
      <LoaderContainer isLoading={isLoading}>
        <WorkbenchToolbar />
        {connectDropTarget(
          <div
            style={{
              position: "relative",
              height: "400%",
              width: "400%"
            }}
          >
            <CanvasContainer
              top={this.state.top}
              left={this.state.left}
              sessionInfo={sessionInfo}
            />
          </div>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(
  DropTarget("CANVAS", canvasTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget()
  }))(WorkbenchContainer)
);
