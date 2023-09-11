import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import IngredientsSelectItem from './IngredientsSelectItem';
import { setAllIngredients } from '@/redux/features/menuSlice';
import { BsPlusSquare } from 'react-icons/bs';
import ModalSubTitle from './ModalSubTitle';
import { IAdditionalIngredient } from '@/types';

const IngredientsSelect: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedProduct, isAllIngredients, selectedDough, selectedSize } =
    useAppSelector((state) => state.menuReducer);

  const sliceTo = isAllIngredients
    ? selectedProduct?.additionalIngredients.length
    : 5;
  const showMore = sliceTo !== undefined && sliceTo <= 5;

  const isDisabled = (ingredient: IAdditionalIngredient) => {
    const isPizzaHeart = ingredient.name === 'Пицца "Сердце"';
    const isCheeseSide = ingredient.name === 'Сырный Бортик';
    const isThinDoughSelected = selectedDough?.name === 'Тонкое';
    const isSelectedSize23 = selectedSize?.name === 23;

    return (
      (isPizzaHeart && isThinDoughSelected) ||
      (isPizzaHeart && isSelectedSize23) ||
      (isCheeseSide && isThinDoughSelected)
    );
  };

  return (
    <div>
      <ModalSubTitle text='Добавить ингредиенты:' />
      <ul className='flex flex-col flex-wrap gap-2.5'>
        {selectedProduct?.additionalIngredients
          .slice(0, sliceTo)
          .map((ingredient) => (
            <IngredientsSelectItem
              ingredient={ingredient}
              isDisabled={isDisabled(ingredient)}
              key={ingredient.id}
            />
          ))}
      </ul>
      {showMore ? (
        <button
          type='button'
          onClick={() => dispatch(setAllIngredients())}
          className='flex_between gap-3 font-semibold text-sm text-grayDark hover:text-primary mx-auto w-auto mt-2.5'
        >
          <BsPlusSquare />
          <span>Показать ещё</span>
        </button>
      ) : null}
    </div>
  );
};

export default IngredientsSelect;
