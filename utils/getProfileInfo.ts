import { FaPhoneAlt } from 'react-icons/fa';
import { IoGift, IoPerson, IoTicketOutline } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { ExtendedUser } from '@/types';

const getProfileInfo = (user: ExtendedUser | null) => {
  console.log(user?.name);
  const profileInfo = [
    {
      id: 0,
      Icon: IoPerson,
      title: 'Ваше имя',
      value: user?.name,
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

  return profileInfo;
};

export default getProfileInfo;
