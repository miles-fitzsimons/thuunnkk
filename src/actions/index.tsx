import axios from "axios";
import * as constants from "../constants";
// import {} from '../' // MILES

export interface FetchItemsBegin {
  type: constants.FETCH_ITEMS_BEGIN;
}

export interface FetchItemsFailure {
  type: constants.FETCH_ITEMS_FAILURE;
  error: string | null;
}

export interface FetchItemsSuccess {
  type: constants.FETCH_ITEMS_SUCCESS;
  items: { id: number; message: string }[];
}

export type FetchAction =
  | FetchItemsBegin
  | FetchItemsFailure
  | FetchItemsSuccess;

// export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export const fetchItems = () => (dispatch: any) => {
  dispatch(fetchItemsBegin());
  return axios
    .get("http://localhost:3001/db")
    .then(res => res.data.items)
    .then(items => {
      dispatch(fetchItemsSuccess(items));
      return items;
    })
    .catch(() => {
      dispatch(fetchItemsFailure("Oh no"));
    });
};

// export const FETCH_ITEMS_BEGIN = "FETCH_ITEMS_BEGIN";
// export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
// export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";

export const fetchItemsBegin = () => ({
  type: constants.FETCH_ITEMS_BEGIN
});

export const fetchItemsSuccess = (items: any) => ({
  type: constants.FETCH_ITEMS_SUCCESS,
  items
});

export const fetchItemsFailure = (error: any) => ({
  type: constants.FETCH_ITEMS_FAILURE,
  error
});
