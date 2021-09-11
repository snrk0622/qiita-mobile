import { combineReducers } from 'redux';

import authReducer from './src/modules/auth/reducer';
import timelineReducer from './src/modules/timeline/reducer';

const reducers = combineReducers({
  auth: authReducer,
  timeline: timelineReducer,
});

export default reducers;
