import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import storage from '@/utils/storage';

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
  const [lang, setLang] = useState('zh-CN');

  const onChangeLang: MenuProps['onClick'] = ({ key }) => {
    setLang(key);
    if (typeof window !== 'undefined') {
      storage('localStorage').set('i18n', key);
    }
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
        <Button type="text">{lang}</Button>
      </Dropdown>
    </header>
  );
};

export default LayoutHeader;
