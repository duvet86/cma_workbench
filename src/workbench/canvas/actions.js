export const OPEN_CONFIG = "OPEN_CONFIG";
export const CLOSE_CONFIG = "CLOSE_CONFIG";

export const openConfig = (elementType, elementId) => ({
  type: OPEN_CONFIG,
  elementType,
  elementId
});

export const closeConfig = elementType => ({
  type: CLOSE_CONFIG
});
