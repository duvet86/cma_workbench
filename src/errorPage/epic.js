// @flow

import { push } from "react-router-redux";

import { deleteTokenAndRedirectLogin } from "lib/authApi";
import { triggerError } from "errorPage/actions";

type ErrorResponse = {
  status: number,
  message: string
};

// Same as:
// Observable.of(
//   someAction(xhr),
//   somOtherAction(xhr)
// )
// This relies on the fact that in RxJs v5, arrays can be returned
// whenever an observable is expected and will be consumed as one.
// This is effectively identical to the previous example.
export const errorPage = (
  error: mixed,
  actions: Array<mixed> = []
): Array<mixed> => [
  // Fire 2 actions, one after the other
  triggerError(error),
  push("/error"),
  ...actions
];

export const handleException = (
  response: ErrorResponse,
  ...actions: Array<mixed>
): Array<mixed> => {
  console.error(response);
  switch (response.status) {
    case 401:
      return deleteTokenAndRedirectLogin();
    default:
      return errorPage(response.error || response.message, actions);
  }
};
