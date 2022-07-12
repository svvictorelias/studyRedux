import { UserType } from "../../actions";
import * as types from "../../types";

export interface UserState {
  user: UserType;
  loading: boolean;
  error: string;
}

const initialState: UserState = {
  user: {
    description: "",
    name: "",
    price: '',
  },
  loading: false,
  error: "",
};

export const userReducer = (
  state = initialState,
  action: {
    type: string;
    payload: UserType;
  }
) => {
  switch (action.type) {
    case types.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        user: action.payload,
        error: ''
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: ''
      };
    case types.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default: return state
  }
};
