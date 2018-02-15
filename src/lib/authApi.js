import { Observable } from "rxjs/Observable";
import { encode } from "base-64";

import constants from "lib/constants";

export const getTokenAsync = (userName, password) =>
  Observable.fromPromise(
    fetch("http://desktop-ejm4rss/dev/api/token", {
      method: "GET",
      headers: {
        Authorization: `Basic ${encode(userName + ":" + password)}`
      }
    })
      .then(response => response.json())
      .then(token => token)
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
