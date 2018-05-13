import { from } from "rxjs";

import { getWithJwtAsync } from "lib/http";

export const getIntervalTypesObs = () =>
  from(getWithJwtAsync("api/platform/intervaltypes"));

export const resolveIntervalObs = (intervalType, offset) =>
  from(
    getWithJwtAsync(
      `api/platform/interval/${intervalType}/resolve?offset=${offset}`
    )
  );
