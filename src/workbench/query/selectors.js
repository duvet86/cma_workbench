import { createSelector } from "reselect";

const dataServicesSelector = state => state.queryConfigReducer.dataServices;

export const getDataServices = createSelector(
  dataServicesSelector,
  dataServices =>
    dataServices.map(({ DataServiceId, Label }) => ({
      value: DataServiceId,
      label: Label
    }))
);

const elementIdSelector = state => state.queryConfigReducer.elementId;
const querySelector = state => state.sessionReducer.queries;
const availableColumnsSelector = state =>
  state.queryConfigReducer.availableColumns;

export const getAvailableColumns = createSelector(
  elementIdSelector,
  querySelector,
  availableColumnsSelector,
  (elementId, queries, availableColumns) =>
    availableColumns.filter(ac => !queries[elementId].Columns.includes(ac))
);

export const getQuery = createSelector(
  elementIdSelector,
  querySelector,
  (elementId, queries) => queries[elementId]
);

export const getQueryColumns = createSelector(
  elementIdSelector,
  querySelector,
  (elementId, queries) => queries[elementId].Columns
);
