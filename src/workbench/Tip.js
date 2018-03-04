import React from "react";
import PropTypes from "prop-types";

import Snackbar from "material-ui/Snackbar";
import Button from "material-ui/Button";

const Tip = ({ tipOpen, handleTipClose }) => (
  <Snackbar
    anchorOrigin={{ vertical: "top", horizontal: "left" }}
    autoHideDuration={3000}
    open={tipOpen}
    onClose={handleTipClose}
    SnackbarContentProps={{
      "aria-describedby": "message-id"
    }}
    message={
      <span id="message-id">Tip: drag and drop an icon on the canvas!</span>
    }
    action={
      <Button color="inherit" size="small" onClick={handleTipClose}>
        Ok
      </Button>
    }
  />
);

Tip.propTypes = {
  tipOpen: PropTypes.bool.isRequired,
  handleTipClose: PropTypes.func.isRequired
};

export default Tip;
