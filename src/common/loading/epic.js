import { ofType } from "redux-observable";
import { delay, mapTo } from "rxjs/operators";

import { DELAY_START, endDelay } from "common/loading/actions";

export const loadingEpic = action$ =>
  action$.pipe(ofType(DELAY_START), delay(200), mapTo(endDelay()));
