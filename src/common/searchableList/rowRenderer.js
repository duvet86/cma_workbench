import React from "react";

import { ListItem, ListItemText, ListItemIcon } from "material-ui/List";
import Divider from "material-ui/Divider";

import SettingsIcon from "@material-ui/icons/Settings";

const rowRenderer = (classes, columns, onItemClick) => ({
  index,
  isScrolling,
  isVisible,
  key,
  parent,
  style
}) => {
  const queryColumn = columns[index];
  const handleClick = () => onItemClick(queryColumn);

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

export default rowRenderer;
