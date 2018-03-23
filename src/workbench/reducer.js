import update from "immutability-helper";

import {
  SESSION_REQUEST,
  SESSION_SUCCESS,
  CREATE_QUERY,
  UPDATE_QUERY,
  UPDATE_QUERY_DATASERVICE
} from "workbench/actions";

function session(
  state = {
    isLoading: true,
    session: {},
    graph: {},
    queries: {},
    filters: {},
    connections: {}
  },
  action
) {
  switch (action.type) {
    case SESSION_REQUEST:
      return {
        ...state,
        isLoading: true,
        dataViewId: action.dataViewId
      };

    case SESSION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...action.payload
      };

    case CREATE_QUERY:
      return update(state, {
        graph: { Queries: { $push: [action.elementId] } },
        queries: {
          $merge: {
            [action.elementId]: {
              ...action.query
            }
          }
        }
      });

    case UPDATE_QUERY_DATASERVICE:
    case UPDATE_QUERY:
      return update(state, {
        queries: {
          [action.elementId]: {
            $merge: { ...action.query }
          }
        }
      });

    default:
      return state;
  }
}

export default session;
