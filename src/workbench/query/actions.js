export const QUERY_CONFIG_ERROR = "QUERY_CONFIG_ERROR";

export const queryConfigError = () => ({
  type: QUERY_CONFIG_ERROR
});

export const QUERY_CONFIG_OPEN = "QUERY_CONFIG_OPEN";
export const QUERY_CONFIG_CLOSE = "QUERY_CONFIG_CLOSE";

export const openQueryConfig = elementId => ({
  type: QUERY_CONFIG_OPEN,
  elementId
});

export const closeQueryConfig = () => ({
  type: QUERY_CONFIG_CLOSE
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

export const FILTER_CAPABILITIES_REQUEST = "FILTER_CAPABILITIES_REQUEST";
export const FILTER_CAPABILITIES_SUCCESS = "FILTER_CAPABILITIES_SUCCESS";

export const filterCapabilitiesRequest = () => ({
  type: FILTER_CAPABILITIES_REQUEST
});

export const filterCapabilitiesSuccess = filterCapabilities => ({
  type: FILTER_CAPABILITIES_SUCCESS,
  filterCapabilities
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
