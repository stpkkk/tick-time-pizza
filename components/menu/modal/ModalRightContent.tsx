import React from "react";

import ProductSizeSelection from "./ProductSizeSelection";
import IngredientsSelect from "./IngredientsSelect";
import IngredientsRemove from "./IngredientsRemove";
import NutritionalValue from "./NutritionalValue";
import ProductTitle from "./ProductTitle";

type ModalRightContentProps = {
  modalHeight: number;
};

const ModalRightContent: React.FC<ModalRightContentProps> = ({
  modalHeight,
}) => {
  return (
    <div
      className={`modal_mobile_height flex flex-col gap-[30px] pr-[50px] scroll scroll-container overflow-auto modal_scrollbar sm:overflow-visible sm:pr-0`}
      style={{
        height: `${modalHeight}px`,
      }}
    >
      <div className="sm:hidden">
        <ProductTitle />
      </div>
      <ProductSizeSelection />
      <IngredientsSelect />
      <IngredientsRemove />
      <NutritionalValue />
    </div>
  );
};

export default ModalRightContent;
