import React, { createElement, Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { operatorsExtraInfo } from "sideBar/operators/operatorsData";

import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Avatar from "material-ui/Avatar";
import Paper from "material-ui/Paper";
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemIcon
} from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import Divider from "material-ui/Divider";

import SettingsIcon from "material-ui-icons/Settings";

import SelectInput from "common/select/SelectInput";

const styles = theme => ({
  formControl: {
    width: "100%"
  },
  avatar: {
    backgroundColor: operatorsExtraInfo[1].backgroundColor,
    marginRight: 10
  },
  titleContainer: {
    display: "flex",
    alignItems: "flex-end"
  },
  availColumns: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16
  }),
  list: {
    height: 250,
    overflow: "auto"
  }
});

const QueryConfig = ({
  classes,
  isLoading,
  dataServices,
  dataServiceDescription: { Columns },
  queryConfig,
  handleChange
}) => (
  <Fragment>
    <Grid item xs={12} className={classes.titleContainer}>
      <Avatar className={classes.avatar}>
        {createElement(operatorsExtraInfo[1].IconComponent)}
      </Avatar>
      <Typography variant="title" gutterBottom>
        Configure Query
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <SelectInput
        inputLabel="Source"
        helperText="What is the source of this query?"
        value={queryConfig.TargetDataServiceId}
        options={dataServices}
        handleChange={handleChange}
      />
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.availColumns}>
        <Typography variant="subheading">Available Columns</Typography>
        <List className={classes.list}>
          {Columns.map(({ ColumnName, Label }) => (
            <Fragment key={ColumnName}>
              <ListItem
                disableGutters
                dense
                button
                className={classes.listItem}
              >
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={Label} />
                <ListItemSecondaryAction>
                  <Checkbox />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </Fragment>
          ))}
        </List>
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.availColumns}>
        <Typography variant="subheading">Selected Columns</Typography>
        <List className={classes.list} />
      </Paper>
    </Grid>
  </Fragment>
);

QueryConfig.propTypes = {
  classes: PropTypes.object.isRequired,
  dataServices: PropTypes.array.isRequired,
  dataServiceDescription: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  queryConfig: PropTypes.object.isRequired
};

export default withStyles(styles)(QueryConfig);
