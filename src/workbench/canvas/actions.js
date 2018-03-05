export const QUERY_ADD = "QUERY_ADD";
export const QUERY_MOVE = "QUERY_MOVE";
export const QUERY_REMOVE = "QUERY_REMOVE";

export const FILTER_ADD = "FILTER_ADD";
export const FILTER_MOVE = "FILTER_MOVE";
export const FILTER_REMOVE = "FILTER_REMOVE";

export const CONNECTION_ADD = "CONNECTION_ADD";
export const CONNECTION_REMOVE = "CONNECTION_REMOVE";

export const operatorAdd = type => (operatorId, x, y) => ({
  type: type,
  operatorId,
  x,
  y
});

export const operatorMove = type => (index, x, y) => {
  return {
    type: type,
    index,
    x,
    y
  };
};

export const operatorRemove = type => index => ({
  type: type,
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
