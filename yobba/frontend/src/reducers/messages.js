import { CONSTANTS } from '../actions';
import { CardActions } from '@material-ui/core';

const initialState = {};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_MESSAGES:
      return action.payload;
    case CONSTANTS.CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
};

export default messagesReducer;
