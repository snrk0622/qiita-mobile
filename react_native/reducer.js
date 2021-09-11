import { combineReducers } from 'redux';

import authReducer from './src/modules/auth/reducer';

const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;
