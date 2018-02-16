import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

const style = theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit
  }
});

class ToolBarItem extends React.Component {
  render() {
    const { children } = this.props;

    return <Button size="small">{children}</Button>;
  }
}

ToolBarItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(ToolBarItem);
