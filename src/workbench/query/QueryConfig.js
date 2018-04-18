import React from "react";
import PropTypes from "prop-types";

import Grid from "material-ui/Grid";

import { BackgroundLoadingContainer } from "common/loading";
import HelperText from "workbench/query/HelperText";
import StepperHeaderContainer from "workbench/query/StepperHeaderContainer";
import SourceSelectorContainer from "workbench/query/SourceSelectorContainer";
import ColumnsSelectorContainer from "workbench/query/ColumnsSelectorContainer";
import ConstraintSelectorContainer from "workbench/query/ConstraintSelectorContainer";
import ConfigActionsContainer from "workbench/query/ConfigActionsContainer";

function getStepContent(currentStep) {
  let Component;

  switch (currentStep) {
    case 0:
      Component = <SourceSelectorContainer />;
      break;

    case 1:
      Component = <ColumnsSelectorContainer />;
      break;

    case 2:
      Component = <ConstraintSelectorContainer />;
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

const QueryConfig = ({ isLoading, currentStep, completedSteps }) => (
  <BackgroundLoadingContainer isLoading={isLoading}>
    <StepperHeaderContainer
      currentStep={currentStep}
      completedSteps={completedSteps}
    />
    <HelperText currentStep={currentStep} />
    {getStepContent(currentStep)}
    <ConfigActionsContainer
      currentStep={currentStep}
      completedSteps={completedSteps}
    />
  </BackgroundLoadingContainer>
);

QueryConfig.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  currentStep: PropTypes.number.isRequired,
  completedSteps: PropTypes.array.isRequired
};

export default QueryConfig;
