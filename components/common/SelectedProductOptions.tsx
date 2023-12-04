import React from 'react';
import { IProduct } from '@/types';
import { generateUUID } from '@/utils';

type SelectedProductOptionsProps = {
  product: IProduct;
};

const SelectedProductOptions: React.FC<SelectedProductOptionsProps> = ({
  product,
}) => {
  return (
    <>
      <span className='md:text-xs md:leading-[15px] text-base leading-5 font-semibold '>
        {product.title}
      </span>
      {product.selectedSize?.name && product.selectedDough?.name && (
        <p className='break-words text-[12px] font-normal md:text-xs md:leading-[15px]'>
          {`${product.selectedSize?.name},${product.selectedDough?.name}`}
        </p>
      )}
      {product.promoProducts ? (
        product.promoProducts.length > 0 && (
          <ul className='cart_ingredients flex-col'>
            {product.promoProducts.map((product) => (
              <li key={generateUUID()}>
                {product.title}&nbsp;{product.selectedSize?.name},&nbsp;
                {product.selectedDough?.name}&nbsp;(
                {product.productQuantity}шт.)
              </li>
            ))}
          </ul>
        )
      ) : (
        <>
          {product.selectedIngredients &&
            product.selectedIngredients.length > 0 && (
              <ul className='break-words text-[12px] font-normal md:text-xs md:leading-[15px]'>
                Добавить:{' '}
                {product.selectedIngredients?.map((ing) => (
                  <li
                    className='inline'
                    key={ing.id}
                  >{`${ing.name} (${ing.quantity}шт.), `}</li>
                ))}
              </ul>
            )}
          {product.removedIngredients &&
            product.removedIngredients.length > 0 && (
              <ul className='break-words text-[12px] font-normal md:text-xs md:leading-[15px]'>
                Убрать:{' '}
                {product.removedIngredients?.map((ing) => (
                  <li className='inline' key={ing.id}>{`${ing.name}, `}</li>
                ))}
              </ul>
            )}
        </>
      )}
    </>
  );
};

export default SelectedProductOptions;
