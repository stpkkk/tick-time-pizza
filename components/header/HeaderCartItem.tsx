import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IProduct } from '@/types';
import { calculateProductPrices, generateUUID } from '@/utils';

interface HeaderCartItemProps {
  product: IProduct;
  onRemove: (productUUID: string) => void;
}

const HeaderCartItem: React.FC<HeaderCartItemProps> = ({
  product,
  onRemove,
}) => {
  const { promoProducts } = product;
  const { totalProductPrice } = calculateProductPrices(
    product,
    product.selectedSize || null,
    product.selectedIngredients || [],
    product.productQuantity || 1,
  );

  const renderPromoProducts = (products: IProduct[]) => (
    <ul className='cart_ingredients flex-col'>
      {products.map((product) => (
        <li key={generateUUID()}>
          {`${product.title} ${product.selectedSize?.name}, ${product.selectedDough?.name} (${product.productQuantity} шт.)`}
        </li>
      ))}
    </ul>
  );

  const renderIngredients = () => (
    <div>
      {product.selectedSize?.name && product.selectedDough?.name && (
        <p className='break-words text-[12px] font-normal md:text-xs md:leading-[15px]'>
          {`${product.selectedSize?.name},${product.selectedDough?.name}`}
        </p>
      )}
      {product.removedIngredients && product.removedIngredients.length > 0 && (
        <p className='break-words text-[12px] font-normal md:text-xs md:leading-[15px]'>
          Убрать:{' '}
          {product.removedIngredients?.map((ing) => (
            <span key={ing.id}>{`${ing.name}, `}</span>
          ))}
        </p>
      )}
      {product.selectedIngredients &&
        product.selectedIngredients.length > 0 && (
          <p className='break-words text-[12px] font-normal md:text-xs md:leading-[15px]'>
            Добавить:{' '}
            {product.selectedIngredients.map((ing) => (
              <span key={ing.id}>{`${ing.name} (${ing.quantity}шт.), `}</span>
            ))}
          </p>
        )}
    </div>
  );

  return (
    <div>
      <div className='flex flex-row gap-3'>
        <p className='mr-auto break-words text-[14px] font-semibold md:text-sm'>
          {product.title}
        </p>
        <p className='whitespace-nowrap text-[14px] md:text-sm'>
          {`${product.productQuantity} шт.`}
        </p>
        <p className='w-10 whitespace-nowrap text-center text-[14px] font-semibold md:w-16 md:text-sm'>
          {`${totalProductPrice} ₽`}
        </p>
        <button type='button' onClick={() => onRemove(product.uuid || '')}>
          <RiDeleteBin6Line
            size={15}
            className='cursor-pointer text-grayDark hover:text-primary'
          />
        </button>
      </div>
      {promoProducts && promoProducts.length > 0
        ? renderPromoProducts(promoProducts)
        : renderIngredients()}
    </div>
  );
};

export default HeaderCartItem;
