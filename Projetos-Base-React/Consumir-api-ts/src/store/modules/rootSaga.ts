/* eslint-disable @typescript-eslint/no-explicit-any */
import { all } from 'redux-saga/effects';

import example from './example/sagas';

export default function* rootSaga(): Generator<any> {
  return yield all([example]);
}
