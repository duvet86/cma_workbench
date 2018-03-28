import update from "immutability-helper";

import {
  SESSION_REQUEST,
  SESSION_SUCCESS,
  ADD_QUERY,
  UPDATE_QUERY_DATASERVICE,
  ADD_QUERY_COLUMN,
  REMOVE_QUERY_COLUMN
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

    case ADD_QUERY:
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
      return update(state, {
        queries: {
          [action.elementId]: {
            $merge: { ...action.query }
          }
        }
      });

    case ADD_QUERY_COLUMN:
      return update(state, {
        queries: {
          [action.elementId]: {
            Columns: { $push: [action.column] }
          }
        }
      });

    case REMOVE_QUERY_COLUMN:
      return update(state, {
        queries: {
          [action.elementId]: {
            Columns: {
              $apply: columns =>
                columns.filter(
                  ({ ColumnName }) => ColumnName !== action.columnName
                )
            }
          }
        }
      });

    default:
      return state;
  }
}

export default session;
