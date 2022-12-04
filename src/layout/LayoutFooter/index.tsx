import React from 'react';
import { FormattedMessage } from 'react-intl';

const LayoutFooter: React.FC = () => {
  return (
    <footer className="layout-footer">
      <FormattedMessage id="layout.footer" />
    </footer>
  );
};

export default LayoutFooter;
