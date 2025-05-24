/* eslint-disable @typescript-eslint/no-explicit-any */
import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rootSaga(): Generator<any> {
  return yield all([auth]);
}
