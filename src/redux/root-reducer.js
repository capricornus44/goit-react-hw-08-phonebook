import { combineReducers } from 'redux';
import contactReducer from './phonebook/contact-reducers';
import authReducer from './auth/auth-reducers';

export default combineReducers({
  contacts: contactReducer,
  auth: authReducer,
});
