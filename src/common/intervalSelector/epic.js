import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";

import { handleException } from "errorPage/epic";
import {
  INTERVALTYPE_REQUEST,
  RESOLVE_INTERVAL_REQUEST,
  intervalTypesSuccess
} from "common/intervalSelector/actions";
import {
  getIntervalTypesObs,
  resolveIntervalObs
} from "common/intervalSelector/api";

export const intervalTypeEpic = action$ =>
  action$.pipe(
    ofType(INTERVALTYPE_REQUEST),
    mergeMap(() =>
      getIntervalTypesObs().pipe(
        map(intervalTypes => intervalTypesSuccess(intervalTypes)),
        catchError(error => handleException(error))
      )
    )
  );

export const resolveIntervalEpic = action$ =>
  action$.pipe(
    ofType(RESOLVE_INTERVAL_REQUEST),
    mergeMap((intervalType, offset) =>
      resolveIntervalObs(intervalType, offset).pipe(
        map(interval => intervalTypesSuccess(interval)),
        catchError(error => handleException(error))
      )
    )
  );
