import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// import rootReduser from "./root-reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/auth-slice";
import { noticesReducer } from "./noties/noties-slice";
import {friendsReducer} from "../redux/friends/friend-slice";
// import petsReduser from "./pets/pets-selector";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistNotiesReducer = persistReducer(persistConfig, noticesReducer);
const persistFriendsReduser = persistReducer(persistConfig, friendsReducer);
// const persistPetsReduser = persistReducer(persistConfig, petsReduser);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    noties: persistNotiesReducer,
    friends: persistFriendsReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
