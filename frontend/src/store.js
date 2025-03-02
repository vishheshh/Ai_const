  import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage by default
import caste from "./reducers/caste";
import religion from "./reducers/religion";

const persistConfig = {
  key: "root",
  storage,
};

const persistedCasteReducer = persistReducer(persistConfig, caste);
const persistedReligionReducer = persistReducer(persistConfig, religion);

const store = configureStore({
  reducer: {
    caste: persistedCasteReducer,
    religion: persistedReligionReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
