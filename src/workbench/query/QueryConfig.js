import React, { createElement, Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { operatorsExtraInfo } from "sideBar/operators/operatorsData";

import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Stepper, { Step, StepButton } from "material-ui/Stepper";
import Avatar from "material-ui/Avatar";
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "material-ui/ExpansionPanel";
import Card, { CardHeader } from "material-ui/Card";
import Button from "material-ui/Button";

import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import InfoIcon from "material-ui-icons/InfoOutline";

import { BackgroundLoadingContainer } from "common/loading";
import SelectInput from "common/select/SelectInput";
import ColumnSelector from "workbench/query/ColumnSelector";

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
    alignItems: "center",
    position: "fixed",
    width: "99%",
    backgroundColor: "white",
    zIndex: 2,
    borderBottom: "1px solid #eee"
  },
  title: {
    marginRight: 15
  },
  stepper: {
    padding: 0,
    width: "86%"
  },
  stepTitle: {
    marginTop: 70
  },
  paper: {
    display: "flex",
    alignItems: "center",
    padding: 10
  },
  actionButtons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    margin: theme.spacing.unit
  }
});

const stepLabels = ["Source", "Columns", "Constraints", "Summary"];

function getStepHelperText(step, classes) {
  let title = "";
  let text = "";

  switch (step) {
    case 0:
      title = "Query source";
      text =
        "Select from the drop down the source of your query. It can be a data source or an existing query. Once you are done go to the next step clicking on the next button.";
      break;
    case 1:
      title = "Query columns";
      text =
        "Each source presents a list of available columns. You can search for a particular column using the search input. Click on a column on the available list to move it to the selected list. To remove a column from the selected list click on it again.";
      break;
    default:
      return null;
  }

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar>
              <InfoIcon />
            </Avatar>
          }
          title={title}
          subheader={text}
        />
      </Card>
    </Grid>
  );
}

function getStepContent(step, classes, props) {
  switch (step) {
    case 0:
      return (
        <Grid item xs={12}>
          <SelectInput
            noClear
            inputLabel="Source"
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
      <Grid item xs={12} className={classes.titleContainer}>
        <Avatar className={classes.avatar}>
          {createElement(operatorsExtraInfo[1].IconComponent)}
        </Avatar>
        <Typography variant="title" className={classes.title}>
          Configure Query
        </Typography>
        <Stepper
          classes={{ root: classes.stepper }}
          nonLinear
          activeStep={currentStep}
        >
          {stepLabels.map((label, index) => {
            return (
              <Step key={label}>
                <StepButton
                  onClick={handleStep(index)}
                  disabled={completedSteps[index] == null}
                  completed={completedSteps[index]}
                >
                  {label}
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
      </Grid>
      <Grid item xs={12} className={classes.stepTitle}>
        <Typography variant="headline">{stepLabels[currentStep]}</Typography>
      </Grid>
      {getStepHelperText(currentStep, classes)}
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
  handleRemoveQueryColumn: PropTypes.func.isRequired
};

export default withStyles(styles)(QueryConfig);
