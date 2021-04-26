import axios from 'axios';
import {
  signupRequest,
  signupSuccess,
  signupError,
  signinRequest,
  signinSuccess,
  signinError,
} from './auth-actions';

const signup = user => async dispatch => {
  dispatch(signupRequest());

  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNA3Vo4X92zDlQt4W6-FnwrXBbbRb3OP0`,
      { ...user, returnSecureToken: true },
    );

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
    // axios.defaults.params = {
    //   auth: response.data.idToken,
    // };
    dispatch(signinSuccess(response.data));
  } catch (error) {
    dispatch(signinError(error.message));
  }
};

export { signup, signin };
