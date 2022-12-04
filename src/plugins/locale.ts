import antdEnUS from 'antd/locale/en_US';
import antdZhCN from 'antd/locale/zh_CN';
import enUS from '@/locale/en-US.json';
import zhCN from '@/locale/zh-CN.json';

export enum LocalList {
  'zh-CN',
  'en-US',
}
export type LocalKey = keyof typeof LocalList;
export type ILocale = {
  locale: LocalKey;
  messages: Record<LocalKey, any>;
};

const curLang = 'zh-CN';
const Locale: ILocale = {
  locale: curLang,
  messages: {
    'zh-CN': {
      antd: antdZhCN,
      ...zhCN,
    },
    'en-US': {
      antd: antdEnUS,
      ...enUS,
    },
  },
};

export default Locale;
