import grid20 from "workbench/grid20.png";

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DropTarget } from "react-dnd";

import withLoading from "lib/withLoading";

import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import { enhancedOperatorsSelector } from "sideBar/operators/selectors";
import { itemType } from "sideBar/operators/operatorsData";

const styles = {
  container: {
    height: "400%",
    width: "400%"
  },
  item: {
    transformOrigin: "0px 0px 0px",
    backgroundImage: `url(${grid20})`
  }
};

const operatorTarget = {
  drop(props, monitor, component) {
    const { x, y } = monitor.getClientOffset();
    const { operatorId } = monitor.getItem();
    const { scale } = component.state;

    component.handleDrop(operatorId, (x - 300) * scale, (y - 50) * scale);
  }
};

class DroppableCanvas extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    scale: 1,
    operatorsInCanvas: {}
  };

  handleWheel = e => {
    e.preventDefault();
    // Probably better to use the ref and update the attribute manually.
    // See: https://stackoverflow.com/questions/29725828/update-style-of-a-component-onscroll-in-react-js/29726000#29726000
    e.persist();

    this.setState(prevState => ({
      scale: prevState.scale - e.deltaY * 0.0012
    }));
  };

  handleDrop = (operatorId, x, y) => {
    this.setState({
      operatorsInCanvas: {
        [operatorId]: {
          top: y,
          left: x
        }
      }
    });
  };

  render() {
    const {
      classes,
      connectDropTarget
      //operators
    } = this.props;
    const { operatorsInCanvas } = this.state;

    return connectDropTarget(
      <span>
        <Grid
          container
          className={classes.container}
          onWheel={this.handleWheel}
        >
          <Grid
            item
            xs={12}
            className={classes.item}
            style={{
              transform: `scale(${this.state.scale})`
            }}
          >
            {Object.keys(operatorsInCanvas).map(key => (
              <div
                key={key}
                style={{
                  position: "absolute",
                  top: operatorsInCanvas[key].top,
                  left: operatorsInCanvas[key].left
                }}
              >
                Luca
              </div>
            ))}
          </Grid>
        </Grid>
      </span>
    );
  }
}

const mapStateToProps = ({
  operatorsReducer: { isLoading, operators, error }
}) => ({
  operators: operators && enhancedOperatorsSelector(operators),
  isLoading,
  error
});

export default connect(mapStateToProps)(
  withStyles(styles)(
    DropTarget(itemType.OPERATOR, operatorTarget, (connect, monitor) => ({
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }))(withLoading(DroppableCanvas))
  )
);
