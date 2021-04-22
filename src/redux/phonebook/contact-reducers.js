import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getContactsSuccess,
  addContactSuccess,
  deleteContactSuccess,
  filterContact,
} from './contact-actions';

const items = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => [...payload],
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
