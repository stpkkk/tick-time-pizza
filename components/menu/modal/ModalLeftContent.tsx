"use client"
import React, { useCallback, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { decrementItemAmount, incrementItemAmount } from '@/redux/features/menuSlice'
import Image from 'next/image'
import { HeartIcon } from '@/public/assets/icons';

import ImageNotice from './ImageNotice'
import Counter from './Counter';

interface ModalLeftContentProps {
	setModalHeight: React.Dispatch<React.SetStateAction<number>>
}

const ModalLeftContent: React.FC<ModalLeftContentProps> = ({ setModalHeight }) => {
	const dispatch = useAppDispatch()
	const modalLeft = useRef<HTMLDivElement>(null);

	const {
		clickedMenuItem,
		itemAmount,
		additionalIngredients,
		selectedSize,
	} = useAppSelector((state) => state.menuReducer);

	// Function to get the height of the modal left content
	const getModalHeight = useCallback(() => {
		if (modalLeft.current) {
			const height = modalLeft.current.clientHeight
			setModalHeight(height)
		}
	}, [setModalHeight]);

	useEffect(() => {
		getModalHeight()
	}, [getModalHeight]);

	const handleIncrement = () => {
		dispatch(incrementItemAmount(clickedMenuItem?.id || 0))
	};

	const handleDecrement = () => {
		dispatch(decrementItemAmount(clickedMenuItem?.id || 0))
	};

	const itemPrice = clickedMenuItem?.prices.find((item) => item.id === selectedSize?.id)?.price;

	const additionalIngredientsPrice = additionalIngredients.reduce(
		(acc, ing) =>
			acc +
			((ing.prices.find((price) => price.id === selectedSize?.id)?.price || 100) *
				(ing.amount || 1)) *
			itemAmount,
		0
	);

	const totalPrice = clickedMenuItem?.prices
		&& (itemPrice || 579) * itemAmount + additionalIngredientsPrice

	return (
		<div className="relative fill flex_center flex-col gap-[30px]" ref={modalLeft}>
			<Image
				src={clickedMenuItem?.image || 'Картинка не загрузилась'}
				alt={clickedMenuItem?.title || '😢'}
				width={325}
				height={325}
			/>
			<p className="block text-center text-sm sm:text-[0.75rem]leading-[1.25rem]">
				{clickedMenuItem?.ingredients}
			</p>
			<div className="flex_between flex-row gap-7 w-full whitespace-nowrap max-w-[236px]">
				<div className="flex_between flex-1 max-w-[128px] gap-2 w-22 sm:w-32 text-base -ml-2">
					<Counter initialValue={1} value={itemAmount} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
				</div>
				<div>
					<span className="text-xl font-semibold md:text-base">{totalPrice} ₽</span>
				</div>
			</div>
			<button className="btn_red max-w-[236px]">Добавить в корзину</button>
			<div className="absolute top-0 right-0 cursor-pointer">
				<HeartIcon />
			</div>
			<ImageNotice />
		</div>
	)
}

export default ModalLeftContent
