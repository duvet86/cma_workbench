import {
  QUERY_CONFIG_ERROR,
  OPEN_QUERY_CONFIG,
  CLOSE_QUERY_CONFIG,
  GO_TO_STEP,
  DATASERVICES_REQUEST,
  DATASERVICES_SUCCESS,
  QUERY_DESCRIBE_REQUEST,
  QUERY_DESCRIBE_SUCCESS
} from "workbench/query/actions";

const initialState = {
  currentStep: 0,
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

    case GO_TO_STEP:
      return {
        ...state,
        currentStep: action.step
      };

    case DATASERVICES_REQUEST:
      return {
        ...state,
        isLoading: true
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

    default:
      return state;
  }
}

export default queryConfig;
