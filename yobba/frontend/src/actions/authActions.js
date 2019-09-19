import axios from 'axios';
import { CONSTANTS, returnErrors } from '../actions';

// Setup config w/ token
export const tokenConfig = getState => {
  // getting token
  const token = getState().auth.token;

  // headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // if there is a token, add to the header config for authorization from backend
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};

// check token && load user

export const loadUser = () => (dispatch, getState) => {
  // loading user
  dispatch({ type: CONSTANTS.USER_LOADING });

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: CONSTANTS.USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: CONSTANTS.AUTH_ERROR
      });
    });
};

// Login user

export const login = (username, password) => dispatch => {
  // headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // request body
  const body = JSON.stringify({ username, password });

  axios
    .post('/api/auth/login', body, config)
    .then(res => {
      dispatch({
        type: CONSTANTS.LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: CONSTANTS.LOGIN_FAIL
      });
    });
};

// Register new user

export const register = ({ username, password, email }) => dispatch => {
  // headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // request body
  const body = JSON.stringify({ username, password, email });

  axios
    .post('/api/auth/register', body, config)
    .then(res => {
      dispatch({
        type: CONSTANTS.REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: CONSTANTS.REGISTER_FAIL
      });
    });
};

// logout user

export const logout = () => (dispatch, getState) => {
  axios
    .post('/api/auth/logout/', null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: CONSTANTS.LOGOUT_SUCCESS
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
