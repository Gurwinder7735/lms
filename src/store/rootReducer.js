// import { rootApi } from "src/services/api";
import { combineReducers } from "@reduxjs/toolkit";
import commonReducer from "./features/common";



const appReducer = combineReducers({
  common: commonReducer,
  // [rootApi.reducerPath]: rootApi.reducer,
});

const rootReducer = (state, action) => {

  return appReducer(state, action);
};

export default rootReducer;
