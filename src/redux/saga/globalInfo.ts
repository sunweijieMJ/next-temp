import { AnyAction } from 'redux';
import { put, takeEvery } from 'redux-saga/effects';
import { SET_LOCALE, SET_LOCALE_ASYNC } from '../actions/globalInfo';

/**
 * 修改当前语言环境的saga
 */
function* setLocale(action: AnyAction) {
  yield put({ type: SET_LOCALE, payload: action.payload });
}

export function* setGlobalInfo() {
  yield takeEvery(SET_LOCALE_ASYNC, setLocale);
}
