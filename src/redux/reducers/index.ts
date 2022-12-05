import { combineReducers } from 'redux';
import globalInfo from './globalInfo';

export const combinedReducers = combineReducers({
  globalInfo,
});

export type RootState = ReturnType<typeof combinedReducers>;

export default combineReducers({
  globalInfo,
});
