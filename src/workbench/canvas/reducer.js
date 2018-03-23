import { OPEN_CONFIG, CLOSE_CONFIG } from "workbench/canvas/actions";

const initialState = {
  elementId: 0
};

function elementConfigReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_CONFIG:
      return {
        elementId: action.elementId
      };

    case CLOSE_CONFIG:
      return {
        ...initialState
      };

    default:
      return state;
  }
}

export default elementConfigReducer;
