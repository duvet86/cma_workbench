import React, { Component } from "react";
import PropTypes from "prop-types";

import Loading from "common/loading/Loading";

class LoadingContainer extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    delay: PropTypes.number
  };

  state = {
    pastDelay: false
  };

  componentDidMount() {
    this._delay = setTimeout(() => {
      this.setState({ pastDelay: true });
    }, this.props.delay || 200);
  }

  componentWillUnmount() {
    clearTimeout(this._delay);
  }

  render() {
    const { error, isLoading, children } = this.props;
    const { pastDelay } = this.state;

    return (
      <Loading
        error={error}
        isLoading={isLoading}
        pastDelay={pastDelay}
        children={children}
      />
    );
  }
}

export default LoadingContainer;
