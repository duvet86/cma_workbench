import { createSelector } from "reselect";

const dataServicesSelector = state => state.queryConfigReducer.dataServices;

export const getDataServices = createSelector(
  dataServicesSelector,
  dataServices =>
    dataServices
      .map(({ ItemId, Label }) => ({
        value: ItemId,
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

export const getCompletedSteps = createSelector(
  elementIdSelector,
  querySelector,
  (elementId, queries, currentStep) => {
    const selectedQuery = queries[elementId];

    if (selectedQuery.Columns.length > 0) {
      return [true, true, true, false];
    }
    if (selectedQuery.TargetDataViewId) {
      return [true, false];
    }

    return [false];
  }
);

const availableFiltersSelector = state =>
  state.queryConfigReducer.availableFilters;

const noteSupportedDataTypes = ["DateTimeValue", "DateValue", "TimeValue"];

// NOTE: date types are not supported yet.
export const getConstraintTargets = createSelector(
  availableColumnsSelector,
  availableFiltersSelector,
  (columns, filters) => {
    const filtersSelect = filters.map(
      ({ Label, FilterName, DataType, ToColumnName }) => ({
        ToColumnName,
        value: {
          label: Label,
          FilterName,
          DataType
        },
        label: Label + " (F)",
        secondaryLabel: `(${DataType})`
      })
    );

    const columnsSelect = columns
      .filter(({ DataType }) => !noteSupportedDataTypes.includes(DataType))
      .filter(
        ({ ColumnName }) =>
          !filters.some(
            ({ ToColumnName }) => ToColumnName && ToColumnName === ColumnName
          )
      )
      .map(({ Label, ColumnName, DataType }) => ({
        ColumnName,
        value: {
          label: Label,
          ColumnName,
          DataType
        },
        label: Label,
        secondaryLabel: `(${DataType})`
      }));

    return [].concat(filtersSelect, columnsSelect);
  }
);
