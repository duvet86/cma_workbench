import {
  QUERY_CONFIG_ERROR,
  OPEN_QUERY_CONFIG,
  CLOSE_QUERY_CONFIG,
  DATASERVICES_REQUEST,
  DATASERVICES_SUCCESS,
  QUERY_DESCRIBE_REQUEST,
  QUERY_DESCRIBE_SUCCESS
} from "workbench/query/actions";

const initialState = {
  isLoading: true,
  elementId: 0,
  dataServices: [],
  availableColumns: [],
  availableFilters: []
};

function queryConfig(state = { ...initialState }, action) {
  switch (action.type) {
    case OPEN_QUERY_CONFIG:
      return {
        ...state,
        elementId: action.elementId
      };

    case QUERY_CONFIG_ERROR:
    case CLOSE_QUERY_CONFIG:
      return {
        ...initialState
      };

    case DATASERVICES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataServices: action.dataServices
      };

    case QUERY_DESCRIBE_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case QUERY_DESCRIBE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        availableColumns: action.availableColumns,
        availableFilters: action.availableFilters
      };

    case DATASERVICES_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
}

export default queryConfig;
