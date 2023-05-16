import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import locationReducer from "./reducers/locationReducer";
import seoReducer from "./reducers/seoReducer";
import schemeReducer from "./reducers/schemeReducer";
import headerReducer from "./reducers/headerReducer";

const rootReducer = combineReducers({
  seoReducer: seoReducer,
  locationReducer: locationReducer,
  schemeReducer: schemeReducer,
  headerReducer, headerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
});