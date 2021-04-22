import { combineReducers } from 'redux';
import { items, filter } from './contact-reducers';

export default combineReducers({
  items,
  filter,
});
