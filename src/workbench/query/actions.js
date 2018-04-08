export const QUERY_CONFIG_ERROR = "QUERY_CONFIG_ERROR";

export const queryConfigError = () => ({
  type: QUERY_CONFIG_ERROR
});

export const OPEN_QUERY_CONFIG = "OPEN_QUERY_CONFIG";
export const CLOSE_QUERY_CONFIG = "CLOSE_QUERY_CONFIG";

export const openQueryConfig = elementId => ({
  type: OPEN_QUERY_CONFIG,
  elementId
});

export const closeQueryConfig = () => ({
  type: CLOSE_QUERY_CONFIG
});

export const GO_TO_STEP = "GO_TO_STEP";

export const goToStep = step => ({
  type: GO_TO_STEP,
  step
});

export const DATASERVICES_REQUEST = "DATASERVICES_REQUEST";
export const DATASERVICES_SUCCESS = "DATASERVICES_SUCCESS";

export const dataServicesRequest = () => ({
  type: DATASERVICES_REQUEST
});

export const dataServicesSuccess = dataServices => ({
  type: DATASERVICES_SUCCESS,
  dataServices
});

export const QUERY_DESCRIBE_REQUEST = "QUERY_DESCRIBE_REQUEST";
export const QUERY_DESCRIBE_SUCCESS = "QUERY_DESCRIBE_SUCCESS";

export const queryDescribeRequest = () => ({
  type: QUERY_DESCRIBE_REQUEST
});

export const queryDescribeSuccess = (
  { Columns, AvailableFilters },
  elementId
) => ({
  type: QUERY_DESCRIBE_SUCCESS,
  availableColumns: Columns,
  availableFilters: AvailableFilters,
  elementId
});
