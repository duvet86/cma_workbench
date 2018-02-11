import { take, call, put, fork, cancel, cancelled } from "redux-saga/effects";

import * as actions from "login/actions";
import * as Api from "login/api";

function* authorize(user, password) {
  try {
    const token = yield call(Api.authorize, user, password);
    yield put(actions.loginSuccess(token));
    yield call(Api.storeItem, token);
    return token;
  } catch (error) {
    yield put(actions.loginError(error));
  } finally {
    if (yield cancelled()) {
      yield put(actions.logout());
    }
  }
}

function* loginFlow() {
  while (true) {
    const { username, password } = yield take(actions.LOGIN_REQUEST);
    const taskAuthorize = yield fork(authorize, username, password);
    const action = yield take([actions.LOGOUT, actions.LOGIN_ERROR]);
    if (action.type === actions.LOGOUT) yield cancel(taskAuthorize);
    yield call(Api.clearItem, "token");
  }
}

export default function* root() {
  yield fork(loginFlow);
}
