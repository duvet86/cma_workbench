import { ofType } from "redux-observable";
import { mergeMap, flatMap, catchError } from "rxjs/operators";
import { push } from "react-router-redux";

import { LOGIN_REQUEST, loginSuccess } from "login/actions";
import { getTokenAsync, storeToken } from "lib/authApi";
import { handleException } from "errorPage/epic";

function storeTokenAndTriggerLogingSucces(token) {
  storeToken(token);
  return loginSuccess();
}

export const loginEpic = action$ =>
  action$.pipe(
    ofType(LOGIN_REQUEST),
    mergeMap(({ username, password }) =>
      getTokenAsync(username, password).pipe(
        flatMap(token => [
          // Fire 2 actions, one after the other
          storeTokenAndTriggerLogingSucces(token),
          push("/")
        ]),
        catchError(error => handleException(error))
      )
    )
  );
