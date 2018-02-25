import { combineEpics } from "redux-observable";

import { loginEpic } from "login/epic";
import { fetchProfileEpic } from "profile/epic";
import { myItemsEpic } from "sideBar/myItems/epic";
import { navigationTabsEpic } from "sideBar/navigationTabs/epic";
import { operatorsEpic } from "sideBar/operators/epic";

const epics = [
  loginEpic,
  fetchProfileEpic,
  myItemsEpic,
  navigationTabsEpic,
  operatorsEpic
];

export default combineEpics(...epics);
