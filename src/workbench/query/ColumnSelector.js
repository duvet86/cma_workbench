import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import { List as VirtualizedList, AutoSizer } from "react-virtualized";

import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import List, { ListItem, ListItemText, ListItemIcon } from "material-ui/List";
import Divider from "material-ui/Divider";

import SettingsIcon from "material-ui-icons/Settings";

const styles = theme => ({
  columnsTitle: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 5
  },
  list: {
    height: 246
  },
  listItem: {
    paddingLeft: 15
  },
  listItemText: {
    display: "flex"
  },
  listItemTextPrimary: {
    marginRight: 15
  },
  iconColour: {
    fill: "#003b86"
  }
});

const rowRenderer = (classes, columns, onColumnClick) => ({
  index,
  isScrolling,
  isVisible,
  key,
  parent,
  style
}) => {
  const queryColumn = columns[index];
  const handleClick = () => onColumnClick(queryColumn);

  return (
    <div key={key} style={style}>
      <ListItem
        onClick={handleClick}
        disableGutters
        dense
        button
        className={classes.listItem}
        ContainerComponent="div"
      >
        <ListItemIcon>
          <SettingsIcon className={classes.iconColour} />
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.listItemTextPrimary
          }}
          className={classes.listItemText}
          primary={queryColumn.Label}
          secondary={`(${queryColumn.DataType})`}
        />
      </ListItem>
      <Divider />
    </div>
  );
};

const ColumnSelector = ({ classes, label, columns, onColumnClick }) => (
  <Paper>
    <Typography variant="subheading" className={classes.columnsTitle}>
      {`${label} (${columns.length})`}
    </Typography>
    <List className={classes.list} component="div" disablePadding>
      <Divider />
      <AutoSizer>
        {({ height, width }) => (
          <VirtualizedList
            width={width}
            height={height}
            rowCount={columns.length}
            rowHeight={41}
            rowRenderer={rowRenderer(classes, columns, onColumnClick)}
          />
        )}
      </AutoSizer>
    </List>
  </Paper>
);

ColumnSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  onColumnClick: PropTypes.func.isRequired
};

export default withStyles(styles)(ColumnSelector);
