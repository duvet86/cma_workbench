import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Stepper, { Step, StepButton } from "material-ui/Stepper";
import Button from "material-ui/Button";

import StorageIcon from "@material-ui/icons/Storage";

import { BackgroundLoadingContainer } from "common/loading";
import SelectInput from "common/select/SelectInput";
import ColumnSelector from "workbench/query/ColumnSelector";
import StepHelperText from "workbench/query/StepHelperText";
import ConstraintSelector from "workbench/query/ConstraintSelector";

const styles = theme => ({
  formControl: {
    width: "100%"
  },
  gridTitle: {
    position: "fixed",
    width: "99%",
    backgroundColor: "white",
    zIndex: 2,
    borderBottom: "1px solid #eee"
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 15
  },
  title: {
    marginRight: 15
  },
  stepper: {
    padding: 0,
    width: "100%"
  },
  stepTitle: {
    marginTop: 85
  },
  paper: {
    display: "flex",
    alignItems: "center",
    padding: 10
  },
  actionButtons: {
    display: "flex",
    justifyContent: "flex-end",
    position: "fixed",
    bottom: 48,
    right: 0
  },
  button: {
    margin: theme.spacing.unit
  },
  sourceSelectIconColour: {
    fill: "#003b86"
  }
});

const stepLabels = ["Source", "Columns", "Constraints", "Summary"];

function getStepContent(step, classes, props) {
  switch (step) {
    case 0:
      return (
        <SelectInput
          noClear
          OptionsIcon={StorageIcon}
          iconClassName={classes.sourceSelectIconColour}
          inputLabel="Click here to select a source..."
          value={props.elementConfig.TargetDataViewId}
          options={props.dataServices}
          handleChange={props.handleChangeDataService}
        />
      );
    case 1:
      return (
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <ColumnSelector
              label="Available Columns"
              columns={props.availableColumns}
              onColumnClick={props.handleAddQueryColumn}
            />
          </Grid>
          <Grid item xs={6}>
            <ColumnSelector
              label="Selected Columns"
              columns={props.selectedColumns}
              onColumnClick={props.handleRemoveQueryColumn}
            />
          </Grid>
        </Grid>
      );
    case 2:
      return (
        <ConstraintSelector
          filterCapabilities={props.filterCapabilities}
          contraintTargets={props.contraintTargets}
          handledAddQueryConstraint={props.handledAddQueryConstraint}
          queryConstraints={props.elementConfig.Constraints}
          handledUpdateQueryConstraintType={
            props.handledUpdateQueryConstraintType
          }
          handledUpdateQueryConstraintValues={
            props.handledUpdateQueryConstraintValues
          }
        />
      );
    default:
      return "Unknown step";
  }
}

const QueryConfig = ({
  classes,
  isLoading,
  currentStep,
  completedSteps,
  dispatchCloseQueryConfig,
  dispatchGoToStep,
  ...props
}) => {
  const handleStep = stepIndex => () => {
    return dispatchGoToStep(stepIndex);
  };

  return (
    <BackgroundLoadingContainer isLoading={isLoading}>
      <Grid item xs={12} className={classes.gridTitle}>
        <div className={classes.titleContainer}>
          <Typography variant="title" className={classes.title}>
            Configure Query
          </Typography>
        </div>
        <Stepper
          classes={{ root: classes.stepper }}
          nonLinear
          activeStep={currentStep}
        >
          {stepLabels.map((label, index) => (
            <Step key={label}>
              <StepButton
                onClick={handleStep(index)}
                disabled={completedSteps[index] == null}
                completed={completedSteps[index]}
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid item xs={12} className={classes.stepTitle}>
        <Typography variant="headline">
          {`Step ${currentStep + 1}: ${stepLabels[currentStep]}`}
        </Typography>
      </Grid>
      <StepHelperText currentStep={currentStep} />
      <Grid item xs={12}>
        {getStepContent(currentStep, classes, props)}
      </Grid>
      <Grid item xs={12} className={classes.actionButtons}>
        <Button
          onClick={dispatchCloseQueryConfig}
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
    </BackgroundLoadingContainer>
  );
};

QueryConfig.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  elementConfig: PropTypes.object.isRequired,
  dataServices: PropTypes.array.isRequired,
  availableColumns: PropTypes.array.isRequired,
  selectedColumns: PropTypes.array.isRequired,
  contraintTargets: PropTypes.array.isRequired,
  dispatchGoToStep: PropTypes.func.isRequired,
  handleChangeDataService: PropTypes.func.isRequired,
  handleAddQueryColumn: PropTypes.func.isRequired,
  handleRemoveQueryColumn: PropTypes.func.isRequired,
  handledAddQueryConstraint: PropTypes.func.isRequired,
  handledUpdateQueryConstraintType: PropTypes.func.isRequired,
  handledUpdateQueryConstraintValues: PropTypes.func.isRequired
};

export default withStyles(styles)(QueryConfig);
