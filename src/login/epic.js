import { Observable } from "rxjs/Observable";
import { push } from "react-router-redux";

import { LOGIN_REQUEST, loginSuccess, loginError } from "login/actions";
import { getTokenAsync, storeToken, clearToken } from "lib/authApi";

function storeTokenAndTriggerLogingSucces(token) {
  storeToken(token);
  return loginSuccess();
}

function deleteTokenAndTriggerLogingError(error) {
  clearToken();
  return loginError(error);
}

export const fetchUserEpic = action$ =>
  action$.ofType(LOGIN_REQUEST).mergeMap(({ username, password }) =>
    getTokenAsync(username, password)
      .flatMap(token =>
        Observable.concat(
          // Fire 2 actions, one after the other
          Observable.of(storeTokenAndTriggerLogingSucces(token)),
          Observable.of(push("/"))
        )
      )
      .catch(error => Observable.of(deleteTokenAndTriggerLogingError(error)))
  );
