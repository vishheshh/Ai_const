import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage
import caste from "./reducers/caste";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, caste);

const store = configureStore({
  reducer: {
    caste: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
