import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Tabs, { Tab } from "material-ui/Tabs";

import tabButtons from "sideBar/navigationTabs/tabsData";

const styles = {
  tabRoot: {
    minWidth: 0,
    flex: "inherit"
  }
};

const NavigationTabs = ({ classes, visibleTab, handleChange }) => (
  <Tabs
    value={visibleTab}
    onChange={handleChange}
    indicatorColor="primary"
    textColor="primary"
  >
    {tabButtons.map(({ id, label, disabled }) => (
      <Tab
        key={id}
        label={label}
        disabled={disabled}
        classes={{
          root: classes.tabRoot
        }}
      />
    ))}
    />
  </Tabs>
);

NavigationTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  visibleTab: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default withStyles(styles)(NavigationTabs);
