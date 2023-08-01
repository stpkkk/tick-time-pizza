"use client"
import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Image from 'next/image'
import { HeartIcon } from '@/public/assets/icons'

import ImageNotice from './ImageNotice'
import Counter from './Counter'
import { decrementItemAmount, incrementItemAmount } from '@/redux/features/menuSlice'

interface LeftModalContentProps {
	setModalHeight: React.Dispatch<React.SetStateAction<number>>
}

const LeftModalContent: React.FC<LeftModalContentProps> = ({ setModalHeight }) => {
	const dispatch = useAppDispatch()
	const { clickedMenuItem, itemAmount, additionalIngredients, selectedSize } = useAppSelector(state => state.menuReducer)

	const modalLeft = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const getModalHeight = () => {
			if (modalLeft.current) {
				const height = modalLeft.current.clientHeight
				setModalHeight(height)
			}
		}

		getModalHeight()
	}, [])

	const handleIncrement = () => {
		dispatch(incrementItemAmount(clickedMenuItem?.id || 0))
	}

	const handleDecrement = () => {
		dispatch(decrementItemAmount(clickedMenuItem?.id || 0))
	}


	const itemPrice = clickedMenuItem?.prices.find((item) => item.id === selectedSize?.id)?.price

	const additionalIngredientsPrice = additionalIngredients.reduce((acc, ing) => acc + (ing.price * (ing.amount || 1)) * itemAmount, 0)

	const totalPrice = clickedMenuItem?.prices
		? (itemPrice || 579) * itemAmount + additionalIngredientsPrice
		: "Цена не указана"


	return (
		<div
			className="relative fill flex_center flex-col gap-[30px]"
			ref={modalLeft}
		>
			<Image
				src={clickedMenuItem?.image ? clickedMenuItem?.image : "Картинка не загрузилась"}
				alt={clickedMenuItem?.title ? clickedMenuItem?.title : "😢"}
				width={325}
				height={325}
			/>
			<p className="block text-center text-sm sm:text-[0.75rem]leading-[1.25rem]">
				{clickedMenuItem?.ingredients}
			</p>
			<div className="flex_between flex-row gap-7 w-full whitespace-nowrap max-w-[236px]">
				<div className="flex_between flex-1 max-w-[128px] gap-2 w-22 sm:w-32 text-base -ml-2">
					<Counter
						initialValue={1}
						value={itemAmount}
						handleIncrement={handleIncrement}
						handleDecrement={handleDecrement}
					/>
				</div>
				<div>
					<span className="text-xl font-semibold md:text-base">
						{totalPrice} ₽
					</span>
				</div>
			</div>
			<button className="btn_red max-w-[236px]">
				Добавить в корзину
			</button>
			<div className="absolute top-0 right-0 cursor-pointer">
				<HeartIcon />
			</div>
			<ImageNotice />
		</div>
	)
}

export default LeftModalContent