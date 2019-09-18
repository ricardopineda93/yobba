import axios from 'axios';
import { CONSTANTS, createMessage } from '../actions';

export const addApplication = (listId, newApplication) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  axios
    .post('/api/applications/', newApplication, config)
    .then(res => {
      dispatch(
        createMessage({
          addApplication: `Application to ${newApplication.company_name} added!`
        })
      );
      dispatch({
        type: CONSTANTS.ADD_APPLICATION,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: CONSTANTS.GET_ERRORS,
        payload: errors
      });
    });
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type
    }
  };
};
