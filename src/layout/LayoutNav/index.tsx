import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

const LayoutNav: React.FC = () => {
  const router = useRouter();

  const items = [
    { label: 'Home', key: '/Home' },
    { label: 'Help', key: '/Help' },
  ];

  const [activeIndex, setActiveIndex] = useState(router.route);

  const handleClick: MenuProps['onClick'] = (e) => {
    const activeIndex = e.key;
    setActiveIndex(activeIndex);
    router.push(activeIndex);
  };

  return (
    <nav className="layout-nav">
      <Menu
        defaultSelectedKeys={[activeIndex]}
        items={items}
        onClick={handleClick}
      />
      <FormattedMessage id="layout.nav" />
    </nav>
  );
};

export default LayoutNav;
