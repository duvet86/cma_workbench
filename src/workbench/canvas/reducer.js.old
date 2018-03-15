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
          QueryGraph: {
            Queries: {
              $push: [
                {
                  ElementId: state.sessionInfo.QueryGraph.NextElementId,
                  LayoutX: action.x,
                  LayoutY: action.y
                }
              ]
            }
          }
        }
      });

    case QUERY_MOVE:
      return update(state, {
        sessionInfo: {
          QueryGraph: {
            Queries: {
              [action.index]: {
                $merge: { LayoutX: action.x, LayoutY: action.y }
              }
            }
          }
        }
      });

    case QUERY_REMOVE:
      return update(state, {
        sessionInfo: {
          QueryGraph: {
            Queries: {
              $splice: [[action.index, 1]]
            }
          }
        }
      });

    case FILTER_ADD:
      return update(state, {
        sessionInfo: {
          QueryGraph: {
            InteractiveFilters: {
              $push: [
                {
                  ElementId: state.sessionInfo.QueryGraph.NextElementId,
                  LayoutX: action.x,
                  LayoutY: action.y
                }
              ]
            }
          }
        }
      });

    case FILTER_MOVE:
      return update(state, {
        sessionInfo: {
          QueryGraph: {
            InteractiveFilters: {
              [action.index]: {
                $merge: { LayoutX: action.x, LayoutY: action.y }
              }
            }
          }
        }
      });

    case FILTER_REMOVE:
      return update(state, {
        sessionInfo: {
          QueryGraph: {
            InteractiveFilters: {
              $splice: [[action.index, 1]]
            }
          }
        }
      });

    case CONNECTION_ADD:
      return update(state, {
        QueryGraph: {
          Connections: {
            $push: [
              {
                ElementId: state.sessionInfo.QueryGraph.NextElementId,
                LayoutX: action.x,
                LayoutY: action.y
              }
            ]
          }
        }
      });

    case CONNECTION_REMOVE:
      return update(state, {
        sessionInfo: {
          QueryGraph: {
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
