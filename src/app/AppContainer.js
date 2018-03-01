import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { qesEnabledRequest } from "app/actions";

import LoadingContainer from "common/LoadingContainer";
import App from "app/App";

class AppContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isQesEnabled: PropTypes.bool.isRequired
  };

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
    const { isQesEnabled, isLoading, error, ...rest } = this.props;

    return (
      <LoadingContainer isLoading={isLoading} error={error}>
        {isQesEnabled ? (
          <App
            open={this.state.open}
            handleDrawerOpen={this.handleDrawerOpen}
            {...rest}
          />
        ) : (
          <div>Error Message.</div>
        )}
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
