import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { routerMiddleware } from "react-router-redux";

import history from "lib/history";
import rootEpic from "rootEpic";
import rootReducer from "rootReducer";

const epicMiddleware = createEpicMiddleware(rootEpic);
const browserRouterMiddleware = routerMiddleware(history);

const middleware = [epicMiddleware, browserRouterMiddleware];

const configureStore = () =>
  createStore(rootReducer, applyMiddleware(...middleware));

export default configureStore;
