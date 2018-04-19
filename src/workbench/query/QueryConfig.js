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
  switch (currentStep) {
    case 0:
      return <SourceSelectorContainer />;

    case 1:
      return <ColumnsSelectorContainer />;

    case 2:
      return <ConstraintSelectorContainer />;

    default:
      return "Unknown step";
  }
}

const QueryConfig = ({ isLoading, currentStep, completedSteps }) => (
  <BackgroundLoadingContainer isLoading={isLoading}>
    <StepperHeaderContainer
      currentStep={currentStep}
      completedSteps={completedSteps}
    />
    <HelperText currentStep={currentStep} />
    <Grid item xs={12}>
      {getStepContent(currentStep)}
    </Grid>
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
