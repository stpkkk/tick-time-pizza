'use client';

import Image from 'next/image';
import { ButtonBack } from '../components';
import sadPizza from '../public/assets/images/sad-pizza.jpg';

export default function NotFound() {
  return (
    <main className='mt-[90px] grid place-content-center gap-6'>
      <div className='flex_center flex-col'>
        <h1 className='h1'>Page Not found – 404!</h1>
        <div className='flex_center h-[300px] w-[300px]'>
          <Image
            src={sadPizza}
            alt='sad pizza'
            width={300}
            height={300}
            loading='eager'
          />
        </div>
        <div className='flex gap-4'>
          <ButtonBack />
          <span className='text underline-offset-3 underline'>Go back!</span>
        </div>
      </div>
    </main>
  );
}
