import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Tabs, { Tab } from "material-ui/Tabs";

import tabButtons from "sideBar/tabsData";

const styles = {
  tabRoot: {
    minWidth: 0,
    flex: "inherit"
  }
};

const NavigationTabs = ({ classes, open }) => (
  <Tabs value={0} indicatorColor="primary" textColor="primary">
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavigationTabs);
