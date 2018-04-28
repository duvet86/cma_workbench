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
  addQueryEpic,
  updateQueryDataServiceEpic
} from "workbench/epic";
import {
  dataServicesEpic,
  filterCapabilitiesEpic,
  serviceDescriptionEpic
} from "workbench/query/epic";
import { intervalTypeEpic } from "common/intervalSelector/epic";

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
  addQueryEpic,
  dataServicesEpic,
  filterCapabilitiesEpic,
  updateQueryDataServiceEpic,
  serviceDescriptionEpic,
  intervalTypeEpic
];

export default combineEpics(...epics);
