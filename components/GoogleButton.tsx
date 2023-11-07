'use'
import React from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const GoogleButton: React.FC = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/account';
  return (
    <button
      className='btn_red'
      type='button'
      onClick={() => signIn('google', { callbackUrl })}
    >
      Войти с помощью Google
    </button>
  );
};

export default GoogleButton;
