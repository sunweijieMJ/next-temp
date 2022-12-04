import { Button } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

const Login: React.FC = () => {
  const router = useRouter();
  const skipHome = () => {
    router.push('/Home');
  };

  return (
    <div>
      login
      <Button type="primary" onClick={skipHome}>
        Login
      </Button>
    </div>
  );
};

export default Login;
