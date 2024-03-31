import { Wishlist, CompareList } from "../constants";
import { message } from "antd";

const comparelistReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case CompareList.ADD_ITEM_TO_COMPARE_LIST: {
      const { payload } = action;
      message.success("Product added to compare list");
      return { ...state, items: [...state.items, payload] };
    }

    case CompareList.REMOVE_ITEM_FROM_COMPARE_LIST: {
      const { payload } = action;
      const index = state.items.findIndex((item) => item._id === payload._id);
      state.items.splice(index, 1);
      message.success("Product removed from compare list");
      return { ...state };
    }

    default:
      return state;
  }
};

export default comparelistReducer;
