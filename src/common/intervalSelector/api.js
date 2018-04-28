import { getWithJwtAsync } from "lib/http";

export const getIntervalTypes = () =>
  getWithJwtAsync("api/platform/intervaltype");
