import { DatePicker, Space } from 'antd';
import type { DatePickerProps } from 'antd';
import React from 'react';
import LayoutMain from '@/layout/LayoutMain';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const Home: React.FC = () => {
  return (
    <LayoutMain>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
      </Space>
    </LayoutMain>
  );
};

export default Home;
