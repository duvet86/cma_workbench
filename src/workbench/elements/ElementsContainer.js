import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  getElementId,
  topEndPointConfig,
  bottomEndPointConfig,
  connectionConfig
} from "workbench/utils";
import { elementType } from "sideBar/operators/operatorsData";

import QueryElement from "workbench/elements/QueryElement";

class ElementsContainer extends Component {
  static propTypes = {
    jsPlumbInstance: PropTypes.object.isRequired,
    moveOperatorInCanvas: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    elementId: PropTypes.number.isRequired,
    elementLabel: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  };

  componentDidMount() {
    const {
      jsPlumbInstance,
      //connections,
      moveOperatorInCanvas,
      index,
      type,
      elementId
    } = this.props;

    const elementDOMId = getElementId(elementId);

    jsPlumbInstance.addEndpoint(elementDOMId, topEndPointConfig);
    jsPlumbInstance.addEndpoint(elementDOMId, bottomEndPointConfig);

    jsPlumbInstance.draggable(elementDOMId, {
      containment: true,
      stop: ({ pos }) => {
        moveOperatorInCanvas(type, index, ...pos);
      }
    });

    //this.makeConnections(jsPlumbInstance, connections);
  }

  componentDidUpdate() {
    this.props.jsPlumbInstance.revalidate();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.connections.length !== nextProps.connections.length) {
  //     const { jsPlumbInstance, connections } = nextProps;
  //     this.makeConnections(jsPlumbInstance, connections);
  //   }
  // }

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
      default:
        return null;
    }
  }
}

export default ElementsContainer;
