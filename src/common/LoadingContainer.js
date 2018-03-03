import React, { Component } from "react";
import PropTypes from "prop-types";

import Fade from "material-ui/transitions/Fade";
import { CircularProgress } from "material-ui/Progress";

class LoadingContainer extends Component {
  static propTypes = {
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
    const { error, isLoading } = this.props;
    const { pastDelay } = this.state;

    if (error) {
      // When the loader has errored.
      return <div>{JSON.stringify(error)}</div>;
    }
    if (isLoading && pastDelay) {
      // When the loader has taken longer than the delay show a spinner.
      return (
        <Fade
          in={true}
          style={{
            transitionDelay: "800ms"
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      );
    }

    // When the loader has finished.
    return null;
  }
}

export default LoadingContainer;
