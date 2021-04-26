import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { user } from './auth/auth-reducers';
import contactReducer from './phonebook/contact-reducers';

import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['idToken', 'email', 'localId', 'refreshToken'],
};

// import rootReducer from './root-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: {
    auth: combineReducers({
      user: persistReducer(authPersistConfig, user),
    }),
    contacts: contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export default store;
