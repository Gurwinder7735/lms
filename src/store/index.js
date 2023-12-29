// import { rootApi } from "src/services/api";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
// import { persistReducer } from "redux-persist";
// or use 'redux-persist/lib/localStorage' for localStorage

// const middlewares = [rootApi.middleware];
const middlewares = [];

// const persistConfig = {
  // key: "root", // a unique key to identify the root of your Redux store in local storage
  // storage, // the storage engine to use (e.g., localStorage, sessionStorage)
  // Optionally, you can specify specific state slices to persist:
  // whitelist: ['slice1', 'slice2'],
  // blacklist: ['slice3', 'slice4']
// };

/* This code is configuring and creating a Redux store using the `configureStore` function from the
`@reduxjs/toolkit` library. */
const store = configureStore({
  reducer:  rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;

