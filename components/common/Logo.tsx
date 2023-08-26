import React from "react";
import Link from "next/link";

import logo from "../../public/assets/icons/logo.svg";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="mr-auto">
      <Image
        src={logo}
        alt="logo"
        className="w-full h-full max-w-[57px] max-h-[57px] sm:max-w-[45px] sm:max-h-[45px]"
      />
    </Link>
  );
};

export default Logo;
