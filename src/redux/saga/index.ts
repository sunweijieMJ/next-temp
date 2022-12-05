import { all } from 'redux-saga/effects';
import { setGlobalInfo } from './globalInfo';

export default function* rootSaga() {
  yield all([setGlobalInfo()]);
}
