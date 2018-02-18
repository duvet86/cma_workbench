import React from "react";
import PropTypes from "prop-types";

import Fade from "material-ui/transitions/Fade";
import { CircularProgress } from "material-ui/Progress";

const Loading = ({ error, isLoading, pastDelay, timedOut }) => {
  if (error) {
    // When the loader has errored
    return <div>{JSON.stringify(error)}</div>;
  }
  if (timedOut) {
    // When the loader has taken longer than the timeout
    return <div>Taking a long time...</div>;
  }
  if (isLoading || pastDelay) {
    // When the loader has taken longer than the delay or is loading
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

  // When the loader has just started
  return null;
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
  pastDelay: PropTypes.bool,
  timedOut: PropTypes.bool,
  error: PropTypes.object
};

export default Loading;
