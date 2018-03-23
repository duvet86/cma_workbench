import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updateQueryDataService } from "workbench/actions";
import { dataServicesRequest } from "workbench/query/actions";
import { getDataServices } from "workbench/query/selectors";

import LoaderContainer from "common/LoaderContainer";
import QueryConfig from "workbench/query/QueryConfig";

class QueryConfigContainer extends Component {
  static propTypes = {
    session: PropTypes.object.isRequired,
    elementConfig: PropTypes.object.isRequired,
    dispatchDataServicesRequest: PropTypes.func.isRequired,
    dispatchUpdateQueryDataService: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { dispatchDataServicesRequest } = this.props;

    dispatchDataServicesRequest();
  }

  handleChange = selectedDataServiceId => {
    const { elementConfig, dispatchUpdateQueryDataService } = this.props;

    dispatchUpdateQueryDataService(elementConfig.ElementId, {
      TargetDataServiceId: selectedDataServiceId
    });
  };

  render() {
    const {
      isLoading,
      dataServices,
      dataServiceDescription,
      elementConfig
    } = this.props;
    console.log(this.props);
    return (
      <LoaderContainer isLoading={isLoading}>
        <QueryConfig
          dataServices={dataServices}
          dataServiceDescription={dataServiceDescription}
          queryConfig={elementConfig}
          handleChange={this.handleChange}
        />
      </LoaderContainer>
    );
  }
}

const mapStateToProps = ({
  queryConfigReducer: { isLoading, dataServices, dataServiceDescription }
}) => ({
  isLoading,
  dataServices: getDataServices(dataServices),
  dataServiceDescription
});

const mapDispatchToProps = dispatch => ({
  dispatchDataServicesRequest: () => dispatch(dataServicesRequest()),
  dispatchUpdateQueryDataService: (elementId, query) =>
    dispatch(updateQueryDataService(elementId, query))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QueryConfigContainer
);
