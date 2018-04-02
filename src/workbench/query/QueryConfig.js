import React, { createElement, Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { operatorsExtraInfo } from "sideBar/operators/operatorsData";

import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Stepper, { Step, StepLabel, StepContent } from "material-ui/Stepper";
import Avatar from "material-ui/Avatar";

import { BackgroundLoadingContainer } from "common/loading";
import SelectInput from "common/select/SelectInput";
import ColumnSelector from "workbench/query/ColumnSelector";

import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "material-ui/ExpansionPanel";

import ExpandMoreIcon from "material-ui-icons/ExpandMore";

const styles = theme => ({
  formControl: {
    width: "100%"
  },
  avatar: {
    backgroundColor: operatorsExtraInfo[1].backgroundColor,
    marginRight: 10
  },
  titleContainer: {
    display: "flex",
    alignItems: "center"
  },
  stepper: {
    padding: theme.spacing.unit
  }
});

const steps = ["Source", "Columns", "Constraints", "Preview"];

function getStepContent(step, classes, props) {
  switch (step) {
    case 0:
      return (
        <Grid item xs={12}>
          <SelectInput
            noClear
            inputLabel="Select a source"
            helperText="What is the source of this query?"
            value={props.elementConfig.TargetDataViewId}
            options={props.dataServices}
            handleChange={props.handleChangeDataService}
          />
        </Grid>
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
      return props.elementConfig.Constraints.map(({ ConstraintId }) => (
        <Fragment key={ConstraintId}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Expansion Panel 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>asd</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Fragment>
      ));
    default:
      return "Unknown step";
  }
}

const QueryConfig = ({ classes, isLoading, step, ...props }) => {
  const renderStepperContent = props => props.children;

  return (
    <BackgroundLoadingContainer isLoading={isLoading}>
      <Grid item xs={12} className={classes.titleContainer}>
        <Avatar className={classes.avatar}>
          {createElement(operatorsExtraInfo[1].IconComponent)}
        </Avatar>
        <Typography variant="title">Configure Query</Typography>
      </Grid>
      <Grid item xs={12}>
        <Stepper
          classes={{ root: classes.stepper }}
          activeStep={step}
          orientation="vertical"
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent transition={renderStepperContent}>
                {getStepContent(index, classes, props)}
              </StepContent>
            </Step>
          ))}
        </Stepper>
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
  handleChangeDataService: PropTypes.func.isRequired,
  handleAddQueryColumn: PropTypes.func.isRequired,
  handleRemoveQueryColumn: PropTypes.func.isRequired
};

export default withStyles(styles)(QueryConfig);
