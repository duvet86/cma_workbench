import { push } from "react-router-redux";

import { LOGIN_REQUEST, loginSuccess } from "login/actions";
import { getTokenAsync, storeToken } from "lib/authApi";
import { handleException } from "lib/epicUtils";

function storeTokenAndTriggerLogingSucces(token) {
  storeToken(token);
  return loginSuccess();
}

export const loginEpic = action$ =>
  action$.ofType(LOGIN_REQUEST).mergeMap(({ username, password }) =>
    getTokenAsync(username, password)
      .flatMap(token => [
        // Fire 2 actions, one after the other
        storeTokenAndTriggerLogingSucces(token),
        push("/")
      ])
      .catch(error => handleException(error))
  );
