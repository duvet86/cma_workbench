import { getToken } from "lib/authApi";

const getJwtToken = () => {
  const tokenInfo = getToken();
  const token = tokenInfo && tokenInfo.token;
  if (token == null) {
    throw new Error("Missing token.");
  }

  return token;
};

const getJwtHeaders = token => ({
  Authorization: `Bearer ${token}`
});

const handleErrors = response => {
  if (!response.ok) {
    throw response;
  }
  return response.json();
};

export const getAsync = (url, headers = null) =>
  fetch(url, {
    method: "GET",
    headers: headers
  }).then(response => handleErrors(response));

export const postAsync = (url, data, headers = null) =>
  fetch(url, {
    method: "POST",
    headers: headers,
    data
  }).then(response => handleErrors(response));

export const getWithJwtAsync = url => {
  const token = getJwtToken();

  return getAsync(url, getJwtHeaders(token));
};

export const postWithJwtAsync = (url, data) => {
  const token = getJwtToken();

  return postAsync(url, data, getJwtHeaders(token));
};
