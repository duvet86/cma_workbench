import { Observable } from "rxjs/Observable";

import { LOGIN_REQUEST, loginSuccess, loginError } from "login/actions";
import { authorize, storeItem } from "login/api";

function storeTokenAndTriggerLogingSucces(token) {
  storeItem(token);
  return loginSuccess(token);
}

export const fetchUserEpic = action$ =>
  action$.ofType(LOGIN_REQUEST).mergeMap(({ username, password }) =>
    authorize(username, password)
      .map(token => storeTokenAndTriggerLogingSucces(token))
      .catch(error => Observable.of(loginError(error)))
  );
