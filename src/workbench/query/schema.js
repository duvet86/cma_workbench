import { schema } from "normalizr";

const availableColumn = new schema.Entity(
  "availableColumns",
  {},
  { idAttribute: "ColumnName" }
);

export const describeSchema = {
  Columns: [availableColumn]
};
