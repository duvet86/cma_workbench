import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";

import rootEpic from "rootEpic";
import rootReducer from "rootReducer";

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  return store;
}
