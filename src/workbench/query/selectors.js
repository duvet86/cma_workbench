import { createSelector } from "reselect";

const dataServicesSelector = state => state.queryConfigReducer.dataServices;

export const getDataServices = createSelector(
  dataServicesSelector,
  dataServices =>
    dataServices
      .map(({ DataServiceId, Label }) => ({
        value: DataServiceId,
        label: Label
      }))
      .sort((a, b) => {
        if (a.label < b.label) return -1;
        if (a.label > b.label) return 1;
        return 0;
      })
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

export const getCurrentStep = createSelector(
  elementIdSelector,
  querySelector,
  (elementId, queries) => {
    const selectedQuery = queries[elementId];

    if (selectedQuery.Columns.length > 0) {
      return 2;
    }
    if (selectedQuery.TargetDataServiceId) {
      return 1;
    }

    return 0;
  }
);
