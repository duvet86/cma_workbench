import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updateQueryDataService } from "workbench/actions";
import { dataServicesRequest } from "workbench/query/actions";

import { getDataServices } from "workbench/query/selectors";

import SourceSelector from "workbench/query/sourceSelector/SourceSelector";

class SourceSelectorContainer extends Component {
  static propTypes = {
    elementId: PropTypes.number.isRequired,
    targetDataViewId: PropTypes.string.isRequired,
    dataServices: PropTypes.array.isRequired,
    dispatchDataServicesRequest: PropTypes.func.isRequired,
    dispatchDescribeQuery: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.dispatchDataServicesRequest();
  }

  handleChangeDataService = selectedDataServiceId => {
    const { elementId, dispatchDescribeQuery } = this.props;

    dispatchDescribeQuery(elementId, {
      TargetDataViewId: selectedDataServiceId
    });
  };

  render() {
    const { targetDataViewId, dataServices } = this.props;

    return (
      <SourceSelector
        targetDataViewId={targetDataViewId}
        dataServices={dataServices}
        handleChangeDataService={this.handleChangeDataService}
      />
    );
  }
}

const mapStateToProps = state => ({
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
