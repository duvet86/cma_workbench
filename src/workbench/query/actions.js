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

export const queryDescribeRequest = elementId => ({
  type: QUERY_DESCRIBE_REQUEST,
  elementId
});

export const queryDescribeSuccess = serviceDescription => ({
  type: QUERY_DESCRIBE_SUCCESS,
  serviceDescription
});

export const queryDescribeError = error => ({
  type: QUERY_DESCRIBE_ERROR,
  error
});
