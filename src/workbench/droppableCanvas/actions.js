export const CANVASOPERATORS_REQUEST = "CANVASOPERATORS_REQUEST";
export const CANVASOPERATORS_SUCCESS = "CANVASOPERATORS_SUCCESS";
export const CANVASOPERATORS_ERROR = "CANVASOPERATORS_ERROR";

export const CANVASOPERATOR_ADD = "CANVASOPERATOR_ADD";
export const CANVASOPERATOR_MOVE = "CANVASOPERATOR_MOVE";
export const CANVASOPERATOR_REMOVE = "CANVASOPERATOR_REMOVE";

export const CONNECTION_ADD = "CONNECTION_ADD";
export const CONNECTION_REMOVE = "CONNECTION_REMOVE";

export const canvasOperatorsRequest = () => ({
  type: CANVASOPERATORS_REQUEST
});

export const canvasOperatorsSuccess = operatorsInCanvas => ({
  type: CANVASOPERATORS_SUCCESS,
  operatorsInCanvas
});

export const canvasOperatorsError = error => ({
  type: CANVASOPERATORS_ERROR,
  error
});

export const canvasOperatorAdd = (operatorId, x, y) => ({
  type: CANVASOPERATOR_ADD,
  operatorId,
  x,
  y
});

export const canvasOperatorMove = (index, x, y) => ({
  type: CANVASOPERATOR_MOVE,
  index,
  x,
  y
});

export const canvasOperatorRemove = index => ({
  type: CANVASOPERATOR_REMOVE,
  index
});

export const connectionAdd = (source, target) => ({
  type: CONNECTION_ADD,
  source,
  target
});

export const connectioRemove = index => ({
  type: CONNECTION_REMOVE,
  index
});
