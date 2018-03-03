import grid20 from "workbench/grid20.png";

import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import withLoading from "lib/withLoading";

import Grid from "material-ui/Grid";
import CanvasOperator from "workbench/droppableCanvas/CanvasOperator";
import Connector from "workbench/droppableCanvas/Connector";

const styles = {
  container: {
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
  scale,
  handleWheel,
  operators,
  operatorsInCanvas,
  connectors
}) => (
  <Grid container className={classes.container} onWheel={handleWheel}>
    <Grid
      item
      xs={12}
      className={classes.item}
      style={{
        transform: `scale(${scale})`
      }}
    >
      {operatorsInCanvas.map(({ operatorId, ...rest }, index) => (
        <CanvasOperator
          key={index}
          index={index}
          label={operators[operatorId].label}
          iconComponent={operators[operatorId].IconComponent}
          backgroundColor={operators[operatorId].backgroundColor}
          {...rest}
        />
      ))}
      {connectors.map(({ connectorId, ...rest }, index) => (
        <Connector key={index} index={index} {...rest} />
      ))}
    </Grid>
  </Grid>
);

DroppableCanvas.propTypes = {
  operators: PropTypes.object.isRequired,
  operatorsInCanvas: PropTypes.array.isRequired,
  scale: PropTypes.number.isRequired,
  handleWheel: PropTypes.func.isRequired
};

export default withLoading(withStyles(styles)(DroppableCanvas));
