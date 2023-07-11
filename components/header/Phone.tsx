import React from "react";
import Link from "next/link";

const Phone: React.FC = () => {
  return (
    <div className="px-10 sm:px-4 flex_center flex-col sm:flex-row sm:gap-2 h-full cursor-pointer">
      <div>
        <Link href="tel:330204" className="font-zheldor text-[2rem] leading-10">
          33-02-04
        </Link>
      </div>
      <p className="text-[10px] font-semibold sm:leading-3">
        круглосуточная
        <br /> бесплатная доставка*
      </p>
    </div>
  );
};

export default Phone;
