// @flow

import { getToken } from "lib/sessionStorageApi";

type AuthHeader = {
  Authorization: string
};

type FullHeader = {
  Authorization: string,
  section: string,
  "Content-Type": string
};

type Header = AuthHeader | FullHeader;

const getJwtToken = (): string => {
  const tokenInfo = getToken();
  const token = tokenInfo && tokenInfo.token;
  if (token == null) {
    throw new Error("Missing token.");
  }

  return token;
};

const getJwtHeaders = (token: string): AuthHeader => ({
  Authorization: `Bearer ${token}`
});

const getHeader = (): FullHeader => {
  const token = getJwtToken();

  return {
    section: "demo",
    "Content-Type": "application/json",
    ...getJwtHeaders(token)
  };
};

const handleErrors = async (response: Response): Promise<any> => {
  if (!response.ok) {
    return response.text().then(error => {
      // eslint-disable-next-line no-throw-literal
      throw { status: response.status, error: error && JSON.parse(error) };
    });
  }

  return response.text().then(res => (res && JSON.parse(res)) || {});
};

export const getAsync = (url: string, headers: Header): Promise<any> =>
  fetch(url, {
    method: "GET",
    headers: headers
  }).then(response => handleErrors(response));

export const postAsync = (
  url: string,
  data: any,
  headers: Header
): Promise<any> =>
  fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  }).then(response => handleErrors(response));

export const getWithJwtAsync = (url: string): Promise<any> =>
  getAsync(url, getHeader());

export const postWithJwtAsync = (url: string, data: any): Promise<any> =>
  postAsync(url, data, getHeader());
