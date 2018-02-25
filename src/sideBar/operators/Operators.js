import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import Avatar from "material-ui/Avatar";

import withLoading from "lib/withLoading";

import { operatorsExtraInfo } from "sideBar/operators/operatorsData";

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

const Operators = ({ classes, operators }) => (
  <List>
    {operators.map(({ OperatorServiceId, Label, Description }) => (
      <Fragment key={OperatorServiceId}>
        <ListItem>
          <ListItemText
            primary={Label}
            secondary={Description}
            classes={{
              primary: classes.heading
            }}
          />
          <Avatar
            style={{
              backgroundColor:
                operatorsExtraInfo[OperatorServiceId].backgroundColor
            }}
          >
            {React.createElement(
              operatorsExtraInfo[OperatorServiceId].IconComponent
            )}
          </Avatar>
        </ListItem>
        <Divider />
      </Fragment>
    ))}
  </List>
);

Operators.propTypes = {
  classes: PropTypes.object.isRequired,
  operators: PropTypes.array.isRequired
};

export default withLoading(withStyles(styles)(Operators));
