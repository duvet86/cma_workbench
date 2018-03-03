import React, { Component } from "react";
import PropTypes from "prop-types";

import CanvasOperator from "workbench/canvasOperator/CanvasOperator";

class CanvasOperatorContainer extends Component {
  static propTypes = {
    jsPlumbInstance: PropTypes.object.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    iconComponent: PropTypes.func.isRequired
  };

  componentDidMount() {
    const {
      jsPlumbInstance,
      connections,
      moveOperatorInCanvas,
      id
    } = this.props;

    const elementId = `canvas-operator-${id}`;

    jsPlumbInstance.addEndpoint(elementId, {
      anchor: "Top",
      endpoint: ["Dot", { radius: 5, cssClass: "topendpoint" }],
      isTarget: false /* MC20170717 - disable drag connections because UI is not complete */,
      isSource: false /* MC20170717 - disable drag connections because UI is not complete */,
      maxConnections: -1
    });

    jsPlumbInstance.addEndpoint(elementId, {
      anchor: "Bottom",
      endpoint: [
        "Rectangle",
        { width: 10, height: 10, cssClass: "bottomendpoint" }
      ],
      isTarget: false /* MC20170717 - disable drag connections because UI is not complete */,
      isSource: false /* MC20170717 - disable drag connections because UI is not complete */,
      maxConnections: -1
    });

    jsPlumbInstance.draggable(elementId, {
      containment: true,
      stop: ({ pos }) => {
        moveOperatorInCanvas(id, ...pos);
      }
    });

    this.makeConnections(jsPlumbInstance, connections);
  }

  componentDidUpdate() {
    const { jsPlumbInstance } = this.props;
    jsPlumbInstance.revalidate();
  }

  makeConnections = (jsPlumbInstance, connections) => {
    jsPlumbInstance.deleteEveryConnection();
    connections.forEach(connObj => {
      if (
        (jsPlumbInstance.getEndpoints(connObj.source).length ||
          jsPlumbInstance.isSource(connObj.source)) &&
        (jsPlumbInstance.getEndpoints(connObj.target).length ||
          jsPlumbInstance.isTarget(connObj.target))
      ) {
        jsPlumbInstance.connect({
          source: connObj.source,
          target: connObj.target,
          detachable: false,
          anchors: ["Bottom", "Top"],
          endpoints: ["Blank", "Blank"],
          connector: ["Flowchart", { cornerRadius: 5 }],
          overlays: [
            ["Arrow", { location: 30, width: 10, height: 10, foldback: 0 }]
          ]
        });
      }
    });
  };

  render() {
    const { jsPlumbInstance, ...rest } = this.props;

    return <CanvasOperator {...rest} />;
  }
}

export default CanvasOperatorContainer;
