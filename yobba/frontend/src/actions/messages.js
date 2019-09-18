import { CONSTANTS } from '../actions';

export const createMessage = msg => {
  return {
    type: CONSTANTS.CREATE_MESSAGE,
    payload: msg
  };
};

export const returnErrors = (msg, status) => {
  return {
    type: CONSTANTS.GET_ERRORS,
    payload: {
      msg,
      status
    }
  };
};
