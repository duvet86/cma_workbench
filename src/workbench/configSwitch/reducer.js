import { elementType } from "sideBar/operators/operatorsData";
import { LOGOUT } from "login/actions";
import {
  QUERY_CONFIG_OPEN,
  QUERY_CONFIG_CLOSE,
  QUERY_CONFIG_ERROR
} from "workbench/query/actions";

function configSwitch(
  state = {
    elementType: elementType.NONE
  },
  action
) {
  switch (action.type) {
    case QUERY_CONFIG_OPEN:
      return {
        elementType: elementType.QUERY
      };

    case LOGOUT:
    case QUERY_CONFIG_ERROR:
    case QUERY_CONFIG_CLOSE:
      return {
        elementType: elementType.NONE
      };

    default:
      return state;
  }
}

export default configSwitch;
