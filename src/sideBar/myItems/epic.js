import { handleException } from "lib/epicUtils";
import { MY_ITEMS_REQUEST, myItemsSuccess } from "sideBar/myItems/actions";
import { getMyItemsAsync } from "sideBar/myItems/api";

export const myItemsEpic = action$ =>
  action$.ofType(MY_ITEMS_REQUEST).mergeMap(() =>
    getMyItemsAsync()
      .map(response => myItemsSuccess(response))
      .catch(error => handleException(error))
  );
