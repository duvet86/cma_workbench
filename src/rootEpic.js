import { combineEpics } from "redux-observable";

import { loginEpic } from "login/epic";
import { fetchProfileEpic } from "profile/epic";

const epics = [loginEpic, fetchProfileEpic];

export default combineEpics(...epics);
