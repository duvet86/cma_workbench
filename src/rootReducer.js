import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import errorReducer from "errorPage/reducer";
import loginReducer from "login/reducer";
import profileReducer from "profile/reducer";
import myItemsReducer from "sideBar/myItems/reducer";
import navigationTabsReducer from "sideBar/navigationTabs/reducer";
import operatorsReducer from "sideBar/operators/reducer";
import appReducer from "app/reducer";
import sessionReducer from "workbench/reducer";
import droppableCanvasReducer from "workbench/droppableCanvas/reducer";

export default combineReducers({
  routerReducer,
  errorReducer,
  loginReducer,
  appReducer,
  profileReducer,
  myItemsReducer,
  navigationTabsReducer,
  operatorsReducer,
  sessionReducer,
  droppableCanvasReducer
});
