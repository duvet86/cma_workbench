import React from "react";
import PropTypes from "prop-types";

import Fade from "material-ui/transitions/Fade";
import { CircularProgress } from "material-ui/Progress";

const Loader = ({ error, isLoading, pastDelay, children }) => {
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
      return null;
    }
  }

  // When the loader has finished.
  return children;
};

Loader.propTypes = {
  children: PropTypes.any.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  delay: PropTypes.number
};

export default Loader;
