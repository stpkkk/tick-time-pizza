import React from 'react';

type ButtonsSaveCancelProps = {
  disabled: boolean;
  clickCancel: () => void;
};

const ButtonsSaveCancel: React.FC<ButtonsSaveCancelProps> = ({
  disabled,
  clickCancel,
}) => {
  return (
    <div className='flex_center gap-[30px] sm:gap-2.5 w-full'>
      <button
        className='btn_gray max-w-[236px]'
        onClick={clickCancel}
        type='button'
      >
        Отменить
      </button>
      <button
        className='btn_red btn_disabled max-w-[236px]'
        type='submit'
        disabled={disabled}
      >
        Сохранить
      </button>
    </div>
  );
};

export default ButtonsSaveCancel;
