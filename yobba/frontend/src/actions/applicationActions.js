import axios from 'axios';
import { CONSTANTS } from '../actions';

export const addApplication = (listId, newApplication) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  axios.post('/api/applications/', newApplication, config).then(res => {
    dispatch({
      type: CONSTANTS.ADD_APPLICATION,
      payload: res.data
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
