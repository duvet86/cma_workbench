import App from "./App";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import registerServiceWorker from "./lib/registerServiceWorker";

import configureStore from "./lib/configureStore";
import rootSaga from "./login/sagas";

const store = configureStore();
store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
