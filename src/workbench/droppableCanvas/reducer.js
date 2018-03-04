import update from "immutability-helper";

import {
  CANVASOPERATORS_REQUEST,
  CANVASOPERATORS_SUCCESS,
  CANVASOPERATOR_ADD,
  CANVASOPERATOR_MOVE,
  CANVASOPERATOR_REMOVE,
  CONNECTION_ADD,
  CONNECTION_REMOVE
} from "workbench/droppableCanvas/actions";

function droppableCanvas(
  state = {
    isLoading: false,
    operatorsInCanvas: [],
    connections: []
  },
  action
) {
  switch (action.type) {
    case CANVASOPERATORS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case CANVASOPERATORS_SUCCESS:
      return {
        isLoading: false,
        operatorsInCanvas: action.operatorsInCanvas,
        connections: action.connections
      };

    case CANVASOPERATOR_ADD:
      return update(state, {
        operatorsInCanvas: {
          $push: [{ operatorId: action.operatorId, x: action.x, y: action.y }]
        }
      });

    case CANVASOPERATOR_MOVE:
      return update(state, {
        operatorsInCanvas: {
          [action.index]: { $merge: { x: action.x, y: action.y } }
        }
      });

    case CANVASOPERATOR_REMOVE:
      return update(state, {
        operatorsInCanvas: {
          $splice: [[action.index, 1]]
        }
      });

    case CONNECTION_ADD:
      return update(state, {
        connections: {
          $push: [{ source: action.source, target: action.target }]
        }
      });

    case CONNECTION_REMOVE:
      return update(state, {
        connections: {
          $splice: [[action.index, 1]]
        }
      });

    default:
      return state;
  }
}

export default droppableCanvas;
