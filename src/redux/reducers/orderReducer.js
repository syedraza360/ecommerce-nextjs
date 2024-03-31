import { Order } from "../constants";

const initialState = {
  items: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case Order.SAVE_DATA: {
      const { payload } = action;
      return { ...state, ...payload };
    }

    default:
      return state;
  }
};

export default orderReducer;
