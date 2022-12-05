import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOCALE_ASYNC } from '@/redux/actions/globalInfo';
import type { RootState } from '@/redux/reducers';

const items: MenuProps['items'] = [
  {
    key: 'zh-CN',
    label: '中文',
  },
  {
    key: 'en-US',
    label: 'English',
  },
];

const LayoutHeader: React.FC = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state: RootState) => state.globalInfo.locale);

  const onChangeLang: MenuProps['onClick'] = ({ key }) => {
    dispatch({ type: SET_LOCALE_ASYNC, payload: key });
  };

  const router = useRouter();

  const skipLogin = () => {
    router.push('/Login');
  };

  return (
    <header className="layout-header">
      <FormattedMessage id="layout.header" />
      <Button type="primary" onClick={skipLogin}>
        Logout
      </Button>
      <Dropdown menu={{ items, onClick: onChangeLang }}>
        <Button type="text">{locale}</Button>
      </Dropdown>
    </header>
  );
};

export default LayoutHeader;
