import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import Locale from '@/plugins/locale';
import type { LocalKey } from '@/plugins/locale';
import configureStore from '@/plugins/redux';
import storage from '@/utils/storage';
import './index.scss';

const store = configureStore();

function MyApp({ Component, pageProps }: AppProps) {
  const [lang, setLang] = useState(Locale.locale);

  const setLocale = (lang: LocalKey) => {
    setLang(lang);
    if (typeof window !== 'undefined') {
      storage('localStorage').set('i18n', lang);
    }
  };

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ConfigProvider locale={Locale.messages[lang].antd}>
          <IntlProvider locale={lang} messages={Locale.messages[lang]}>
            <Component {...pageProps} setLocale={setLocale} />
          </IntlProvider>
        </ConfigProvider>
      </Provider>
    </React.StrictMode>
  );
}

export default MyApp;
