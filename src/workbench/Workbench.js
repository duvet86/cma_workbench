import React, { Fragment } from "react";

import WorkbenchToolbar from "workbench/toolBar/WorkbenchToolbar";
import CanvasContainer from "workbench/canvas/CanvasContainer";

const Workbench = () => (
  <Fragment>
    <WorkbenchToolbar />
    <CanvasContainer />
  </Fragment>
);

export default Workbench;
