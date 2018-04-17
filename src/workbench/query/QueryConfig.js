import React from "react";
import PropTypes from "prop-types";

import Grid from "material-ui/Grid";

import { BackgroundLoadingContainer } from "common/loading";
import StepperHeader from "workbench/query/StepperHeader";
import ConfigActions from "workbench/query/ConfigActions";
import SourceSelector from "workbench/query/SourceSelector";
import ColumnSelector from "workbench/query/ColumnSelector";
import StepHelperText from "workbench/query/StepHelperText";
import ConstraintSelector from "workbench/query/ConstraintSelector";

const stepLabels = ["Source", "Columns", "Constraints", "Summary"];

function getStepContent(step, props) {
  let Component;

  switch (step) {
    case 0:
      Component = (
        <SourceSelector
          targetDataViewId={props.elementConfig.TargetDataViewId}
          dataServices={props.dataServices}
          handleChangeDataService={props.handleChangeDataService}
        />
      );
      break;

    case 1:
      Component = (
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
      break;

    case 2:
      Component = (
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
          handledRemoveQueryConstraint={props.handledRemoveQueryConstraint}
        />
      );
      break;

    default:
      Component = "Unknown step";
      break;
  }

  return (
    <Grid item xs={12}>
      {Component}
    </Grid>
  );
}

const QueryConfig = ({
  isLoading,
  currentStep,
  completedSteps,
  dispatchCloseQueryConfig,
  dispatchGoToStep,
  ...props
}) => (
  <BackgroundLoadingContainer isLoading={isLoading}>
    <StepperHeader
      title="Configure Query"
      stepLabels={stepLabels}
      currentStep={currentStep}
      completedSteps={completedSteps}
      dispatchGoToStep={dispatchGoToStep}
    />
    <StepHelperText currentStep={currentStep} />
    {getStepContent(currentStep, props)}
    <ConfigActions
      currentStep={currentStep}
      completedSteps={completedSteps}
      dispatchCloseConfig={dispatchCloseQueryConfig}
      dispatchGoToStep={dispatchGoToStep}
    />
  </BackgroundLoadingContainer>
);

QueryConfig.propTypes = {
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
  handledUpdateQueryConstraintValues: PropTypes.func.isRequired,
  handledRemoveQueryConstraint: PropTypes.func.isRequired
};

export default QueryConfig;
