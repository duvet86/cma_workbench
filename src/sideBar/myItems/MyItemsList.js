import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import withLoading from "lib/withLoading";

import List from "material-ui/List";

import FolderContainer from "sideBar/myItems/FolderContainer";
import Item from "sideBar/myItems/Item";

const styles = {
  list: {
    padding: 0
  },
  listItem: {
    cursor: "pointer"
  },
  avatar: {
    width: 35,
    height: 35
  },
  icon: {
    width: 25,
    height: 25
  }
};

const MyItemsList = ({ classes, items, location }) => (
  <List className={classes.list}>
    {items.myItems.map(
      ({ ChildType, ...props }) =>
        ChildType === "F" ? (
          <FolderContainer
            key={props.ChildFolderId}
            {...props.ChildFolder}
            location={location}
          />
        ) : (
          <Item
            key={props.ChildItemId}
            {...props.ChildItem}
            location={location}
          />
        )
    )}
  </List>
);

MyItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withLoading(withStyles(styles)(MyItemsList));
