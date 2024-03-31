import { Product, User, Wishlist, CompareList } from "../constants";
import Cookies from "js-cookie";
import { message } from "antd";

export const loginUserAction = (data) => (dispatch) => {
  const userData = { ...data.user };
  Cookies.set("token", data.jwt, { expires: 60 });
  Cookies.set("_PD_DATA_CAP", JSON.stringify(userData), { expires: 60 });

  dispatch({ type: User.LOG_IN, payload: { data: userData } });
};

export const logoutAction = () => (dispatch) => {
  Cookies.remove("token");
  Cookies.remove("_PD_DATA_CAP");
  localStorage.clear();
  dispatch({ type: User.LOG_OUT });
};

export const updateUserData = (payload) => {
  Cookies.set("_PD_DATA_CAP", JSON.stringify(payload));
  return { type: User.UPDATE_INFO, payload };
};

export const storeAllProducts = (payload) => (dispatch) => {
  dispatch({ type: Product.STORE, payload });
};

export const addAllItemToWishlist = (payload) => {
  return { type: Wishlist.ADD_ALL_ITEM, payload };
};

export const addItemToWishlist = (payload) => {
  message.success("Added to wishlist successfully");
  return { type: Wishlist.ADD_ITEM, payload };
};

export const removeWishlistItem = (payload) => {
  message.success("Removed from wishlist successfully");
  return { type: Wishlist.REMOVE_ITEM, payload };
};

export const addItemToCompareList = (payload) => (dispatch, getState) => {
  dispatch({ type: CompareList.ADD_ITEM_TO_COMPARE_LIST, payload });
};

export const removeItemFromCompareList = (payload) => {
  return { type: CompareList.REMOVE_ITEM_FROM_COMPARE_LIST, payload };
};
