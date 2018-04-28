import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";

import { handleException } from "errorPage/epic";
import {
  INTERVALTYPE_REQUEST,
  intervalTypesSuccess,
  setIntervalType
} from "common/intervalSelector/actions";
import { getIntervalTypes } from "common/intervalSelector/api";

export const intervalTypeEpic = action$ =>
  action$.pipe(
    ofType(INTERVALTYPE_REQUEST),
    mergeMap(() =>
      getIntervalTypes().pipe(
        map(intervalTypes => [
          intervalTypesSuccess(intervalTypes),
          setIntervalType("DATEOP") // Default to dateop.
        ]),
        catchError(error => handleException(error))
      )
    )
  );
