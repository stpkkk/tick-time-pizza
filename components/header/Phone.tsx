import React from "react";
import Link from "next/link";

const Phone: React.FC = () => {
  return (
    <div className="px-[28px]  sm:px-2 flex_center flex-col sm:flex-row sm:gap-2 h-full cursor-pointer whitespace-nowrap">
      <div>
        <Link
          href="tel:330204"
          as="phone"
          className="font-zheldor text-[2rem] leading-10 "
        >
          33-02-04
        </Link>
      </div>
      <p className="text-[10px] sm:text-[8px] leading-[0.75rem]">
        круглосуточная
        <br /> бесплатная доставка*
      </p>
    </div>
  );
};

export default Phone;
