import React, { Fragment } from "react";

import Typography from "material-ui/Typography";
import { LinearProgress } from "material-ui/Progress";

const BaseLoading = () => (
  <Fragment>
    <Typography variant="title">Loading...</Typography>
    <LinearProgress variant="query" />
  </Fragment>
);

export default BaseLoading;
