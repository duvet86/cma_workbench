import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Tabs, { Tab } from "material-ui/Tabs";

import tabButtons from "sideBar/navigationTabs/tabsData";

const styles = theme => ({
  tabRoot: {
    minWidth: 0,
    maxWidth: "100%"
  },
  labelContainer: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2
    }
  },
  textColorPrimary: {
    color: "black"
  }
});

const NavigationTabs = ({ classes, selectedTab, tabsState, handleChange }) => (
  <Tabs
    fullWidth
    value={selectedTab}
    onChange={handleChange}
    indicatorColor="primary"
    textColor="primary"
  >
    {tabButtons
      .filter(({ disabled }, index) => !tabsState[index])
      .map(({ id, label }, index) => (
        <Tab
          key={id}
          label={label}
          classes={{
            root: classes.tabRoot,
            labelContainer: classes.labelContainer,
            textColorPrimary: classes.textColorPrimary
          }}
        />
      ))}
    />
  </Tabs>
);

NavigationTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedTab: PropTypes.number.isRequired,
  tabsState: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default withStyles(styles)(NavigationTabs);
