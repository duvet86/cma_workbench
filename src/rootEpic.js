import { combineEpics } from "redux-observable";

import { loginEpic } from "login/epic";
import { fetchProfileEpic } from "profile/epic";
import { myItemsEpic } from "sideBar/myItems/epic";
import { navigationTabsEpic } from "sideBar/navigationTabs/epic";

const epics = [loginEpic, fetchProfileEpic, myItemsEpic, navigationTabsEpic];

export default combineEpics(...epics);
