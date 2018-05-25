import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";

const styles = theme => ({
  valueInput: {
    flexGrow: 1,
    margin: theme.spacing.unit
  }
});

const ConstraintSelector = ({
  classes,
  displayValue,
  constraintId,
  dataType,
  handledUpdateQueryConstraintValues
}) => (
  <FormControl className={classes.valueInput}>
    <Input
      autoFocus
      value={displayValue}
      onChange={handledUpdateQueryConstraintValues(constraintId, dataType)}
    />
  </FormControl>
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
