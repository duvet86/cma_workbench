import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";

import { handleException } from "errorPage/epic";
import { OPERATORS_REQUEST, operatorsSuccess } from "sideBar/operators/actions";
import { getOperatorsAsync } from "sideBar/operators/api";
import { staticOperatorsList } from "sideBar/operators/operatorsData";

export const operatorsEpic = action$ =>
  action$.pipe(
    ofType(OPERATORS_REQUEST),
    mergeMap(() =>
      getOperatorsAsync().pipe(
        map(response => operatorsSuccess(staticOperatorsList.concat(response))),
        catchError(error => handleException(error))
      )
    )
  );
