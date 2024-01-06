'use client';

import React from 'react';
import { BiLogOut, BiSolidEdit } from 'react-icons/bi';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { app_firebase } from '@/firebase';
import { useAuthStateChange } from '@/hooks';
import {
  setCurrentUser,
  setModalEditProfile,
  setModalTicketsInfo,
} from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import getProfileInfo from '@/utils/getProfileInfo';

const ProfileInfo: React.FC = () => {
  const auth = getAuth(app_firebase);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.profileReducer);
  const profileInfo = getProfileInfo(user);
  const tickets = profileInfo.find((i) => i.title === 'Ваши тикеты')?.title;

  useAuthStateChange();

  const handleLogout = async () => {
    try {
      router.push('/');
      await signOut(auth);
      dispatch(setCurrentUser(null));
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickEdit = () => {
    dispatch(setModalEditProfile(true));
  };

  const handleClickTicketsNotice = () => {
    dispatch(setModalTicketsInfo(true));
  };

  if (!user) router.push('/login');

  return (
    <div className='container md:py-8 md:px-4 py-[50px] px-[60px]'>
      <div className='grid md:gap-4 smMin:grid-cols-2 mdMin:grid-cols-3 gap-6 mb-[44px] sm:mb-6'>
        {profileInfo.map(({ id, Icon, title, value }) => (
          <div className='flex gap-5' key={id}>
            <Icon
              size={50}
              className='bg-yellow text-white p-2 rounded-lg flex-shrink-0 sm:max-w-[35px] sm:h-[35px]'
            />
            <div className='flex flex-col font-bold relative'>
              <span className='text-grayDark sm:text-xs'>{title}</span>
              <p className='sm:text-sm sm:leading-[15px] text-base leading-5 break-all '>
                {value}
              </p>
              {title === tickets ? (
                <button
                  className='absolute top-0 left-full hover:text-primary text-grayDark'
                  type='button'
                  onClick={handleClickTicketsNotice}
                >
                  <IoInformationCircleOutline
                    size={30}
                    className='sm:max-w-[18px] sm:h-[18px] '
                  />
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <div className='flex gap-6 text-grayDark font-semibold sm:text-sm'>
        <div
          className='flex gap-2 cursor-pointer hover:text-primary '
          onClick={handleLogout}
        >
          <button type='button'>
            <BiLogOut size={25} />
          </button>
          <span>Выйти</span>
        </div>
        <div
          className='flex gap-2 cursor-pointer hover:text-primary '
          onClick={handleClickEdit}
        >
          <button type='button'>
            <BiSolidEdit size={25} />
          </button>
          <span>Редактировать</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
