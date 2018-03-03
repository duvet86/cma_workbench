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
    const { jsPlumbInstance, moveOperatorInCanvas, id } = this.props;

    jsPlumbInstance.draggable(`canvas-operator-${id}`, {
      containment: true,
      stop: ({ pos }) => {
        moveOperatorInCanvas(id, ...pos);
      }
    });
  }

  componentWillUpdate() {
    const { jsPlumbInstance, id } = this.props;
    jsPlumbInstance.revalidate(`canvas-operator-${id}`);
  }

  render() {
    const { jsPlumbInstance, ...rest } = this.props;

    return <CanvasOperator {...rest} />;
  }
}

export default CanvasOperatorContainer;
