import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemText } from "material-ui/List";
import Collapse from "material-ui/transitions/Collapse";
import Divider from "material-ui/Divider";

import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";

import Item from "sideBar/myItems/Item";

const styles = theme => ({
  icon: {
    color: "#696969"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

const Folder = ({ classes, label, children, handleClick, expanded }) => (
  <Fragment>
    <ListItem button onClick={handleClick}>
      {expanded ? (
        <FolderOpenIcon className={classes.icon} />
      ) : (
        <FolderIcon className={classes.icon} />
      )}
      <ListItemText
        primary={label}
        classes={{
          primary: classes.heading
        }}
      />
    </ListItem>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <List disablePadding>
        {children.map(
          ({ ChildType, ...rest }) =>
            ChildType === "F" ? (
              <Folder key={rest.ChildFolderId} {...rest.ChildFolder} />
            ) : (
              <Item key={rest.ChildItemId} {...rest.ChildItem} nested />
            )
        )}
      </List>
    </Collapse>
    <Divider />
  </Fragment>
);

Folder.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired
};

export default withStyles(styles)(Folder);
