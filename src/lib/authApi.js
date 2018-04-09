// @flow

import { fromPromise } from "rxjs/observable/fromPromise";
import { encode } from "base-64";
import { push } from "react-router-redux";

import { BASE_URL, TIME_TO_LIVE } from "lib/constants";
import { clearToken, getToken } from "lib/sessionStorageApi";
import { getAsync } from "lib/http";

import { logout } from "login/actions";

export const getTokenAsync = (
  userName: string,
  password: string
): Promise<string> =>
  fromPromise(
    getAsync(`${BASE_URL}/api/token`, {
      Authorization: `Basic ${encode(userName + ":" + password)}`
    })
  );

export function deleteTokenAndRedirectLogin() {
  clearToken();
  return [logout(), push("/login")];
}

export function isUserAuthenticated() {
  // attempt to grab the token from localstorage
  const jwtToken = getToken();

  // if it exists
  if (jwtToken) {
    // compare the total seconds of the created
    // time of the token vs the ttl (time to live) seconds
    const expiry = jwtToken.createdAt + TIME_TO_LIVE;

    // if the token has expired return false
    if (jwtToken.createdAt > expiry) {
      clearToken();
      return false;
    }

    return true;
  }

  return false;
}
