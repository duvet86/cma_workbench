import grid20 from "workbench/canvas/grid20.png";

import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import Grid from "material-ui/Grid";
import ElementContainer from "workbench/canvas/ElementContainer";

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
  sessionInfo: { Graph: { Queries, InteractiveFilters, Connections } }
}) => (
  <Grid id={containerId} container className={classes.container}>
    <Grid item xs={12} className={classes.item}>
      {Queries.map((query, index) => (
        <ElementContainer
          key={query.elementId}
          jsPlumbInstance={jsPlumbInstance}
          moveOperatorInCanvas={moveOperatorInCanvas}
          index={index}
          connections={Connections}
          {...query}
        />
      ))}
      {InteractiveFilters.map((filter, index) => (
        <ElementContainer
          key={filter.elementId}
          jsPlumbInstance={jsPlumbInstance}
          moveOperatorInCanvas={moveOperatorInCanvas}
          index={index}
          connections={Connections}
          {...filter}
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
  sessionInfo: PropTypes.object.isRequired
};

export default withStyles(styles)(Canvas);
