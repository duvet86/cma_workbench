import { elementType } from "sideBar/operators/operatorsData";
import { LOGOUT } from "login/actions";
import {
  OPEN_QUERY_CONFIG,
  CLOSE_QUERY_CONFIG,
  QUERY_CONFIG_ERROR
} from "workbench/query/actions";

function configSwitch(
  state = {
    elementType: elementType.NONE
  },
  action
) {
  switch (action.type) {
    case OPEN_QUERY_CONFIG:
      return {
        elementType: elementType.QUERY
      };

    case LOGOUT:
    case QUERY_CONFIG_ERROR:
    case CLOSE_QUERY_CONFIG:
      return {
        elementType: elementType.NONE
      };

    default:
      return state;
  }
}

export default configSwitch;
