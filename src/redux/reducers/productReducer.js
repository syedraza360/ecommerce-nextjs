import { Product } from "../constants";
import { products } from "../../mock/products";

const initialState = { items: products };

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Product.STORE:
      const { payload } = action;
      return { ...state, items: payload };

    default:
      return state;
  }
};

export default productReducer;
