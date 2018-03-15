import update from "immutability-helper";

import sessionReducer from "workbench/sessionReducer";
import {
  GRAPH_SAVE_REQUEST,
  GRAPH_SAVE_ERROR,
  GRAPH_REQUEST,
  GRAPH_SUCCESS,
  GRAPH_ERROR
} from "workbench/actions";

function graph(state, action) {
  switch (action.type) {
    case GRAPH_SAVE_REQUEST:
      return update(state, {
        sessionInfo: {
          Graph: {
            $merge: { ...action.graphData }
          }
        }
      });

    case GRAPH_SAVE_ERROR:
      return {
        ...state,
        error: action.error
      };

    case GRAPH_REQUEST:
      return {
        ...state
      };

    case GRAPH_SUCCESS:
      return update(state, {
        Graph: {
          Queries: {
            $merge: { ...action.graphData }
          }
        }
      });

    case GRAPH_ERROR:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}

export default (state, action) => graph(sessionReducer(state, action), action);
