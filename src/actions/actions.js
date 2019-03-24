import { get } from "axios";

export const fetchItems = () => dispatch => {
  dispatch(fetchItemsBegin());
  return get("http://localhost:3001/db")
    .then(res => res.data.items)
    .then(items => {
      dispatch(fetchItemsSuccess(items));
      return items;
    })
    .catch(() => {
      dispatch(fetchItemsFailure("Oh no"));
    });
};

export const FETCH_ITEMS_BEGIN = "FETCH_ITEMS_BEGIN";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";

export const fetchItemsBegin = () => ({
  type: FETCH_ITEMS_BEGIN
});

export const fetchItemsSuccess = items => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: { items }
});

export const fetchItemsFailure = error => ({
  type: FETCH_ITEMS_FAILURE,
  payload: { error }
});
