import React, { createElement } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { operatorsExtraInfo } from "sideBar/operators/operatorsData";
import { getWithJwtAsync } from "lib/http";

import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";
import Avatar from "material-ui/Avatar";

import LoaderContainer from "common/LoaderContainer";
import SelectInput from "common/select/SelectInput";

const styles = theme => ({
  formControl: {
    width: "100%"
  },
  avatar: {
    backgroundColor: operatorsExtraInfo[1].backgroundColor,
    marginRight: 10
  },
  titleContainer: {
    display: "flex",
    alignItems: "flex-end"
  }
});

class QueryDrawer extends React.Component {
  state = {
    isLoading: true,
    selectedDataServiceId: "",
    dataServices: []
  };

  async componentDidMount() {
    const dataServicesRaw = await getWithJwtAsync(
      "http://desktop-ejm4rss/dev/api/qes/demo/dataservices"
    );

    const dataServices = dataServicesRaw.map(({ DataServiceId, Label }) => ({
      value: DataServiceId,
      label: Label
    }));

    this.setState({
      isLoading: false,
      dataServices
    });
  }

  handleChange = value => {
    this.setState({ selectedDataServiceId: value });
  };

  render() {
    const { classes } = this.props;
    const { isLoading, selectedDataServiceId, dataServices } = this.state;

    return (
      <LoaderContainer isLoading={isLoading}>
        <Grid item xs={12} className={classes.titleContainer}>
          <Avatar className={classes.avatar}>
            {createElement(operatorsExtraInfo[1].IconComponent)}
          </Avatar>
          <Typography variant="title" gutterBottom>
            Configure Query
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SelectInput
            inputLabel="Source"
            helperText="What is the source of this query?"
            value={selectedDataServiceId}
            options={dataServices}
            handleChange={this.handleChange}
          />
        </Grid>
      </LoaderContainer>
    );
  }
}

QueryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QueryDrawer);
