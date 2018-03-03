import grid20 from "workbench/grid20.png";

import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import withLoading from "lib/withLoading";

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
  id,
  jsPlumbInstance,
  operators,
  operatorsInCanvas,
  connections,
  moveOperatorInCanvas
}) => (
  <Grid id={id} container className={classes.container}>
    <Grid item xs={12} className={classes.item}>
      {operatorsInCanvas.map(({ operatorId, ...rest }, index) => (
        <CanvasOperatorContainer
          key={index}
          id={index}
          jsPlumbInstance={jsPlumbInstance}
          index={index}
          operatorId={operatorId}
          label={operators[operatorId].label}
          iconComponent={operators[operatorId].IconComponent}
          backgroundColor={operators[operatorId].backgroundColor}
          moveOperatorInCanvas={moveOperatorInCanvas}
          connections={connections}
          {...rest}
        />
      ))}
    </Grid>
  </Grid>
);

DroppableCanvas.propTypes = {
  id: PropTypes.string.isRequired,
  jsPlumbInstance: PropTypes.object.isRequired,
  operators: PropTypes.object.isRequired,
  operatorsInCanvas: PropTypes.array.isRequired
};

export default withLoading(withStyles(styles)(DroppableCanvas));
