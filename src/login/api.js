import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/dom/ajax";

export const authorize = (userName, password) =>
  Observable.fromPromise(
    fetch(
      `http://localhost:8081/api/token?username=${userName}&password=${password}`
    )
      .then(response => response.json())
      .then(({ Token }) => Token)
  );

export function storeItem(token) {
  sessionStorage.setItem("token", JSON.stringify(token));
}
export function clearItem(itemKey) {
  sessionStorage.removeItem(itemKey);
}
