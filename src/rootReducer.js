import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import loginReducer from "login/reducer";
import profileReducer from "profile/reducer";

export default combineReducers({
  routerReducer,
  loginReducer,
  profileReducer
});
