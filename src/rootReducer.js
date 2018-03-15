import { combineReducers } from "redux";

import { routerReducer } from "react-router-redux";
import errorReducer from "errorPage/reducer";
import loginReducer from "login/reducer";
import profileReducer from "profile/reducer";
import myItemsReducer from "sideBar/myItems/reducer";
import navigationTabsReducer from "sideBar/navigationTabs/reducer";
import operatorsReducer from "sideBar/operators/reducer";
import appReducer from "app/reducer";
import sessionReducer from "workbench/sessionReducer";
//import canvasSliceReducer from "workbench/canvas/reducer";
import graphReducer from "workbench/graphReducer";

// Combining 2 reducers together. The sessioReducer feeds the canvas one.
//const canvasReducer = (state, action) =>
//canvasSliceReducer(sessionReducer(state, action), action);

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
  //canvasReducer,
  graphReducer
});
