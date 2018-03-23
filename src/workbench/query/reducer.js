import {
  DATASERVICES_REQUEST,
  DATASERVICES_SUCCESS,
  QUERY_DESCRIBE_REQUEST,
  QUERY_DESCRIBE_SUCCESS
} from "workbench/query/actions";

function queryConfig(
  state = {
    isLoading: true,
    elementId: 0,
    dataServices: [],
    dataServiceDescription: {
      Columns: []
    }
  },
  action
) {
  switch (action.type) {
    case DATASERVICES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataServices: action.dataServices
      };

    case QUERY_DESCRIBE_SUCCESS:
      return {
        ...state,
        dataServiceDescription: action.serviceDescription
      };

    case QUERY_DESCRIBE_REQUEST:
      return {
        ...state,
        elementId: action.elementId
      };

    case DATASERVICES_REQUEST:
    default:
      return state;
  }
}

export default queryConfig;
