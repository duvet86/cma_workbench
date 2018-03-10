import React, { createElement, Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { operatorsExtraInfo } from "sideBar/operators/operatorsData";

import MenuItem from "material-ui/Menu/MenuItem";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";
import Select from "material-ui/Select";
import Typography from "material-ui/Typography";
import Avatar from "material-ui/Avatar";

const styles = theme => ({
  formControl: {
    width: "100%"
  },
  avatar: {
    backgroundColor: operatorsExtraInfo[1].backgroundColor,
    marginRight: 10
  }
  // container: {
  //   display: "flex",
  //   flexWrap: "wrap"
  // },
  // textField: {
  //   marginLeft: theme.spacing.unit,
  //   marginRight: theme.spacing.unit,
  //   width: 200
  // },
  // menu: {
  //   width: 200
  // }
});

class QueryDrawer extends React.Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Avatar className={classes.avatar}>
          {createElement(operatorsExtraInfo[1].IconComponent)}
        </Avatar>
        <Typography variant="title" gutterBottom>
          Configure Query
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-helper">Age</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={<Input name="age" id="age-helper" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
      </Fragment>
    );
  }
}

QueryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QueryDrawer);
