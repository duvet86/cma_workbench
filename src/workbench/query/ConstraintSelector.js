import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";

import ConstraintIcon from "@material-ui/icons/FilterList";

import SelectInput from "common/select/SelectInput";

const styles = theme => ({
  constraintTargetSelect: {
    marginBottom: 30
  },
  constraintIconColour: {
    fill: "#2c5367"
  },
  formControl: {
    margin: theme.spacing.unit,
    width: "48%"
  }
});

const ConstraintSelector = ({
  classes,
  contraintTargets,
  handledAddQueryConstraint,
  constraints
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
    {constraints.length > 0 && (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Constraint on</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {constraints.map(({ ConstraintId, label }) => (
              <TableRow key={ConstraintId}>
                <TableCell>{label}</TableCell>
                <TableCell>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">
                      Constraint Type
                    </InputLabel>
                    <Select
                      value={""}
                      onChange={this.handleChange}
                      input={<Input name="age" id="age-simple" />}
                      autoWidth
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="name-input">Value</InputLabel>
                    <Input id="name-input" />
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )}
  </Fragment>
);

ConstraintSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  contraintTargets: PropTypes.array.isRequired,
  handledAddQueryConstraint: PropTypes.func.isRequired,
  constraints: PropTypes.array.isRequired
};

export default withStyles(styles)(ConstraintSelector);
