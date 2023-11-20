import React from 'react';

const Promocode: React.FC = () => {
  const [isPromoDisabled, setIsPromoDisabled] = React.useState(true);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value.trim() === '') {
      setIsPromoDisabled(true);
    } else {
      setIsPromoDisabled(false);
    }
  };
  return (
    <form noValidate className='relative md:w-full'>
      <input
        onChange={onInputChange}
        id='code'
        name='code'
        className='px-6 md:py-4 w-full md:text-xs text-sm leading-4 font-semibold bg-transparent rounded-2xl border border-gray border-solid focus:outline-none focus:ring-0 focus:border-yellow disabled:border-grayDark h-[60px] !appearance-none hover:appearance-none pr-20'
      />
      <label
        htmlFor='code'
        className='absolute bg-white text-sm sm:text-xs text-grayDark font-semibold leading-3 duration-300 transform -translate-y-4 top-2 left-3.5 md:left-2.5 z-0 px-2.5 md:px-3.5'
      >
        Промокод
      </label>
      <button
        type='submit'
        className='btn_yellow btn_disabled max-w-[70px] absolute sm:rounded-[13px] top-1 right-[3px] md:right-1 min-h-[52px]'
        disabled={isPromoDisabled}
      >
        ок
      </button>
    </form>
  );
};

export default Promocode;
