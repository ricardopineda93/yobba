import axios from 'axios';
import {
  CONSTANTS,
  createMessage,
  returnErrors,
  tokenConfig
} from '../actions';

export const getLists = () => (dispatch, getState) => {
  axios
    .get('/api/lists/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: CONSTANTS.GET_LISTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addStatusList = title => (dispatch, getState) => {
  axios
    .post('/api/lists/', title, tokenConfig(getState))
    .then(res => {
      dispatch(
        createMessage({ addStatusList: `Status list '${title.title}' added!` })
      );
      dispatch({
        type: CONSTANTS.ADD_STATUS_LIST,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
