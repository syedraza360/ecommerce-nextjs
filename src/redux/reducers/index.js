import { combineReducers } from "redux";
import wishlistReducer from "./wishlistReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";
import { modalReducer, quickviewModalReducer } from "./modalReducer";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import menuReducer from "./menuReducer";
import comparelistReducer from "./comparelistReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
  wishlist: wishlistReducer,
  compareList: comparelistReducer,
  modal: modalReducer,
  menu: menuReducer,
  quickviewModal: quickviewModalReducer,
});

export default rootReducer;
