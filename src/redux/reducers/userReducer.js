import { User } from "../constants";
import Cookies from "js-cookie";

const initialState = {
  isLoggedIn:
    Cookies.get("token") !== null &&
    Cookies.get("token") !== undefined &&
    Cookies.get("token") !== "",
  data: {
    _id: "",
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case User.LOG_IN: {
      const { data } = action.payload;
      return { ...state, data, isLoggedIn: true };
    }

    case User.LOG_OUT: {
      window.location.pathname = "/";
      return { ...state, data: {}, isLoggedIn: false };
    }

    case User.SIGN_UP_WITHOUT_PASSWORD: {
      const { payload } = action;
      return { ...state, data: payload, isLoggedIn: true };
    }

    case User.UPDATE_INFO: {
      const { payload } = action;
      return { ...state, data: payload };
    }

    default:
      return state;
  }
};

export default userReducer;
