import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";

import { handleException } from "lib/epicUtils";
import {
  OPERATORS_REQUEST,
  operatorsSuccess
} from "sideBar/workbenchTools/actions";

import { getOperatorsAsync } from "sideBar/workbenchTools/api";

export const operatorsEpic = action$ =>
  action$.pipe(
    ofType(OPERATORS_REQUEST),
    mergeMap(() =>
      getOperatorsAsync().pipe(
        map(response => operatorsSuccess(response)),
        catchError(error => handleException(error))
      )
    )
  );
