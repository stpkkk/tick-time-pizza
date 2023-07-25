import React from "react";
import { useAppSelector } from "@/redux/hooks";

import ModalSubTitle from "./ModalSubTitle";

const NutritionalValue: React.FC = () => {
  const { clickedMenuItem } = useAppSelector(state => state.menuReducer);

  const nutrients = clickedMenuItem?.nutritionalValues;

  return (
    <div>
      <ModalSubTitle text="Пищевая ценность на 100 г:" />
      <div>
        <p className="md:text-xs md:leading-[15px] text-sm leading-[17px]">
          Белки - {nutrients?.proteins} г, Жиры - {nutrients?.fats} г, Углеводы
          - {nutrients?.carbohydrates} г, Калории - {nutrients?.calories} ккал
        </p>
      </div>
    </div>
  );
};

export default NutritionalValue;
