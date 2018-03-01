import React, { Component } from "react";
import PropTypes from "prop-types";

import Fade from "material-ui/transitions/Fade";
import { CircularProgress } from "material-ui/Progress";

class LoadingContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
    error: PropTypes.object,
    delay: PropTypes.number
  };

  state = {
    pastDelay: false
  };

  componentWillMount() {
    setTimeout(() => {
      this.setState({ pastDelay: true });
    }, this.props.delay || 200);
  }

  render() {
    const { error, isLoading, children } = this.props;
    const { pastDelay } = this.props;

    if (error) {
      // When the loader has errored.
      return <div>{JSON.stringify(error)}</div>;
    }
    if (isLoading) {
      if (pastDelay) {
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
      } else {
        // Still within the delay, show nothing.
        return null;
      }
    }

    // When the loader has finished.
    return children;
  }
}

export default LoadingContainer;
