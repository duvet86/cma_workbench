import { combineEpics } from "redux-observable";

import { loginEpic } from "login/epic";
import { fetchProfileEpic } from "profile/epic";
import { myItemsEpic } from "sideBar/myItems/epic";
import { navigationTabsEpic } from "sideBar/navigationTabs/epic";
import { operatorsEpic } from "sideBar/operators/epic";
import { appEpic } from "app/epic";
import { sessionEpic, saveGraphEpic, getGraphEpic } from "workbench/epic";

const epics = [
  loginEpic,
  appEpic,
  fetchProfileEpic,
  myItemsEpic,
  navigationTabsEpic,
  operatorsEpic,
  sessionEpic,
  saveGraphEpic,
  getGraphEpic
];

export default combineEpics(...epics);
