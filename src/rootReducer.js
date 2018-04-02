import { combineReducers } from "redux";

import { routerReducer } from "react-router-redux";
import { loadingReducer } from "common/loading";
import errorReducer from "errorPage/reducer";
import loginReducer from "login/reducer";
import profileReducer from "profile/reducer";
import myItemsReducer from "sideBar/myItems/reducer";
import navigationTabsReducer from "sideBar/navigationTabs/reducer";
import operatorsReducer from "sideBar/operators/reducer";
import appReducer from "app/reducer";
import sessionReducer from "workbench/reducer";
import configSwitchReducer from "workbench/configSwitch/reducer";
import queryConfigReducer from "workbench/query/reducer";

export default combineReducers({
  routerReducer,
  loadingReducer,
  errorReducer,
  loginReducer,
  appReducer,
  profileReducer,
  myItemsReducer,
  navigationTabsReducer,
  operatorsReducer,
  sessionReducer,
  configSwitchReducer,
  queryConfigReducer
});
