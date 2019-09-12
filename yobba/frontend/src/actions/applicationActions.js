import { CONSTANTS } from '../actions';

export const addApplication = (listId, data) => {
  return {
    type: CONSTANTS.ADD_APPLICATION,
    payload: { data, listId }
  };
};
