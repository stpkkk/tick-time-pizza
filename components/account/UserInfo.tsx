import React from 'react';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { authConfig } from '@/configs';

export default async function UserInfo() {
  const session = await getServerSession(authConfig);
  console.log(session?.user?.image);

  return (
    <div className='flex flex-col gap-4 my-4'>
      <h1 className='h1'>Profile of {session?.user?.name}</h1>
      <Image src={session?.user?.image || ''} alt='' width={100} height={100} />
    </div>
  );
}
