import update from "immutability-helper";

//import { QUERY_DESCRIBE_SUCCESS } from "workbench/query/actions";
import {
  SESSION_REQUEST,
  SESSION_SUCCESS,
  ADD_QUERY,
  UPDATE_QUERY_DATASERVICE,
  ADD_QUERY_COLUMN,
  REMOVE_QUERY_COLUMN,
  ADD_QUERY_CONSTRAINT,
  REMOVE_QUERY_CONSTRAINT
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
            $merge: {
              ...action.query,
              Columns: [],
              Constraints: []
            }
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

    // case QUERY_DESCRIBE_SUCCESS:
    //   return update(state, {
    //     queries: {
    //       [action.elementId]: {
    //         Columns: { $set: [] },
    //         Constraints: { $set: [] }
    //       }
    //     }
    //   });

    case ADD_QUERY_CONSTRAINT:
      return update(state, {
        queries: {
          [action.elementId]: {
            Constraints: { $push: [action.constraint] }
          }
        }
      });

    case REMOVE_QUERY_CONSTRAINT:
      return update(state, {
        queries: {
          [action.elementId]: {
            Constraints: {
              $apply: constraints =>
                constraints.filter(
                  ({ ConstraintId }) => ConstraintId !== action.constraintId
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
