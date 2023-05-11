import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/auth-slice";
import notiesReduser from "./noties/noties-slice";
// import petsReduser from "./pets/pets-selector";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistNotiesReducer = persistReducer(persistConfig, notiesReduser);
// const persistPetsReduser = persistReducer(persistConfig, petsReduser);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  noties: persistNotiesReducer,
  // pets: persistPetsReduser,
});

export default rootReducer;
