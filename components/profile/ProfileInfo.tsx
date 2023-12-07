'use client';

import React from 'react';
import { BiLogOut, BiSolidEdit } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { IoPerson, IoGift } from 'react-icons/io5';
import { IoTicketOutline } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { app } from '@/firebase';
import {
  setCurrentUser,
  setModalEditProfile,
  setModalTicketsInfo,
} from '@/redux/features/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const ProfileInfo: React.FC = () => {
  const auth = getAuth(app);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.profileReducer);

  React.useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User present
        dispatch(setCurrentUser(currentUser)); // Set user when authenticated
      } else {
        // User not logged in
        dispatch(setCurrentUser(null));
        router.push('/login'); // Redirect to login if on a protected page
      }
    });

    return () => unsubscribe(); // Clean up subscription
  }, [dispatch, router]);

  const profileInfo = [
    {
      id: 0,
      Icon: IoPerson,
      title: 'Ваше имя',
      value: user?.name || 'Не указано',
    },
    {
      id: 1,
      Icon: IoGift,
      title: 'Ваш день рождения',
      value: user?.birthday || 'Не указан',
    },
    {
      id: 2,
      Icon: FaPhoneAlt,
      title: 'Ваш телефон',
      value: user?.phoneNumber || 'Не указан',
    },
    {
      id: 3,
      Icon: MdEmail,
      title: 'Ваш e-mail',
      value: user?.email || 'Не указан',
    },
    { id: 4, Icon: IoTicketOutline, title: 'Ваши тикеты', value: '0' },
  ];

  const tickets = profileInfo.find((info) => info.title === 'Ваши тикеты')
    ?.title;

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

  return (
    <div className='bg-white drop-shadow-custom rounded-2xl md:py-8 md:px-4 py-[50px] px-[60px]'>
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
