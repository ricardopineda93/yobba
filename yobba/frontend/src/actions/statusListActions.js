import axios from 'axios';
import { CONSTANTS } from '../actions';

export const getLists = () => dispatch => {
  axios
    .get('/api/lists/')
    .then(res => {
      dispatch({
        type: CONSTANTS.GET_LISTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const addStatusList = title => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  axios
    .post('/api/lists/', title, config)
    .then(res => {
      dispatch({
        type: CONSTANTS.ADD_STATUS_LIST,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
