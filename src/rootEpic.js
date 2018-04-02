import { combineEpics } from "redux-observable";

import { loadingEpic } from "common/loading";
import { loginEpic } from "login/epic";
import { fetchProfileEpic } from "profile/epic";
import { myItemsEpic } from "sideBar/myItems/epic";
import { navigationTabsEpic } from "sideBar/navigationTabs/epic";
import { operatorsEpic } from "sideBar/operators/epic";
import { appEpic } from "app/epic";
import {
  sessionEpic,
  saveGraphEpic,
  pushGraphChangesEpic,
  popGraphChangesEpic,
  addQueryEpic,
  updateQueryDataServiceEpic
} from "workbench/epic";
import { dataServicesEpic, serviceDescriptionEpic } from "workbench/query/epic";

const epics = [
  loadingEpic,
  loginEpic,
  appEpic,
  fetchProfileEpic,
  myItemsEpic,
  navigationTabsEpic,
  operatorsEpic,
  sessionEpic,
  saveGraphEpic,
  pushGraphChangesEpic,
  popGraphChangesEpic,
  addQueryEpic,
  dataServicesEpic,
  updateQueryDataServiceEpic,
  serviceDescriptionEpic
];

export default combineEpics(...epics);
