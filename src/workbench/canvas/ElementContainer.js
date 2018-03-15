import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  topEndPointConfig,
  bottomEndPointConfig,
  connectionConfig
} from "workbench/utils";
import { elementType } from "sideBar/operators/operatorsData";

import QueryElement from "workbench/query/QueryElement";
import FilterElement from "workbench/filter/FilterElement";

class ElementContainer extends Component {
  static propTypes = {
    jsPlumbInstance: PropTypes.object.isRequired,
    moveOperatorInCanvas: PropTypes.func.isRequired,
    connections: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    elementId: PropTypes.string.isRequired,
    elementLabel: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    columns: PropTypes.array
  };

  componentDidMount() {
    const {
      jsPlumbInstance,
      connections,
      moveOperatorInCanvas,
      index,
      type,
      elementId
    } = this.props;

    jsPlumbInstance.addEndpoint(elementId, topEndPointConfig);
    jsPlumbInstance.addEndpoint(elementId, bottomEndPointConfig);

    jsPlumbInstance.draggable(elementId, {
      containment: true,
      stop: ({ pos }) => {
        moveOperatorInCanvas(type, index, ...pos);
      }
    });

    this.makeConnections(jsPlumbInstance, connections);
  }

  componentDidUpdate() {
    this.props.jsPlumbInstance.revalidate();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.connections.length !== nextProps.connections.length) {
      const { jsPlumbInstance, connections } = nextProps;
      this.makeConnections(jsPlumbInstance, connections);
    }
  }

  makeConnections = (jsPlumbInstance, connections) => {
    //jsPlumbInstance.deleteEveryConnection();
    connections.forEach(connObj => {
      if (
        (jsPlumbInstance.getEndpoints(connObj.source).length ||
          jsPlumbInstance.isSource(connObj.source)) &&
        (jsPlumbInstance.getEndpoints(connObj.target).length ||
          jsPlumbInstance.isTarget(connObj.target))
      ) {
        jsPlumbInstance.connect(
          {
            source: connObj.source,
            target: connObj.target
          },
          connectionConfig
        );
      }
    });
  };

  render() {
    const {
      jsPlumbInstance,
      connections,
      moveOperatorInCanvas,
      type,
      ...props
    } = this.props;

    switch (type) {
      case elementType.QUERY:
        return <QueryElement {...props} />;
      case elementType.FILTER:
        return <FilterElement {...props} />;
      default:
        return null;
    }
  }
}

export default ElementContainer;
