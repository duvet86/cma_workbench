import { Observable } from "rxjs/Observable";
import { encode } from "base-64";

export const authorize = (userName, password) =>
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

export function storeItem(token) {
  sessionStorage.setItem("token", JSON.stringify(token));
}
export function clearItem(itemKey) {
  sessionStorage.removeItem(itemKey);
}
