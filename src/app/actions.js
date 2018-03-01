export const QES_ENABLED_REQUEST = "QES_ENABLED_REQUEST";
export const QES_ENABLED_SUCCESS = "QES_ENABLED_SUCCESS";
export const QES_ENABLED_ERROR = "QES_ENABLED_ERROR";

export const qesEnabledRequest = () => ({
  type: QES_ENABLED_REQUEST
});

export const qesEnabledSuccess = isQesEnabled => ({
  type: QES_ENABLED_SUCCESS,
  isQesEnabled
});

export const qesEnabledError = error => ({
  type: QES_ENABLED_ERROR,
  error
});
