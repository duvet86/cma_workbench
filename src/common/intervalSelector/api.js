import { from } from "rxjs";

import { getWithJwtAsync } from "lib/http";

export const getIntervalTypesObs = () =>
  from(getWithJwtAsync("api/platform/intervaltypes"));
