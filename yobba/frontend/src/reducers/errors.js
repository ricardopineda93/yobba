import { CONSTANTS } from '../actions';

const initialState = {
  msg: {},
  status: null
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status
      };
    default:
      return state;
  }
};

export default errorsReducer;
