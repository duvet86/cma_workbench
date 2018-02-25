import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";

import withLoading from "lib/withLoading";

const styles = theme => ({
  list: {
    padding: 0
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

const WorkbenchTools = ({ classes, operators }) => (
  <List className={classes.list}>
    {operators.map(({ OperatorServiceId, Label }) => (
      <Fragment key={OperatorServiceId}>
        <ListItem>
          <ListItemText
            primary={Label}
            classes={{
              primary: classes.heading
            }}
          />
        </ListItem>
        <Divider />
      </Fragment>
    ))}
  </List>
);

WorkbenchTools.propTypes = {
  classes: PropTypes.object.isRequired,
  operators: PropTypes.array.isRequired
};

export default withLoading(withStyles(styles)(WorkbenchTools));
