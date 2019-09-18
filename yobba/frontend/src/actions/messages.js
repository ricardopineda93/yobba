import { CONSTANTS } from '../actions';

export const createMessage = msg => {
  return {
    type: CONSTANTS.CREATE_MESSAGE,
    payload: msg
  };
};
