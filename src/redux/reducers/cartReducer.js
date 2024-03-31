import { Cart } from "../constants";

const initialState = { visible: false, items: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Cart.OPEN:
      return { ...state, visible: true };

    case Cart.CLOSE:
      return { ...state, visible: false };

    case Cart.ADD_ITEM: {
      const { payload } = action;
      return { items: [...state.items, { ...payload, quantity: 1 }], visible: true };
    }

    case Cart.REMOVE_ITEM: {
      const { payload } = action;
      if (payload.length < 1) {
        return {
          ...state,
          items: [],
        };
      } else {
        const index = state.items.findIndex((item) => item._id === payload._id);
        state.items.splice(index, 1);
        return { ...state };
      }
    }

    case Cart.INCREASE_QUANTITY: {
      const { payload } = action;
      const cartItem = state.items.find((item) => item._id === payload._id);

      cartItem.quantity += 1;
      return { ...state, visible: true };
    }

    case Cart.DECREASE_QUANTITY: {
      const { payload } = action;
      const cartItem = state.items.find((item) => item._id === payload._id);

      cartItem.quantity -= 1;

      return { ...state, visible: true };
    }

    default:
      return state;
  }
};

export default cartReducer;
