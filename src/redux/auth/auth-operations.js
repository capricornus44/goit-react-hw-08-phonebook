import axios from 'axios';
import {
  signupRequest,
  signupSuccess,
  signupError,
  signinRequest,
  signinSuccess,
  signinError,
  //   logoutRequest,
  //   logoutSuccess,
  //   logoutError,
  // getCurrentUserRequest,
  // getCurrentUserSuccess,
  // getCurrentUserError,
} from './auth-actions';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const signup = user => async dispatch => {
  dispatch(signupRequest());

  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNA3Vo4X92zDlQt4W6-FnwrXBbbRb3OP0`,
      { ...user, returnSecureToken: true },
    );
    // token.set(response.data.token);
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

    // token.set(response.data.token);
    dispatch(signinSuccess(response.data));
  } catch (error) {
    dispatch(signinError(error.message));
  }
};

// const logout = () => async dispatch => {
//   dispatch(logoutRequest());

//   try {
//     await axios.post(`/users/logout`);

//     // token.unset();
//     dispatch(logoutSuccess());
//   } catch (error) {
//     dispatch(logoutError(error.message));
//   }
// };

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
  // logout,
  // getCurrentUser,
};
