import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import locationReducer from "./reducers/locationReducer";
import seoReducer from "./reducers/seoReducer";

const rootReducer = combineReducers({
  seoReducer: seoReducer,
  locationReducer: locationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
});