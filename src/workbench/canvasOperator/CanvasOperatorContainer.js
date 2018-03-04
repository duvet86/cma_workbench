import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  getElementId,
  topEndPointConfig,
  bottomEndPointConfig,
  connectionConfig
} from "workbench/utils";

import CanvasOperator from "workbench/canvasOperator/CanvasOperator";

class CanvasOperatorContainer extends Component {
  static propTypes = {
    jsPlumbInstance: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    IconComponent: PropTypes.func.isRequired
  };

  componentDidMount() {
    const {
      jsPlumbInstance,
      connections,
      moveOperatorInCanvas,
      index
    } = this.props;

    const elementId = getElementId(index);

    jsPlumbInstance.addEndpoint(elementId, topEndPointConfig);
    jsPlumbInstance.addEndpoint(elementId, bottomEndPointConfig);

    jsPlumbInstance.draggable(elementId, {
      containment: true,
      stop: ({ pos }) => {
        moveOperatorInCanvas(index, ...pos);
      }
    });

    this.makeConnections(jsPlumbInstance, connections);
  }

  componentDidUpdate() {
    const { jsPlumbInstance } = this.props;
    jsPlumbInstance.revalidate();
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
      ...rest
    } = this.props;

    return <CanvasOperator {...rest} />;
  }
}

export default CanvasOperatorContainer;
