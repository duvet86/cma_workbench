import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/Menu";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";

import ConstraintIcon from "@material-ui/icons/FilterList";
import DeleteIcon from "@material-ui/icons/Delete";

import SelectInput from "common/select/SelectInput";

const constraintIconColour = "#2c5367";

const styles = theme => ({
  constraintTargetSelect: {
    marginBottom: 30
  },
  constraintIconColour: {
    fill: constraintIconColour
  },
  paper: {
    display: "flex",
    alignItems: "center"
  },
  targetLabel: {
    flexBasis: `${theme.spacing.unit * 2}%`,
    margin: theme.spacing.unit
  },
  typeSelect: {
    flexBasis: `${theme.spacing.unit * 2}%`,
    margin: theme.spacing.unit
  },
  valueInput: {
    flexGrow: 1,
    margin: theme.spacing.unit
  },
  constraintIcon: {
    margin: theme.spacing.unit,
    fill: constraintIconColour
  }
});

const ConstraintSelector = ({
  classes,
  contraintTargets,
  queryConstraints,
  filterCapabilities,
  handledAddQueryConstraint,
  handledUpdateQueryConstraintType,
  handledUpdateQueryConstraintValues,
  handledRemoveQueryConstraint
}) => (
  <Fragment>
    <div className={classes.constraintTargetSelect}>
      <SelectInput
        OptionsIcon={ConstraintIcon}
        iconClassName={classes.constraintIconColour}
        inputLabel="Contraint on..."
        options={contraintTargets}
        handleChange={handledAddQueryConstraint}
      />
    </div>
    {queryConstraints.length > 0 &&
      queryConstraints.map(
        ({ ConstraintId, DataType, FilterType, displayValue, label }) => (
          <Paper key={ConstraintId} className={classes.paper}>
            <ConstraintIcon className={classes.constraintIcon} />
            <Typography variant="subheading" className={classes.targetLabel}>
              {label}
            </Typography>
            <FormControl className={classes.typeSelect}>
              <Select
                value={FilterType}
                onChange={handledUpdateQueryConstraintType(ConstraintId)}
                autoWidth
              >
                {filterCapabilities[DataType].map(({ Type, Label }, n) => (
                  <MenuItem key={n} value={Type}>
                    {Label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.valueInput}>
              <Input
                autoFocus
                value={displayValue}
                onChange={handledUpdateQueryConstraintValues(
                  ConstraintId,
                  DataType
                )}
              />
            </FormControl>
            <IconButton
              className={classes.deleteButton}
              aria-label="Delete"
              onClick={handledRemoveQueryConstraint(ConstraintId)}
            >
              <DeleteIcon />
            </IconButton>
          </Paper>
        )
      )}
  </Fragment>
);

ConstraintSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  contraintTargets: PropTypes.array.isRequired,
  queryConstraints: PropTypes.array.isRequired,
  filterCapabilities: PropTypes.object.isRequired,
  handledAddQueryConstraint: PropTypes.func.isRequired,
  handledUpdateQueryConstraintType: PropTypes.func.isRequired,
  handledUpdateQueryConstraintValues: PropTypes.func.isRequired,
  handledRemoveQueryConstraint: PropTypes.func.isRequired
};

export default withStyles(styles)(ConstraintSelector);
