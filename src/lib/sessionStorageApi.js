// @flow

import constants from "lib/constants";

type Token = { createdAt: number, token: string };

export const storeToken = (token: string): void =>
  sessionStorage.setItem(
    constants.TOKEN_KEY,
    JSON.stringify({
      token,
      createdAt: Math.floor(Date.now() / 1000)
    })
  );

export const clearToken = (): void =>
  sessionStorage.removeItem(constants.TOKEN_KEY);

export const getToken = (): ?Token => {
  const tokenKey = sessionStorage.getItem(constants.TOKEN_KEY);
  if (!tokenKey) {
    return null;
  }

  return JSON.parse(tokenKey);
};
