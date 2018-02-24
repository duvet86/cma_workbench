import React, { Component } from "react";
import PropTypes from "prop-types";

import { matchPath } from "react-router";

import Folder from "sideBar/myItems/Folder";

class FolderContainer extends Component {
  state = {
    expanded: false
  };

  componentWillMount() {
    const { Children, location } = this.props;
    if (!Children || Children.length === 0) {
      return;
    }

    const match = Children.filter(c => c.ChildType === "I")
      .map(c =>
        matchPath(`/workbench/${c.ChildItemId}`, {
          path: location.pathname,
          exact: true
        })
      )
      .find(m => m && m.isExact);

    if (match) {
      this.setState({ expanded: true });
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  render() {
    const { Label, Children } = this.props;
    const { expanded } = this.state;

    return (
      <Folder
        label={Label}
        children={Children}
        handleClick={this.handleClick}
        expanded={expanded}
      />
    );
  }
}

FolderContainer.propTypes = {
  Label: PropTypes.string.isRequired,
  Children: PropTypes.array.isRequired
};

export default FolderContainer;
