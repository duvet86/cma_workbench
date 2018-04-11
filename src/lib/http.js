// @flow

import { getToken } from "lib/sessionStorageApi";

type AuthHeader = {
  Authorization: string
};

type SectionHeader = {
  Authorization: string,
  section: string,
  "Content-Type": string
};

type Header = AuthHeader | SectionHeader;

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

const getHeader = (): SectionHeader => {
  const token = getJwtToken();

  return {
    section: "demo",
    "Content-Type": "application/json",
    ...getJwtHeaders(token)
  };
};

const handleErrors = async (response: Response): Promise<mixed> => {
  if (!response.ok) {
    const error = await response.text();
    // eslint-disable-next-line no-throw-literal
    throw { status: response.status, error: error && JSON.parse(error) };
  }

  const res = await response.text();

  try {
    return (res && JSON.parse(res)) || {};
  } catch (e) {
    console.error(e);
    // eslint-disable-next-line no-throw-literal
    throw {
      status: "javascript error",
      error: e.toString(),
      tip: "Have you changed the BASE_URL in the constants file?"
    };
  }
};

export const getAsync = async (
  url: string,
  headers: Header
): Promise<mixed> => {
  const response = await fetch(url, {
    method: "GET",
    headers: headers
  });

  return handleErrors(response);
};

export const postAsync = async (
  url: string,
  data: mixed,
  headers: Header
): Promise<mixed> => {
  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  });

  return handleErrors(response);
};

export const getWithJwtAsync = (url: string): Promise<mixed> =>
  getAsync(url, getHeader());

export const postWithJwtAsync = (url: string, data: mixed): Promise<mixed> =>
  postAsync(url, data, getHeader());
