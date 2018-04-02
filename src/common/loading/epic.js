import { ofType } from "redux-observable";
import { delay, mapTo } from "rxjs/operators";

import { START_DELAY, endDelay } from "common/loading/actions";

export const loadingEpic = action$ =>
  action$.pipe(ofType(START_DELAY), delay(200), mapTo(endDelay()));
