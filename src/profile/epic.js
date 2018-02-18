import { handleException } from "lib/epicUtils";
import { PROFILE_REQUEST, profileSuccess } from "profile/actions";
import { getUserInfoAsync } from "profile/api";

export const fetchProfileEpic = action$ =>
  action$.ofType(PROFILE_REQUEST).mergeMap(() =>
    getUserInfoAsync()
      .map(response => profileSuccess(response))
      .catch(error => handleException(error))
  );
