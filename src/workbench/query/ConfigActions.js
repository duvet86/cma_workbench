import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import Grid from "material-ui/Grid";
import Button from "material-ui/Button";

const styles = theme => ({
  actionButtons: {
    display: "flex",
    justifyContent: "flex-end",
    position: "fixed",
    bottom: theme.spacing.unit * 6,
    right: 0
  },
  button: {
    margin: theme.spacing.unit
  }
});

const ConfigActions = ({
  classes,
  currentStep,
  completedSteps,
  dispatchCloseConfig,
  dispatchGoToStep
}) => {
  const handleStep = stepIndex => () => {
    return dispatchGoToStep(stepIndex);
  };

  return (
    <Grid item xs={12} className={classes.actionButtons}>
      <Button
        onClick={dispatchCloseConfig}
        variant="raised"
        className={classes.button}
      >
        Close
      </Button>
      <Button
        disabled={currentStep === 0}
        onClick={handleStep(currentStep - 1)}
        variant="raised"
        color="secondary"
        className={classes.button}
      >
        Back
      </Button>
      <Button
        disabled={!completedSteps[currentStep]}
        onClick={handleStep(currentStep + 1)}
        variant="raised"
        color="secondary"
        className={classes.button}
      >
        Next
      </Button>
    </Grid>
  );
};

ConfigActions.propTypes = {
  classes: PropTypes.object.isRequired,
  currentStep: PropTypes.number.isRequired,
  completedSteps: PropTypes.array.isRequired,
  dispatchCloseConfig: PropTypes.func.isRequired,
  dispatchGoToStep: PropTypes.func.isRequired
};

export default withStyles(styles)(ConfigActions);
