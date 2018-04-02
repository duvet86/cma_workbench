import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { qesEnabledRequest } from "app/actions";

import { LoadingContainer } from "common/loading";
import App from "app/App";

class AppContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isQesEnabled: PropTypes.bool.isRequired
  };

  state = {
    open: true
  };

  componentDidMount() {
    this.props.dispatchQesEnabledRequest();
  }

  handleDrawerOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    return (
      <LoadingContainer isLoading={this.props.isLoading}>
        <App
          {...this.props}
          open={this.state.open}
          handleDrawerOpen={this.handleDrawerOpen}
        />
      </LoadingContainer>
    );
  }
}

const mapStateToProps = ({
  appReducer: { isLoading, isQesEnabled, error }
}) => ({
  isLoading,
  isQesEnabled,
  error
});

const mapDispatchToProps = dispatch => ({
  dispatchQesEnabledRequest: () => {
    dispatch(qesEnabledRequest());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
