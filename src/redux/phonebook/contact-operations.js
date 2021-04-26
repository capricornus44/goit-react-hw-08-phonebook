import axios from 'axios';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contact-actions';

const setAuthToken = token => {
  axios.defaults.params = {
    auth: token,
  };
};

export const getContacts = () => async (dispatch, getState) => {
  const {
    user: { localId, idToken },
  } = getState().auth;

  dispatch(getContactsRequest());
  setAuthToken(idToken);

  try {
    const response = await axios.get(
      `https://phonebook-react-default-rtdb.firebaseio.com/users/${localId}/contacts.json`,
    );

    if (response.data) {
      const contacts = Object.keys(response.data).map(key => ({
        id: key,
        ...response.data[key],
      }));
      dispatch(getContactsSuccess(contacts));
    }
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

export const addContact = contact => async (dispatch, getState) => {
  const {
    user: { localId },
  } = getState().auth;

  dispatch(addContactRequest());
  try {
    const response = await axios.post(
      `https://phonebook-react-default-rtdb.firebaseio.com/users/${localId}/contacts.json`,
      contact,
    );
    response.data &&
      dispatch(addContactSuccess({ id: response.data.name, ...contact }));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContact = id => async (dispatch, getState) => {
  const {
    user: { localId },
  } = getState().auth;

  dispatch(deleteContactRequest());
  try {
    await axios.delete(
      `https://phonebook-react-default-rtdb.firebaseio.com//users/${localId}/contacts/${id}.json`,
    );
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
