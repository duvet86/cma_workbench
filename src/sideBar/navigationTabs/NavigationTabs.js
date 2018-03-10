import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Tabs, { Tab } from "material-ui/Tabs";

import tabButtons from "sideBar/navigationTabs/tabsData";

const styles = theme => ({
  tabRoot: {
    minWidth: 0,
    flex: "auto"
  },
  labelContainer: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2
    }
  },
  textColorPrimary: {
    color: "black"
  },
  textColorPrimarySelected: {
    color: theme.palette.primary.main
  },
  textColorPrimaryDisabled: {
    color: theme.palette.text.disabled
  }
});

const NavigationTabs = ({
  classes,
  visibleTab,
  disabledTabs,
  handleChange
}) => (
  <Tabs
    value={visibleTab}
    onChange={handleChange}
    indicatorColor="primary"
    textColor="primary"
  >
    {tabButtons.map(({ id, label, disabled }, index) => (
      <Tab
        key={id}
        label={label}
        disabled={disabledTabs[index]}
        classes={{
          root: classes.tabRoot,
          labelContainer: classes.labelContainer,
          textColorPrimary: classes.textColorPrimary,
          textColorPrimarySelected: classes.textColorPrimarySelected,
          textColorPrimaryDisabled: classes.textColorPrimaryDisabled
        }}
      />
    ))}
    />
  </Tabs>
);

NavigationTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  visibleTab: PropTypes.number.isRequired,
  disabledTabs: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default withStyles(styles)(NavigationTabs);
