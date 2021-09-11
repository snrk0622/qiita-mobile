import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { failTimelineApi, successTimelineApi } from './action';

const ROOT = 'https://qiita.com/api/v2';
const ACCESS_TOKEN = '0db3c67ca1297da9f1d2639321a4c8ac0917cb27';

const requestTimelineApi = () => {
  const url = `${ROOT}/items?page=1&per_page=20`;
  return axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((response) => {
      const { data } = response;
      return { data };
    })
    .catch((error) => {
      return { error };
    });
};

function* fetchTimeline() {
  const { data, error } = yield call(requestTimelineApi);

  if (data) {
    yield put(successTimelineApi(data));
  } else if (error) {
    yield put(failTimelineApi(error.message));
  }
}

// eslint-disable-next-line
export const timelineSaga = [takeLatest('FETCH_TIMELINE', fetchTimeline)];
