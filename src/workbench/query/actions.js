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

export const closeQueryConfig = elementType => ({
  type: CLOSE_QUERY_CONFIG
});

export const DATASERVICES_REQUEST = "DATASERVICES_REQUEST";
export const DATASERVICES_SUCCESS = "DATASERVICES_SUCCESS";
export const DATASERVICES_ERROR = "DATASERVICES_ERROR";

export const dataServicesRequest = () => ({
  type: DATASERVICES_REQUEST
});

export const dataServicesSuccess = dataServices => ({
  type: DATASERVICES_SUCCESS,
  dataServices
});

export const dataServicesError = error => ({
  type: DATASERVICES_ERROR,
  error
});

export const QUERY_DESCRIBE_REQUEST = "QUERY_DESCRIBE_REQUEST";
export const QUERY_DESCRIBE_SUCCESS = "QUERY_DESCRIBE_SUCCESS";
export const QUERY_DESCRIBE_ERROR = "QUERY_DESCRIBE_ERROR";

export const queryDescribeRequest = () => ({
  type: QUERY_DESCRIBE_REQUEST
});

export const queryDescribeSuccess = (serviceDescription, elementId) => ({
  type: QUERY_DESCRIBE_SUCCESS,
  availableColumns: serviceDescription.Columns,
  elementId
});

export const queryDescribeError = error => ({
  type: QUERY_DESCRIBE_ERROR,
  error
});
