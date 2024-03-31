import { Wishlist } from "../constants";

const initialState = { items: [] };

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case Wishlist.ADD_ALL_ITEM: {
      const { payload } = action;
      return { items: [...payload] };
    }
    case Wishlist.ADD_ITEM: {
      const { payload } = action;
      return { ...state, items: [...state.items, payload] };
    }

    case Wishlist.REMOVE_ITEM: {
      const { payload } = action;
      const index = state.items.findIndex((item) => item._id === payload._id);
      state.items.splice(index, 1);
      return { ...state };
    }

    default:
      return state;
  }
};

export default wishlistReducer;
