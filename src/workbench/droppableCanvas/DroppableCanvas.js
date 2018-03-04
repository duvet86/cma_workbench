import grid20 from "workbench/grid20.png";

import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import Grid from "material-ui/Grid";
import CanvasOperatorContainer from "workbench/canvasOperator/CanvasOperatorContainer";

const styles = {
  container: {
    position: "relative",
    height: "400%",
    width: "400%"
  },
  item: {
    transformOrigin: "0px 0px 0px",
    backgroundImage: `url(${grid20})`
  }
};

const DroppableCanvas = ({
  classes,
  containerId,
  jsPlumbInstance,
  operatorsInCanvas,
  connections,
  moveOperatorInCanvas
}) => (
  <Grid id={containerId} container className={classes.container}>
    <Grid item xs={12} className={classes.item}>
      {operatorsInCanvas.map((op, index) => (
        <CanvasOperatorContainer
          key={index}
          index={index}
          jsPlumbInstance={jsPlumbInstance}
          moveOperatorInCanvas={moveOperatorInCanvas}
          connections={connections}
          {...op}
        />
      ))}
    </Grid>
  </Grid>
);

DroppableCanvas.propTypes = {
  classes: PropTypes.object.isRequired,
  containerId: PropTypes.string.isRequired,
  jsPlumbInstance: PropTypes.object.isRequired,
  operatorsInCanvas: PropTypes.array.isRequired,
  connections: PropTypes.array.isRequired,
  moveOperatorInCanvas: PropTypes.func.isRequired
};

export default withStyles(styles)(DroppableCanvas);
