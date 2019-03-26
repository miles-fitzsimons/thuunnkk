import { get } from "axios";

export const fetchItems = redirect => dispatch => {
  dispatch(fetchItemsBegin());

  return get("http://localhost:3001/db")
    .then(res => res.data.items)
    .then(items => {
      wait(2000);
      dispatch(fetchItemsSuccess(items));
      redirect("/page2/");
      return items;
    })
    .catch(err => {
      console.log("ERR", err);
      dispatch(fetchItemsFailure(err.message));
    });
};

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

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
