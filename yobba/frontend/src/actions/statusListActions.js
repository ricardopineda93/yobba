import { CONSTANTS } from '../actions';

export const addStatusList = title => {
  return {
    type: CONSTANTS.ADD_STATUS_LIST,
    payload: title
  };
};
