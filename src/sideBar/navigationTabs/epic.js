import { of } from "rxjs/observable/of";
import { filter, switchMap } from "rxjs/operators";
import { ofType } from "redux-observable";

import { LOCATION_CHANGE } from "rootActions";
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
          return of(showTools());
        case "/pagebuilder/new":
          return of(showFilters());
        default:
          return of(showMyItems());
      }
    })
  );
