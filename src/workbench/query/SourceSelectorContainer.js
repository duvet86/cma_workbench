import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updateQueryDataService } from "workbench/actions";
import { dataServicesRequest } from "workbench/query/actions";

import { getQuery, getDataServices } from "workbench/query/selectors";

import SourceSelector from "workbench/query/SourceSelector";

class SourceSelectorContainer extends Component {
  static propTypes = {
    elementConfig: PropTypes.object.isRequired,
    dataServices: PropTypes.array.isRequired,
    dispatchDataServicesRequest: PropTypes.func.isRequired,
    dispatchDescribeQuery: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.dispatchDataServicesRequest();
  }

  handleChangeDataService = selectedDataServiceId => {
    const { elementConfig, dispatchDescribeQuery } = this.props;

    dispatchDescribeQuery(elementConfig.ElementId, {
      TargetDataViewId: selectedDataServiceId
    });
  };

  render() {
    const { elementConfig, dataServices } = this.props;

    return (
      <SourceSelector
        targetDataViewId={elementConfig.TargetDataViewId}
        dataServices={dataServices}
        handleChangeDataService={this.handleChangeDataService}
      />
    );
  }
}

const mapStateToProps = state => ({
  elementConfig: getQuery(state),
  dataServices: getDataServices(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchDataServicesRequest: () => dispatch(dataServicesRequest()),
  dispatchDescribeQuery: (elementId, query) =>
    dispatch(updateQueryDataService(elementId, query))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  SourceSelectorContainer
);
