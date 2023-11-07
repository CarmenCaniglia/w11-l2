import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favourite";
import resultsReducer from "../reducers/results";

const bigReducer = combineReducers({
  favourite: favouriteReducer,
  results: resultsReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
