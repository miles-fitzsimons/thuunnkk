// import {
//   FETCH_ITEMS_BEGIN,
//   FETCH_ITEMS_SUCCESS,
//   FETCH_ITEMS_FAILURE
// } from "../actions/actions.tsx";

import { FetchAction } from "../actions";
import { StoreState } from "../types/index";
import {
  FETCH_ITEMS_BEGIN,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_SUCCESS
} from "../constants/index";

const initialState: StoreState = {
  items: [],
  isLoading: false,
  error: null
};

export const reducer = (
  state: StoreState = initialState,
  action: FetchAction
): StoreState => {
  switch (action.type) {
    case FETCH_ITEMS_BEGIN:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.items
      };

    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
};
