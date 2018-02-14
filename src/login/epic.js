import { Observable } from "rxjs/Observable";
import { push } from "react-router-redux";

import { LOGIN_REQUEST, loginSuccess, loginError } from "login/actions";
import { authorize, storeItem } from "login/api";

function storeTokenAndTriggerLogingSucces(token) {
  storeItem(token);
  return loginSuccess(token);
}

export const fetchUserEpic = action$ =>
  action$.ofType(LOGIN_REQUEST).mergeMap(({ username, password }) =>
    authorize(username, password)
      .flatMap(token =>
        Observable.concat(
          // Fire 2 actions, one after the other
          Observable.of(storeTokenAndTriggerLogingSucces(token)),
          Observable.of(push("/"))
        )
      )
      .catch(error => Observable.of(loginError(error)))
  );
