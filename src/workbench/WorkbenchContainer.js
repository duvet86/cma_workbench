import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { sessionRequest } from "workbench/actions";

import LoaderContainer from "common/LoaderContainer";
import Workbench from "workbench/Workbench";

class WorkbenchContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    sessionInfo: PropTypes.object
  };

  componentDidMount() {
    const { match } = this.props;
    const dataViewId = match.params.id === "new" ? undefined : match.params.id;

    this.props.dispatchSessionRequest(dataViewId);
  }

  render() {
    const { isLoading, sessionInfo } = this.props;

    console.log(sessionInfo);
    return (
      <LoaderContainer isLoading={isLoading}>
        <Workbench sessionInfo={sessionInfo} />
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
