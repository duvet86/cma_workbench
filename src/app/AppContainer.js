import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { qesEnabledRequest } from "app/actions";

import App from "app/App";

class AppContainer extends Component {
  state = {
    open: true
  };

  componentWillMount() {
    this.props.dispatchQesEnabledRequest();
  }

  handleDrawerOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { isQesEnabled } = this.props;

    return isQesEnabled ? (
      <App
        open={this.state.open}
        handleDrawerOpen={this.handleDrawerOpen}
        {...this.props}
      />
    ) : (
      <div>Error Message.</div>
    );
  }
}

AppContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isQesEnabled: PropTypes.bool.isRequired
};

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
