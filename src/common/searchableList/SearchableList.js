import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import { List as VirtualizedList, AutoSizer } from "react-virtualized";

import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import List from "material-ui/List";
import IconButton from "material-ui/IconButton";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl } from "material-ui/Form";

import ClearIcon from "@material-ui/icons/Clear";

import rowRenderer from "common/searchableList/rowRenderer";

const styles = theme => ({
  paper: {
    padding: 10
  },
  list: {
    height: "100%"
  },
  listItem: {
    paddingLeft: 15
  },
  listItemText: {
    display: "flex"
  },
  listItemTextPrimary: {
    flexBasis: "35%"
  },
  iconColour: {
    fill: "#003b86"
  }
});

const SearchableList = ({
  classes,
  label,
  totItems,
  searchableColumns,
  searchString,
  onItemClick,
  handleChange,
  handleClickClearIcon
}) => (
  <Paper className={classes.paper}>
    <Typography variant="subheading">{`${label} (${totItems})`}</Typography>
    <List className={classes.list} component="div" disablePadding>
      <FormControl fullWidth>
        <InputLabel>Search</InputLabel>
        <Input
          value={searchString}
          onChange={handleChange}
          disabled={searchableColumns.length === 0}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Clear"
                onClick={handleClickClearIcon}
                onMouseDown={handleClickClearIcon}
              >
                {searchString ? <ClearIcon /> : null}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <AutoSizer disableHeight>
        {({ width }) => (
          <VirtualizedList
            width={width}
            height={245}
            rowCount={searchableColumns.length}
            rowHeight={41}
            rowRenderer={rowRenderer(classes, searchableColumns, onItemClick)}
          />
        )}
      </AutoSizer>
    </List>
  </Paper>
);

SearchableList.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  totItems: PropTypes.number.isRequired,
  searchableColumns: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchableList);
