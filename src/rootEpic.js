import { combineEpics } from "redux-observable";

import { fetchUserEpic } from "login/epic";

export default combineEpics(fetchUserEpic);
