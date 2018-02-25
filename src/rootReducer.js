import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import errorReducer from "errorPage/reducer";
import loginReducer from "login/reducer";
import profileReducer from "profile/reducer";
import myItemsReducer from "sideBar/myItems/reducer";
import navigationTabsReducer from "sideBar/navigationTabs/reducer";
import operatorsReducer from "sideBar/workbenchTools/reducer";

export default combineReducers({
  routerReducer,
  errorReducer,
  loginReducer,
  profileReducer,
  myItemsReducer,
  navigationTabsReducer,
  operatorsReducer
});
