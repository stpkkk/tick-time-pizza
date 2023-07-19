import React from "react";
import Link from "next/link";

import logo from "../../public/assets/icons/logo.svg";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="mr-auto">
      <Image src={logo} width={45} height={45} alt="logo" priority />
    </Link>
  );
};

export default Logo;
