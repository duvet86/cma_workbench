import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getWithJwtAsync } from "lib/http";
import { saveGraphChanges } from "workbench/actions";

import QueryDrawer from "workbench/query/QueryDrawer";

class QueryDrawerContainer extends Component {
  static propTypes = {
    sessionInfo: PropTypes.object.isRequired,
    dispatchSaveGraph: PropTypes.func.isRequired
  };

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
    const {
      dispatchSaveGraph,
      sessionInfo: { TenantId, SessionId, QueryGraphId }
    } = this.props;

    const graphData = {
      Queries: [
        {
          IsConfigured: false,
          TargetDataServiceId: value,
          TargetDataViewId: null,
          ElementType: "Query",
          LayoutX: 200,
          LayoutY: 18.453125,
          ElementId: 1
        }
      ]
    };

    dispatchSaveGraph(TenantId, SessionId, QueryGraphId, graphData);
  };

  render() {
    const { isLoading, selectedDataServiceId, dataServices } = this.state;

    return (
      <QueryDrawer
        isLoading={isLoading}
        selectedDataServiceId={selectedDataServiceId}
        dataServices={dataServices}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchSaveGraph: (tenantId, sessionId, queryGraphId, graphData) =>
    dispatch(saveGraphChanges(tenantId, sessionId, queryGraphId, graphData))
});

export default connect(null, mapDispatchToProps)(QueryDrawerContainer);
