import React, { Fragment } from "react";

import Typography from "material-ui/Typography";
import { LinearProgress } from "material-ui/Progress";

const BaseLoader = () => (
  <Fragment>
    <Typography variant="title">Loading...</Typography>
    <LinearProgress variant="query" />
  </Fragment>
);

export default BaseLoader;
