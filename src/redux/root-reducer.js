import { combineReducers } from 'redux';
import contactReducer from './phonebook/contact-reducers';
// import authReducer from './auth/auth-reducers';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactReducer,
  // auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
