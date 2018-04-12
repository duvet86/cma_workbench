import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import { List as VirtualizedList, AutoSizer } from "react-virtualized";

import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import List, { ListItem, ListItemText, ListItemIcon } from "material-ui/List";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl } from "material-ui/Form";

import ClearIcon from "@material-ui/icons/Clear";
import SettingsIcon from "@material-ui/icons/Settings";

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

class ColumnSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      searchableColumns: props.columns
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.columns.length !== prevState.searchableColumns.length) {
      return {
        searchableColumns: nextProps.columns
      };
    }
    return null;
  }

  handleClickClearIcon = () => {
    this.setState({
      searchString: "",
      searchableColumns: this.props.columns
    });
  };

  handleChange = event => {
    this.setState({
      searchString: event.target.value,
      searchableColumns: event.target.value
        ? this.props.columns.filter(({ Label }) =>
            Label.toLowerCase().includes(event.target.value.toLowerCase())
          )
        : this.props.columns
    });
  };

  render() {
    const { classes, label, columns, onColumnClick } = this.props;
    const { searchableColumns } = this.state;

    return (
      <Paper className={classes.paper}>
        <Typography variant="subheading">
          {`${label} (${columns.length})`}
        </Typography>
        <List className={classes.list} component="div" disablePadding>
          <FormControl fullWidth>
            <InputLabel>Search</InputLabel>
            <Input
              value={this.state.searchString}
              onChange={this.handleChange}
              disabled={searchableColumns.length === 0}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Clear"
                    onClick={this.handleClickClearIcon}
                    onMouseDown={this.handleClickClearIcon}
                  >
                    {this.state.searchString ? <ClearIcon /> : null}
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
                rowRenderer={rowRenderer(
                  classes,
                  searchableColumns,
                  onColumnClick
                )}
              />
            )}
          </AutoSizer>
        </List>
      </Paper>
    );
  }
}

ColumnSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  onColumnClick: PropTypes.func.isRequired
};

export default withStyles(styles)(ColumnSelector);
