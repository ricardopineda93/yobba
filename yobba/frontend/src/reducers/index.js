import { combineReducers } from 'redux';
import listsReducer from './lists';
import authReducer from './auth';

export default combineReducers({
  lists: listsReducer,
  auth: authReducer
});
