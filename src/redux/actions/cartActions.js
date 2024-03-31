import { Cart } from "../constants";

const openCart = () => {
  return { type: Cart.OPEN };
};

const closeCart = () => {
  return { type: Cart.CLOSE };
};

const addItemToCart = (payload) => (dispatch, store) => {
  const { items: cartItems } = store().cart;

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];

    if (item._id == payload._id) {
      dispatch({ type: Cart.INCREASE_QUANTITY, payload });
      return;
    }
  }

  dispatch({ type: Cart.ADD_ITEM, payload });
};

const removeCartItem = (payload) => {
  return { type: Cart.REMOVE_ITEM, payload };
};

const increaseCartItemQuantity = (payload) => {
  return { type: Cart.INCREASE_QUANTITY, payload };
};

const decreaseCartItemQuantity = (payload) => {
  return { type: Cart.DECREASE_QUANTITY, payload };
};

export {
  openCart,
  closeCart,
  addItemToCart,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
};
