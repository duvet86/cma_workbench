import logo from "login/logo.svg";

import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const styles = theme => ({
  "@keyframes appLogoSpin": {
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(360deg)"
    }
  },
  container: {
    marginTop: theme.spacing.unit * 10
  },
  paper: {
    padding: theme.spacing.unit * 3
  },
  form: {
    marginTop: theme.spacing.unit * 3
  },
  passwordControl: {
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3
  },
  logoContainer: {
    textAlign: "center"
  },
  appLogo: {
    animation: "appLogoSpin infinite 20s linear",
    height: "50px"
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPassword: false
    };
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = e => {
    e.preventDefault();
  };

  handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  submitHandler = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.submitHandler(username, password);
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.container}
        spacing={0}
      >
        <Grid item md={3} xs={11}>
          <Paper className={classes.paper}>
            <div className={classes.logoContainer}>
              <img src={logo} className={classes.appLogo} alt="logo" />
            </div>
            <Typography component="p" align="center">
              Reactive
            </Typography>
            <Typography variant="headline" component="h3" align="center">
              Connected Mine Analitycs
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={this.submitHandler}
            >
              <FormControl fullWidth>
                <InputLabel htmlFor="username">User Name</InputLabel>
                <Input
                  id="username"
                  onChange={this.handleChange("username")}
                  autoComplete="username"
                />
              </FormControl>
              <FormControl className={classes.passwordControl} fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type={this.state.showPassword ? "text" : "password"}
                  onChange={this.handleChange("password")}
                  autoComplete="current-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={this.handleClickShowPasssword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.state.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button
                type="submit"
                variant="raised"
                color="secondary"
                fullWidth
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  submitHandler: PropTypes.func.isRequired
};

export default withStyles(styles)(Login);
