import { ProductsType } from "../../actions";
import * as types from "../../types";

export interface DataState {
  data: ProductsType;
  loading: boolean;
  error: string;
}

const initialState: DataState = {
  data: {
    products:[]
  },
  loading: false,
  error: "",
};

export const dataReducer = (
  state = initialState,
  action: {
    type: string;
    payload: ProductsType;
  }
) => {
  switch (action.type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        data: action.payload,
        error: ''
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default: return state
  }
};
