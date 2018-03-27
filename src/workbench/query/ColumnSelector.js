import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import { List as VirtualizedList, AutoSizer } from "react-virtualized";

import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
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

const styles = theme => ({
  columnsTitle: {
    padding: 15
  },
  list: {
    height: 250,
    overflow: "auto"
  },
  listItem: {
    paddingLeft: 15
  }
});

const rowRenderer = (classes, columns, handleAddColumn) => ({
  index,
  isScrolling,
  isVisible,
  key,
  parent,
  style
}) => {
  const queryColumn = columns[index];
  const addQueryColumn = () => handleAddColumn(queryColumn);

  return (
    <div key={key} style={style}>
      <ListItem
        onClick={addQueryColumn}
        disableGutters
        dense
        button
        className={classes.listItem}
        ContainerComponent="div"
      >
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary={queryColumn.Label} />
        <ListItemSecondaryAction>
          <Checkbox />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </div>
  );
};

const ColumnSelector = ({
  classes,
  availableColumns,
  selectedColumns,
  handleAddColumn
}) => (
  <Fragment>
    <Grid item xs={6}>
      <Paper>
        <Typography variant="subheading" className={classes.columnsTitle}>
          Available Columns
        </Typography>
        <List className={classes.list} component="div">
          <AutoSizer>
            {({ height, width }) => (
              <VirtualizedList
                width={width}
                height={height}
                rowCount={availableColumns.length}
                rowHeight={40}
                rowRenderer={rowRenderer(
                  classes,
                  availableColumns,
                  handleAddColumn
                )}
              />
            )}
          </AutoSizer>
        </List>
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.availColumns}>
        <Typography variant="subheading" className={classes.columnsTitle}>
          Selected Columns
        </Typography>
        <List className={classes.list}>
          {selectedColumns &&
            selectedColumns.map(({ ColumnName, Label }) => (
              <Fragment key={ColumnName}>
                <ListItem
                  disableGutters
                  dense
                  button
                  className={classes.listItem}
                  ContainerComponent="div"
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
  </Fragment>
);

ColumnSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  handleAddColumn: PropTypes.func.isRequired,
  availableColumns: PropTypes.array.isRequired,
  selectedColumns: PropTypes.array
};

export default withStyles(styles)(ColumnSelector);