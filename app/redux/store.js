import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from '@/app/redux/productsSlice';
import bagReducer from '@/app/redux/bagSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'persist-root',
  storage,
};

// Combine reducers first
const rootReducer = combineReducers({
    productsStore: productsReducer,
    bag: bagReducer
});

// Then create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);