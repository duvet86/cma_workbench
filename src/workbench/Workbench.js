import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Tip from "workbench/Tip";
import WorkbenchToolbar from "workbench/toolBar/WorkbenchToolbar";
import DroppableCanvasContainer from "workbench/droppableCanvas/DroppableCanvasContainer";

const Workbench = ({ tipOpen, handleTipClose }) => (
  <Fragment>
    <Tip tipOpen={tipOpen} handleTipClose={handleTipClose} />
    <WorkbenchToolbar />
    <DroppableCanvasContainer />
  </Fragment>
);

Workbench.propTypes = {
  tipOpen: PropTypes.bool.isRequired,
  handleTipClose: PropTypes.func.isRequired
};

export default Workbench;
