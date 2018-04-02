import React, { Component } from "react";
import { connect } from "react-redux";

import { startDelay } from "common/loading/actions";

import BackgroundLoading from "common/loading/BackgroundLoading";

class BackgroundLoadingContainer extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoading && !this.props.isLoading) {
      this.props.dispatchStartDelay();
    }
  }

  render() {
    return <BackgroundLoading {...this.props} />;
  }
}

const mapStateToProps = ({ loadingReducer: { pastDelay } }) => ({
  pastDelay
});

const mapDispatchToProps = dispatch => ({
  dispatchStartDelay: () => {
    dispatch(startDelay());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  BackgroundLoadingContainer
);
