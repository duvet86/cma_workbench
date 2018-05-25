import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";

import IntervalTypeSelectorContainer from "common/intervalSelector/IntervalTypeSelectorContainer";

const styles = theme => ({
  container: {
    display: "flex"
  },
  intervalTypeSelector: {
    flexBasis: 200,
    margin: theme.spacing.unit
  },
  dateSelector: {
    flexBasis: 350,
    margin: theme.spacing.unit
  },
  smartSelector: {
    flexBasis: 200,
    margin: theme.spacing.unit
  }
});

const IntervalSelector = ({ classes }) => (
  <div className={classes.container}>
    <IntervalTypeSelectorContainer className={classes.intervalTypeSelector} />
    <FormControl className={classes.dateSelector}>
      <InputLabel htmlFor="name-input">Name</InputLabel>
      <Input
        type="date"
        id="name-input"
        startAdornment={
          <InputAdornment position="start">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={this.handleClickShowPassword}
              onMouseDown={this.handleMouseDownPassword}
            >
              {<ArrowLeft />}
            </IconButton>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={this.handleClickShowPassword}
              onMouseDown={this.handleMouseDownPassword}
            >
              {<ArrowRight />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
    <FormControl className={classes.smartSelector}>
      <InputLabel htmlFor="age-simple">Smart Date</InputLabel>
      <Select
        value=""
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
  </div>
);

IntervalSelector.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntervalSelector);
