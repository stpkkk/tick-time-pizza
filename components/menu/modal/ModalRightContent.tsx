import React from 'react'
import { useAppSelector } from '@/redux/hooks'

import ItemSizeSelection from './ItemSizeSelection'
import IngredientsSelect from './IngredientsSelect'
import IngredientsRemove from './IngredientsRemove'
import NutritionalValue from './NutritionalValue'

interface ModalRightContentProps {
	modalHeight: number
}

const ModalRightContent: React.FC<ModalRightContentProps> = ({ modalHeight }) => {
	const { clickedMenuItem } = useAppSelector(state => state.menuReducer)

	return (
		<div
			className={`flex flex-col gap-[30px] pr-[50px] scroll scroll-container overflow-auto modal_scrollbar`}
			style={{ height: `${modalHeight}px` }}
		>
			<h4 className="uppercase font-zheldor text-[2.5rem] leading-[3rem]">
				{clickedMenuItem?.title}
			</h4>
			<ItemSizeSelection />
			<IngredientsSelect />
			<IngredientsRemove />
			<NutritionalValue />
		</div>
	)
}

export default ModalRightContent