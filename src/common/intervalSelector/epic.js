import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";

import { handleException } from "errorPage/epic";
import {
  INTERVALTYPE_REQUEST,
  intervalTypesSuccess
} from "common/intervalSelector/actions";
import { getIntervalTypesObs } from "common/intervalSelector/api";

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
