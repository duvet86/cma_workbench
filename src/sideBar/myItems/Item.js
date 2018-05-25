import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import Dashboard from "@material-ui/icons/Dashboard";

const styles = theme => ({
  listItemOpen: {
    paddingLeft: 30
  },
  icon: {
    color: "#696969"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

const Item = ({ classes, ItemId, Label, nested }) => (
  <Fragment>
    <ListItem
      component={NavLink}
      to={`/workbench/${ItemId}`}
      className={nested && classes.listItemOpen}
    >
      <Dashboard className={classes.icon} />
      <ListItemText
        primary={Label}
        classes={{
          primary: classes.heading
        }}
      />
    </ListItem>
    <Divider />
  </Fragment>
);

Item.propTypes = {
  classes: PropTypes.object.isRequired,
  ItemId: PropTypes.string.isRequired,
  Label: PropTypes.string.isRequired,
  nested: PropTypes.bool
};

export default withStyles(styles)(Item);
