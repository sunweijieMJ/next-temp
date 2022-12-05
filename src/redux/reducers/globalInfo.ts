import { AnyAction } from 'redux';
import { SET_LOCALE } from '../actions/globalInfo';

export enum LocalList {
  'zh-CN',
  'en-US',
}
export type LocalKey = keyof typeof LocalList;
export type IGlobalState = Readonly<{
  locale: LocalKey;
}>;

const initState: IGlobalState = {
  locale: 'zh-CN',
};

/**
 * 全局信息
 */
const globalInfo = (state = initState, action: AnyAction): IGlobalState => {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        locale: action.payload,
      };
    default:
      return state;
  }
};

export default globalInfo;
