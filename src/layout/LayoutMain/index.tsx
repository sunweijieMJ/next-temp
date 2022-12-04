import React from 'react';
import LayoutFooter from '../LayoutFooter';
import LayoutHeader from '../LayoutHeader';
import LayoutNav from '../LayoutNav';

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = (props) => {
  return (
    <div className="layout">
      <LayoutHeader></LayoutHeader>
      <LayoutNav></LayoutNav>
      <LayoutFooter></LayoutFooter>
      {props.children}
    </div>
  );
};

export default Layout;
