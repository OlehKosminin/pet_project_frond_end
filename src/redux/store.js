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
import { petsReducer } from "./pets/pets-slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistNotiesReducer = persistReducer(persistConfig, noticesReducer);
const persistPetsReducer = persistReducer(persistConfig, petsReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    noties: persistNotiesReducer,
    pets: persistPetsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
