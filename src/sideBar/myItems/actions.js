export const MY_ITEMS_REQUEST = "MY_ITEMS_REQUEST";
export const MY_ITEMS_SUCCESS = "MY_ITEMS_SUCCESS";
export const MY_ITEMS_ERROR = "MY_ITEMS_ERROR";

export const myItemsRequest = () => ({
  type: MY_ITEMS_REQUEST
});

export const myItemsSuccess = items => ({ type: MY_ITEMS_SUCCESS, items });

export const myItemsError = error => ({ type: MY_ITEMS_ERROR, error });
