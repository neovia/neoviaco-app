import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { reducerApp } from "./reducer";
import { reducerUser } from "../../user/redux/reducer";


const middleware = [thunk];

const reducer = combineReducers({
  app:reducerApp,
  user:reducerUser
});

export const store = configureStore( {
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  reducer: reducer
});

  // assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof store.getState>
