import { ConfigProvider } from 'antd';
import { createWrapper } from 'next-redux-wrapper';
import type { AppProps } from 'next/app';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider, useSelector } from 'react-redux';
import Locale from '@/plugins/locale';
import configureStore from '@/plugins/redux';
import type { RootState } from '@/redux/reducers';
import './index.scss';

const store = configureStore();

function MyApp({ Component, pageProps }: AppProps) {
  const lang = useSelector((state: RootState) => state.globalInfo.locale);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ConfigProvider locale={Locale.messages[lang].antd}>
          <IntlProvider locale={lang} messages={Locale.messages[lang]}>
            <Component {...pageProps} />
          </IntlProvider>
        </ConfigProvider>
      </Provider>
    </React.StrictMode>
  );
}

const makeStore = () => store;

export default createWrapper(makeStore).withRedux(MyApp);
