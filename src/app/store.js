import { configureStore } from '@reduxjs/toolkit';
import { persistedContactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { persistStore } from 'redux-persist';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
