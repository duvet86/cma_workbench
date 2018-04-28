import { ofType } from "redux-observable";
import { of } from "rxjs";
import { mergeMap, flatMap, catchError } from "rxjs/operators";
import { push } from "react-router-redux";

import { LOGIN_REQUEST, loginSuccess, loginError } from "login/actions";
import { getTokenAsync } from "lib/authApi";
import { storeToken } from "lib/sessionStorageApi";

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
        catchError(error => of(loginError(error)))
      )
    )
  );
