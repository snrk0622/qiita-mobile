import { all } from 'redux-saga/effects';
import { timelineSaga } from './src/modules/timeline/saga';

export default function* rootSaga() {
  yield all([...timelineSaga]);
}
