import { Observable } from "rxjs/Observable";
import { push } from "react-router-redux";

import { deleteTokenAndRedirectLogin } from "lib/authApi";

// Same as:
// Observable.of(
//   someAction(xhr),
//   somOtherAction(xhr)
// )
// This relies on the fact that in RxJs v5, arrays can be returned
// whenever an observable is expected and will be consumed as one.
// This is effectively identical to the previous example, but some
// find this too magical/terse because many people are still unfamiliar
// with this feature.
export const errorPage = (error, actionFunc) => [
  // Fire 2 actions, one after the other
  Observable.of(actionFunc(error)),
  Observable.of(push("/error"))
];

export const handleException = (error, actionErrorFunc) => {
  switch (error.status) {
    case 401:
      return deleteTokenAndRedirectLogin();
    default:
      return errorPage(error, actionErrorFunc);
  }
};
