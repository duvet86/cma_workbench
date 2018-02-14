import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  setUsername = e => {
    this.setState({ username: e.target.value });
  };

  setPassword = e => {
    this.setState({ password: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.submitHandler(username, password);
  };

  render() {
    const { classes } = this.props;

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.submitHandler}
      >
        <TextField
          required
          id="username"
          label="username"
          className={classes.textField}
          onChange={this.setUsername}
          margin="normal"
          placeholder="Placeholder"
        />
        <TextField
          required
          id="password"
          label="Password"
          className={classes.textField}
          onChange={this.setPassword}
          variant="password"
          autoComplete="current-password"
          margin="normal"
          placeholder="Placeholder"
        />
        <Button
          type="submit"
          variant="raised"
          color="primary"
          className={classes.button}
        >
          Submit
        </Button>
      </form>
    );
  }
}

Login.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  token: PropTypes.string
};

export default withStyles(styles)(Login);
