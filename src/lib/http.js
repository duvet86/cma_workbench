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

const getHeader = () => {
  const token = getJwtToken();

  return {
    section: "demo",
    "Content-Type": "application/json",
    ...getJwtHeaders(token)
  };
};

const handleErrors = async response => {
  if (!response.ok) {
    return response.text().then(error => {
      // eslint-disable-next-line no-throw-literal
      throw { status: response.status, error: error && JSON.parse(error) };
    });
  }

  return response.text().then(res => (res && JSON.parse(res)) || {});
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
    body: JSON.stringify(data)
  }).then(response => handleErrors(response));

export const getWithJwtAsync = url => getAsync(url, getHeader());

export const postWithJwtAsync = (url, data) =>
  postAsync(url, data, getHeader());
