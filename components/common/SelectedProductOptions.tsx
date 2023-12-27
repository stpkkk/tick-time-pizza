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
    <div className='flex flex-col gap-1 w-full sm:max-w-[165px] mb-2'>
      <span className='md:text-xs md:leading-[15px] text-base leading-5 font-semibold'>
        {product.title}
      </span>
      {product.selectedSize?.value && product.selectedDough?.value && (
        <p className='break-words text-sm font-normal md:text-xs md:leading-[15px]'>
          {`${product.selectedSize?.value},${product.selectedDough?.value}`}
        </p>
      )}
      {product.promoProducts ? (
        product.promoProducts.length > 0 && (
          <ul className='cart_ingredients flex-col'>
            {product.promoProducts.map((product) => (
              <li key={generateUUID()} className=' whitespace-nowrap'>
                <p className='break-words text-sm font-normal md:text-xs md:leading-[15px]'>
                  {product.title}&nbsp;
                  <br />
                  {product.selectedSize?.value},&nbsp;
                  {product.selectedDough?.value}&nbsp;(
                  {product.productQuantity}шт.)
                </p>
              </li>
            ))}
          </ul>
        )
      ) : (
        <>
          {product.selectedIngredients &&
            product.selectedIngredients.length > 0 && (
              <ul className='break-words text-sm font-normal md:text-xs md:leading-[15px]'>
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
              <ul className='break-words text-sm font-normal md:text-xs md:leading-[15px]'>
                Убрать:{' '}
                {product.removedIngredients?.map((ing) => (
                  <li className='inline' key={ing.id}>{`${ing.value}, `}</li>
                ))}
              </ul>
            )}
        </>
      )}
    </div>
  );
};

export default SelectedProductOptions;
