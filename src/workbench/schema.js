import { schema } from "normalizr";

const query = new schema.Entity("queries", {}, { idAttribute: "ElementId" });
const filter = new schema.Entity("filters", {}, { idAttribute: "ElementId" });

export const graphSchema = {
  Queries: [query],
  InteractiveFilters: [filter]
};
