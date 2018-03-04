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

  state = {
    tipOpen: true
  };

  componentDidMount() {
    this.props.dispatchSessionRequest();
  }

  handleTipClose = () => {
    this.setState({ tipOpen: false });
  };

  render() {
    const { tipOpen } = this.state;

    return (
      <LoaderContainer isLoading={this.props.isLoading}>
        <Workbench tipOpen={tipOpen} handleTipClose={this.handleTipClose} />
      </LoaderContainer>
    );
  }
}

const mapStateToProps = ({
  sessionReducer: { isLoading, sessionInfo, error }
}) => ({
  isLoading,
  sessionInfo,
  error
});

const mapDispatchToProps = dispatch => ({
  dispatchSessionRequest: () => {
    dispatch(sessionRequest());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkbenchContainer);
