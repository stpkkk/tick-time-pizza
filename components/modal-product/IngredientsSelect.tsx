import React from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import IngredientsSelectItem from './IngredientsSelectItem';
import ModalSubTitle from './ModalSubTitle';
import { setAllIngredients } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Dough, IAdditionalIngredient, Sizes } from '@/types';

const IngredientsSelect: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedProduct, isAllIngredients, selectedDough, selectedSize } =
    useAppSelector((state) => state.menuReducer);

  const sliceTo = isAllIngredients
    ? selectedProduct?.additionalIngredients &&
      selectedProduct?.additionalIngredients.length
    : 5;
  const showMore = sliceTo !== undefined && sliceTo <= 5;

  const isDisabled = (ingredient: IAdditionalIngredient) => {
    const isPizzaHeart = ingredient.name === 'Пицца "Сердце"';
    const isCheeseSide = ingredient.name === 'Сырный Бортик';
    const isThinDoughSelected = selectedDough?.name === Dough.THIN;
    const isSelectedSize23 = selectedSize?.name === Sizes.SMALL;

    return (
      (isPizzaHeart && isThinDoughSelected) ||
      (isPizzaHeart && isSelectedSize23) ||
      (isCheeseSide && isThinDoughSelected)
    );
  };

  return selectedProduct?.additionalIngredients ? (
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
          className='flex_between mx-auto mt-2.5 w-auto gap-3 text-sm font-semibold text-grayDark hover:text-primary'
        >
          <BsPlusSquare />
          <span>Показать ещё</span>
        </button>
      ) : null}
    </div>
  ) : null;
};

export default IngredientsSelect;
