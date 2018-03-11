import grid20 from "workbench/canvas/grid20.png";

import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import Grid from "material-ui/Grid";
import ElementsContainer from "workbench/elements/ElementsContainer";

const styles = {
  container: {
    height: "100%",
    width: "100%"
  },
  item: {
    transformOrigin: "0px 0px 0px",
    backgroundImage: `url(${grid20})`
  }
};

const Canvas = ({
  classes,
  containerId,
  jsPlumbInstance,
  moveOperatorInCanvas,
  queries,
  filters,
  connections
}) => (
  <Grid id={containerId} container className={classes.container}>
    <Grid item xs={12} className={classes.item}>
      {queries.map((q, index) => (
        <ElementsContainer
          key={q.elementId}
          jsPlumbInstance={jsPlumbInstance}
          moveOperatorInCanvas={moveOperatorInCanvas}
          index={index}
          connections={connections}
          {...q}
        />
      ))}
      {filters.map((f, index) => (
        <ElementsContainer
          key={f.elementId}
          jsPlumbInstance={jsPlumbInstance}
          moveOperatorInCanvas={moveOperatorInCanvas}
          index={index}
          connections={connections}
          {...f}
        />
      ))}
    </Grid>
  </Grid>
);

Canvas.propTypes = {
  classes: PropTypes.object.isRequired,
  containerId: PropTypes.string.isRequired,
  jsPlumbInstance: PropTypes.object.isRequired,
  moveOperatorInCanvas: PropTypes.func.isRequired,
  queries: PropTypes.array,
  filters: PropTypes.array,
  connections: PropTypes.array
};

export default withStyles(styles)(Canvas);
