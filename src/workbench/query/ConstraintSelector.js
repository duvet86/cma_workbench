import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Input from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";
import IconButton from "material-ui/IconButton";

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
  handledUpdateQueryConstraintValues
}) => {
  const handleUpdateType = constraintId => event =>
    handledUpdateQueryConstraintType(constraintId, event.target.value);

  const handleUpdateValues = constraintId => event =>
    handledUpdateQueryConstraintValues(constraintId, event.target.value);

  return (
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
          ({ ConstraintId, DataType, FilterType, Values, label }) => (
            <Paper key={ConstraintId} className={classes.paper}>
              <ConstraintIcon className={classes.constraintIcon} />
              <Typography variant="subheading" className={classes.targetLabel}>
                {label}
              </Typography>
              <FormControl className={classes.typeSelect}>
                <Select
                  value={FilterType}
                  onChange={handleUpdateType(ConstraintId)}
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
                  value={Values}
                  onChange={handleUpdateValues(ConstraintId)}
                />
              </FormControl>
              <IconButton className={classes.deleteButton} aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </Paper>
          )
        )}
    </Fragment>
  );
};

ConstraintSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  contraintTargets: PropTypes.array.isRequired,
  queryConstraints: PropTypes.array.isRequired,
  handledAddQueryConstraint: PropTypes.func.isRequired,
  handledUpdateQueryConstraintType: PropTypes.func.isRequired
};

export default withStyles(styles)(ConstraintSelector);
