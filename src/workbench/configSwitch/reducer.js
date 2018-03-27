import { elementType } from "sideBar/operators/operatorsData";
import { OPEN_QUERY_CONFIG, CLOSE_QUERY_CONFIG } from "workbench/query/actions";

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

    case CLOSE_QUERY_CONFIG:
      return {
        elementType: elementType.NONE
      };

    default:
      return state;
  }
}

export default configSwitch;
