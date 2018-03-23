import { createSelector } from "reselect";

const dataServicesSelector = dataServices => dataServices;

export const getDataServices = createSelector(
  dataServicesSelector,
  dataServices =>
    dataServices.map(({ DataServiceId, Label }) => ({
      value: DataServiceId,
      label: Label
    }))
);
