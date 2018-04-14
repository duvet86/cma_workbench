import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";
import { MenuItem } from "material-ui/Menu";
import Typography from "material-ui/Typography";
import { ListItemIcon } from "material-ui/List";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ClearIcon from "@material-ui/icons/Clear";

import VirtualizedSelect from "react-virtualized-select";

const ITEM_HEIGHT = 48;
const HEIGHT_MULTIPLIER = 8;

const styles = theme => ({
  root: {
    padding: "0 0 0 10px"
  },
  "@global": {
    ".Select-control": {
      display: "flex",
      alignItems: "center",
      border: 0,
      height: "auto",
      background: "transparent",
      "&:hover": {
        boxShadow: "none"
      }
    },
    ".Select-multi-value-wrapper": {
      flexGrow: 1,
      display: "flex",
      flexWrap: "wrap"
    },
    ".Select--multi .Select-input": {
      margin: 0
    },
    ".Select.has-value.is-clearable.Select--single > .Select-control .Select-value": {
      padding: 0
    },
    ".Select-noresults": {
      padding: theme.spacing.unit * 2
    },
    ".Select-input": {
      display: "inline-flex !important",
      padding: 0,
      height: "auto"
    },
    ".Select-input input": {
      background: "transparent",
      border: 0,
      padding: 0,
      cursor: "default",
      display: "inline-block",
      fontFamily: "inherit",
      fontSize: "inherit",
      margin: 0,
      outline: 0
    },
    ".Select-placeholder, .Select--single .Select-value": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(16),
      padding: 0
    },
    ".Select-placeholder": {
      opacity: 0.42,
      color: theme.palette.common.black
    },
    ".Select-menu-outer": {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      position: "absolute",
      left: 0,
      top: `calc(100% + ${theme.spacing.unit}px)`,
      width: "100%",
      zIndex: 2,
      maxHeight: ITEM_HEIGHT * HEIGHT_MULTIPLIER
    },
    ".Select.is-focused:not(.is-open) > .Select-control": {
      boxShadow: "none"
    },
    ".Select-menu": {
      maxHeight: ITEM_HEIGHT * HEIGHT_MULTIPLIER,
      overflowY: "auto"
    },
    ".Select-menu div": {
      boxSizing: "content-box"
    },
    ".Select-arrow-zone, .Select-clear-zone": {
      color: theme.palette.action.active,
      cursor: "pointer",
      height: 21,
      width: 21,
      zIndex: 1
    },
    // Only for screen readers. We can't use display none.
    ".Select-aria-only": {
      position: "absolute",
      overflow: "hidden",
      clip: "rect(0 0 0 0)",
      height: 1,
      width: 1,
      margin: -1
    }
  }
});

const OptionRenderer = (classes, OptionsIcon, iconClassName) => ({
  focusedOption,
  focusedOptionIndex,
  focusOption,
  key,
  labelKey,
  option,
  optionIndex,
  options,
  selectValue,
  style,
  valueArray,
  valueKey
}) => {
  const handleClick = event => {
    selectValue(option);
  };
  const handleFocus = () => focusOption(option);
  const isSelected = valueArray.indexOf(option) >= 0;

  return (
    <MenuItem
      key={key}
      onFocus={handleFocus}
      selected={isSelected}
      onClick={handleClick}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
        ...style
      }}
      className={classes.root}
    >
      {OptionsIcon && (
        <ListItemIcon>
          <OptionsIcon className={iconClassName} />
        </ListItemIcon>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <div style={{ marginRight: 15 }}>{option.label}</div>
        <Typography variant="caption">{option.secondaryLabel}</Typography>
      </div>
    </MenuItem>
  );
};

const ArrowRenderer = ({ isOpen }) =>
  isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;

ArrowRenderer.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

const NoClearRenderer = () => <span />;
const ClearRenderer = () => <ClearIcon />;

const SelectedValueComponent = (classes, OptionsIcon, iconClassName) => ({
  children
}) => (
  <div className="Select-value">
    {OptionsIcon && (
      <ListItemIcon>
        <OptionsIcon className={iconClassName} />
      </ListItemIcon>
    )}
    {children}
  </div>
);

SelectedValueComponent.propTypes = {
  children: PropTypes.string.isRequired
};

const SelectWrapped = ({
  classes,
  noClear,
  OptionsIcon,
  iconClassName,
  ...rest
}) => (
  <VirtualizedSelect
    maxHeight={ITEM_HEIGHT * HEIGHT_MULTIPLIER}
    optionRenderer={OptionRenderer(classes, OptionsIcon, iconClassName)}
    noResultsText={<Typography>{"No results found"}</Typography>}
    arrowRenderer={ArrowRenderer}
    clearRenderer={noClear ? NoClearRenderer : ClearRenderer}
    valueComponent={SelectedValueComponent(classes, OptionsIcon, iconClassName)}
    {...rest}
  />
);

SelectWrapped.propTypes = {
  classes: PropTypes.object.isRequired
};

const SelectInput = ({
  classes,
  value,
  isFocused,
  options,
  handleChange,
  inputLabel,
  helperText,
  noClear,
  OptionsIcon,
  iconClassName
}) => (
  <FormControl fullWidth>
    {inputLabel && <InputLabel htmlFor="select-input">{inputLabel}</InputLabel>}
    <Input
      fullWidth
      inputComponent={SelectWrapped}
      value={value || ""}
      onChange={handleChange}
      id="select-input"
      name="select-input"
      placeholder=""
      inputProps={{
        classes,
        noClear,
        simpleValue: true,
        options,
        OptionsIcon,
        iconClassName
      }}
    />
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
);

SelectInput.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  OptionsIcon: PropTypes.func,
  iconClassName: PropTypes.string
};

export default withStyles(styles)(SelectInput);
