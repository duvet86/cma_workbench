import { Observable } from "rxjs/Observable";
import { encode } from "base-64";
import { push } from "react-router-redux";

import constants from "lib/constants";
import { getAsync } from "lib/http";

export const getTokenAsync = (userName, password) =>
  Observable.fromPromise(
    getAsync("http://desktop-ejm4rss/dev/api/token", {
      Authorization: `Basic ${encode(userName + ":" + password)}`
    })
  );

export const storeToken = token =>
  sessionStorage.setItem(
    constants.TOKEN_KEY,
    JSON.stringify({
      token,
      createdAt: Date.now()
    })
  );

export const clearToken = () => sessionStorage.removeItem(constants.TOKEN_KEY);

export const getToken = () =>
  JSON.parse(sessionStorage.getItem(constants.TOKEN_KEY));

export function deleteTokenAndRedirectLogin() {
  clearToken();
  return Observable.of(push("/login"));
}

export function isUserAuthenticated() {
  // attempt to grab the token from localstorage
  const jwtToken = getToken();

  // if it exists
  if (jwtToken) {
    // compare the total seconds of the created
    // time of the token vs the ttl (time to live) seconds
    const createdDate = new Date(jwtToken.createdAt);
    const created = Math.round(createdDate.getTime() / 1000);
    const expiry = created + constants.TIME_TO_LIVE;

    // if the token has expired return false
    if (created > expiry) {
      clearToken();
      return false;
    }

    return true;
  }

  return false;
}
