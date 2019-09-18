import { combineReducers } from 'redux';
import listsReducer from './lists';
import authReducer from './auth';
import errorsReducer from './errors';
import messagesReducer from './messages';

export default combineReducers({
  lists: listsReducer,
  auth: authReducer,
  errors: errorsReducer,
  messages: messagesReducer
});
