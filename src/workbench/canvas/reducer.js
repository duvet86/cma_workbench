import update from "immutability-helper";

import {
  QUERY_ADD,
  QUERY_MOVE,
  QUERY_REMOVE,
  FILTER_ADD,
  FILTER_MOVE,
  FILTER_REMOVE,
  CONNECTION_ADD,
  CONNECTION_REMOVE
} from "workbench/canvas/actions";

function canvas(state, action) {
  switch (action.type) {
    case QUERY_ADD:
      return update(state, {
        sessionInfo: {
          InitialQueryGraph: {
            Queries: {
              $push: [
                { operatorId: action.operatorId, x: action.x, y: action.y }
              ]
            }
          }
        }
      });

    case QUERY_MOVE:
      return update(state, {
        sessionInfo: {
          InitialQueryGraph: {
            Queries: {
              [action.index]: { $merge: { x: action.x, y: action.y } }
            }
          }
        }
      });

    case QUERY_REMOVE:
      return update(state, {
        sessionInfo: {
          InitialQueryGraph: {
            Queries: {
              $splice: [[action.index, 1]]
            }
          }
        }
      });

    case FILTER_ADD:
      return update(state, {
        sessionInfo: {
          InitialQueryGraph: {
            InteractiveFilters: {
              $push: [
                { operatorId: action.operatorId, x: action.x, y: action.y }
              ]
            }
          }
        }
      });

    case FILTER_MOVE:
      return update(state, {
        sessionInfo: {
          InitialQueryGraph: {
            InteractiveFilters: {
              [action.index]: { $merge: { x: action.x, y: action.y } }
            }
          }
        }
      });

    case FILTER_REMOVE:
      return update(state, {
        sessionInfo: {
          InitialQueryGraph: {
            InteractiveFilters: {
              $splice: [[action.index, 1]]
            }
          }
        }
      });

    case CONNECTION_ADD:
      return update(state, {
        InitialQueryGraph: {
          Connections: {
            $push: [{ operatorId: action.operatorId, x: action.x, y: action.y }]
          }
        }
      });

    case CONNECTION_REMOVE:
      return update(state, {
        sessionInfo: {
          InitialQueryGraph: {
            Connections: {
              $splice: [[action.index, 1]]
            }
          }
        }
      });

    default:
      return state;
  }
}

export default canvas;
