export * from './applicationActions';
export * from './statusListActions';
export * from './authActions';
export * from './messages';

export const CONSTANTS = {
  ADD_APPLICATION: 'ADD_APPLICATION',
  DELETE_APPLICATION: 'DELETE_APPLICATION',
  GET_LISTS: 'GET_LISTS',
  ADD_STATUS_LIST: 'ADD_STATUS_LIST',
  DELETE_STATUS_LIST: 'DELETE_STATUS_LIST',
  DRAG_HAPPENED: 'DRAG_HAPPENED',
  USER_LOADED: 'USER_LOADED',
  USER_LOADING: 'USER_LOADING',
  AUTH_ERROR: 'AUTH_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL',
  GET_ERRORS: 'GET_ERRORS',
  GET_MESSAGES: 'GET_MESSAGES',
  CREATE_MESSAGE: 'CREATE_MESSAGE'
};
