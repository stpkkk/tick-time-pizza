'use client'

import React from 'react'
import Orders from './Orders'
import ProfileInfo from './ProfileInfo'
import NoOrders from './NoOrders'
import ModalEditProfile from './ModalEditProfile'
import ModalTicketsInfo from './ModalTicketsInfo'
import { useLocalStorage } from '@/hooks'
import { useAppSelector } from '@/redux/hooks'

const Profile: React.FC = () => {
	const { isModalEditProfileOpen, isModalTicketsInfo } = useAppSelector(
    (state) => state.profileReducer,
  );
  const [userInLS] = useLocalStorage({}, 'user');
  const isOrdersExist = userInLS?.orders && userInLS.orders.length > 0;

	return (
		<>
		<h1 className='h1 px-[60px] my-[30px] sm:my-4 sm:px-4'>Профиль</h1>
		<ProfileInfo />
		<h2 className='h1 px-[60px] my-[30px] sm:my-4 sm:px-4'>
			Ваши заказы:
		</h2>
		{isOrdersExist ? <Orders orders={userInLS?.orders} /> : <NoOrders />}
		{isModalEditProfileOpen ? <ModalEditProfile /> : null}
		{isModalTicketsInfo ? <ModalTicketsInfo /> : null}
	</>
	)
}

export default Profile