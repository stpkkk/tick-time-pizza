import React from 'react';
import { InputCheckbox } from '../common';
import { categories } from '@/constants';
import { useAuthStateChange } from '@/hooks';
import { setSelectedCategory } from '@/redux/features/menuSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { CATEGORIES, IOption } from '@/types';

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.profileReducer);
  const { selectedCategory } = useAppSelector((state) => state.menuReducer);
  const categoriesWithoutFavorites = categories.filter(
    (cat) => cat.value !== CATEGORIES.BOOKMARKS,
  );
  const isUserSignIn = user && Object.keys(user).length > 0;
  const categoriesToShow = isUserSignIn
    ? categories
    : categoriesWithoutFavorites;

  const handleChangeCategory = (cat: IOption) => {
    dispatch(setSelectedCategory(cat));
  };

  useAuthStateChange(user);

  React.useEffect(() => {
    if (!selectedCategory) {
      dispatch(setSelectedCategory(categories[0]));
    }
  }, [dispatch, selectedCategory]);

  return (
    <div className='flex_center my-[30px] max-w-full sm:my-4'>
      <ul className='no-scrollbar scroll scroll-px-4 scroll-smooth whitespace-nowrap md:gap-2 flex flex-row gap-4 overflow-x-scroll'>
        {categoriesToShow.map((cat) => (
          <li key={cat.id}>
            <InputCheckbox
              className='w-auto px-[30px] py-[20px] leading-[20px] sm:px-3 sm:py-[10px]'
              option={cat}
              isChecked={selectedCategory.value === cat.value}
              handleChange={handleChangeCategory}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
