import React from "react";
import PropTypes from "prop-types";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const CustomBackdropComponent = ({ onClick }) => (
  <div
    style={{
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
      position: "fixed"
    }}
    onClick={onClick}
    aria-hidden="true"
  />
);

const IntervalTypeSelector = ({
  className,
  intervalTypes,
  interval,
  onChange
}) => (
  <FormControl className={className}>
    <InputLabel htmlFor="interval">Interval</InputLabel>
    <Select
      MenuProps={{
        BackdropComponent: CustomBackdropComponent
      }}
      value={interval.type}
      onChange={onChange}
      input={<Input name="interval" id="interval" />}
    >
      {intervalTypes.map(({ IntervalType, Label }) => (
        <MenuItem key={IntervalType} value={IntervalType}>
          {Label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

IntervalTypeSelector.propTypes = {
  intervalTypes: PropTypes.array.isRequired,
  interval: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default IntervalTypeSelector;
