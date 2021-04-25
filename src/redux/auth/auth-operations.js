import axios from 'axios';
import {
  signupRequest,
  signupSuccess,
  signupError,
  signinRequest,
  signinSuccess,
  signinError,

  // getCurrentUserRequest,
  // getCurrentUserSuccess,
  // getCurrentUserError,
} from './auth-actions';

const signup = user => async dispatch => {
  dispatch(signupRequest());

  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNA3Vo4X92zDlQt4W6-FnwrXBbbRb3OP0`,
      { ...user, returnSecureToken: true },
    );
    axios.defaults.params = {
      auth: response.data.idToken,
    };
    dispatch(signupSuccess(response.data));
  } catch (error) {
    dispatch(signupError(error.message));
  }
};

const signin = user => async dispatch => {
  dispatch(signinRequest());

  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNA3Vo4X92zDlQt4W6-FnwrXBbbRb3OP0`,
      { ...user, returnSecureToken: true },
    );
    axios.defaults.params = {
      auth: response.data.idToken,
    };
    dispatch(signinSuccess(response.data));
  } catch (error) {
    dispatch(signinError(error.message));
  }
};

// const getCurrentUser = () => async (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();

//   if (!persistedToken) return;

//   token.set(persistedToken);

//   dispatch(getCurrentUserRequest());

//   try {
//     const response = await axios.get('/users/current');

//     dispatch(getCurrentUserSuccess(response.data));
//   } catch (error) {
//     dispatch(getCurrentUserError(error.message));
//   }
// };

export {
  signup,
  signin,

  // getCurrentUser,
};
