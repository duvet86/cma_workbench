import { of } from "rxjs/observable/of";
import { filter, switchMap } from "rxjs/operators";
import { ofType } from "redux-observable";

import { LOCATION_CHANGE } from "routes/actions";
import {
  showMyItems,
  showFilters,
  showTools
} from "sideBar/navigationTabs/actions";

export const navigationTabsEpic = action$ =>
  action$.pipe(
    ofType(LOCATION_CHANGE),
    filter(
      ({ location: { pathname } }) =>
        pathname === "/" ||
        pathname === "/workbench/new" ||
        pathname === "/pagebuilder/new"
    ),
    switchMap(({ location: { pathname } }) => {
      switch (pathname) {
        case "/workbench/new":
          return of(showTools([false, false, false]));
        case "/pagebuilder/new":
          return of(showFilters([false, false, true]));
        default:
          return of(showMyItems([false, true, true]));
      }
    })
  );
