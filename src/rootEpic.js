import { combineEpics } from "redux-observable";

import { loginEpic } from "login/epic";
import { fetchProfileEpic } from "profile/epic";
import { myItemsEpic } from "sideBar/myItems/epic";

const epics = [loginEpic, fetchProfileEpic, myItemsEpic];

export default combineEpics(...epics);
