'use client';

import React from 'react';
import { BiLogOut, BiSolidEdit } from 'react-icons/bi';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { app_firebase } from '@/firebase';
import { useLocalStorage } from '@/hooks';
import {
  setCurrentUser,
  setModalEditProfile,
  setModalTicketsInfo,
} from '@/redux/features/profileSlice';
import { useAppDispatch } from '@/redux/hooks';
import { ExtendedUser } from '@/types';
import getProfileInfo from '@/utils/getProfileInfo';

type ProfileInfoProps = {
  user: ExtendedUser | null;
};

const ProfileInfo: React.FC<ProfileInfoProps> = ({ user }) => {
  const auth = getAuth(app_firebase);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [userInLS, setUserInLS] = useLocalStorage({}, 'user');
  const info = getProfileInfo(user);
  const tickets = info.find((i) => i.title === 'Ваши тикеты')?.title;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      await setUserInLS(null);
      dispatch(setCurrentUser(null));
      router.push('/');
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

  return (
    <div className='wrapper md:py-8 md:px-4 py-[50px] px-[60px]'>
      <div className='grid md:gap-4 smMin:grid-cols-2 mdMin:grid-cols-3 gap-6 mb-[44px] sm:mb-6'>
        {info.map(({ id, Icon, title, value }) => (
          <div className='flex gap-5' key={id}>
            <Icon
              size={50}
              className='bg-yellow text-white p-2 rounded-lg flex-shrink-0 sm:max-w-[35px] sm:h-[35px]'
            />
            <div className='relative flex flex-col font-bold'>
              <span className='text-grayDark sm:text-xs'>{title}</span>
              <p className='sm:text-sm sm:leading-[15px] text-base leading-5 break-all '>
                {value}
              </p>
              {title === tickets ? (
                <button
                  className='left-full hover:text-primary text-grayDark absolute top-0 animate-fade-in'
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
      <div className='text-grayDark sm:text-sm flex gap-6 font-semibold'>
        <div
          className='hover:text-primary flex gap-2 animate-fade-in cursor-pointer'
          onClick={handleLogout}
        >
          <button type='button'>
            <BiLogOut size={25} />
          </button>
          <span>Выйти</span>
        </div>
        <div
          className='hover:text-primary flex gap-2 animate-fade-in cursor-pointer'
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
