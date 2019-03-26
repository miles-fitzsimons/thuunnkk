import {
  FETCH_ITEMS_BEGIN,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE
} from "../actions/actions";

const initialState = {
  items: [],
  isLoading: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  console.log("REDUCER", action);
  switch (action.type) {
    case FETCH_ITEMS_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false, // MILES
        error: null,
        items: action.payload.items
      };

    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        items: []
      };

    case "HYDRATE_STORE":
      return { ...state, items: action.items };

    default:
      return state;
  }
};
