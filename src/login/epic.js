import { Observable } from "rxjs/Observable";
import { push } from "react-router-redux";

import { LOGIN_REQUEST, loginSuccess, loginError } from "login/actions";
import {
  getTokenAsync,
  storeToken,
  deleteTokenAndRedirectLogin
} from "lib/authApi";

function storeTokenAndTriggerLogingSucces(token) {
  storeToken(token);
  return loginSuccess();
}

export const loginEpic = action$ =>
  action$.ofType(LOGIN_REQUEST).mergeMap(({ username, password }) =>
    getTokenAsync(username, password)
      .flatMap(token =>
        Observable.concat(
          // Fire 2 actions, one after the other
          Observable.of(storeTokenAndTriggerLogingSucces(token)),
          Observable.of(push("/"))
        )
      )
      .catch(error => {
        error.status === 401
          ? deleteTokenAndRedirectLogin()
          : Observable.of(loginError(error));
      })
  );
