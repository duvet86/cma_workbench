import React, { Component, Fragment } from "react";

import Snackbar from "material-ui/Snackbar";
import Button from "material-ui/Button";

import WorkbenchToolbar from "workbench/WorkbenchToolbar";
import DroppableCanvas from "workbench/DroppableCanvas";

class WorkbenchContainer extends Component {
  state = {
    tipOpen: true
  };

  handleTipClose = () => {
    this.setState({ tipOpen: false });
  };

  render() {
    const { tipOpen } = this.state;

    return (
      <Fragment>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          autoHideDuration={3000}
          open={tipOpen}
          onClose={this.handleTipClose}
          SnackbarContentProps={{
            "aria-describedby": "message-id"
          }}
          message={
            <span id="message-id">
              Tip: drag and drop an icon on the canvas!
            </span>
          }
          action={
            <Button color="inherit" size="small" onClick={this.handleTipClose}>
              Ok
            </Button>
          }
        />
        <WorkbenchToolbar />
        <DroppableCanvas />
      </Fragment>
    );
  }
}

export default WorkbenchContainer;
