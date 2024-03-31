import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart", "wishlist", "compareList"],
};

const thunkMiddleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(
  persistedReducer,
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(applyMiddleware(...thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__())
    : applyMiddleware(...thunkMiddleware)
);
export let persistor = persistStore(store);
