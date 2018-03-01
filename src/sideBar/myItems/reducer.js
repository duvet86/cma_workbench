import { MY_ITEMS_REQUEST, MY_ITEMS_SUCCESS } from "sideBar/myItems/actions";

function myItems(
  state = {
    isLoading: true,
    items: {}
  },
  action
) {
  switch (action.type) {
    case MY_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case MY_ITEMS_SUCCESS:
      return {
        isLoading: false,
        items: action.items
      };

    default:
      return state;
  }
}

export default myItems;
