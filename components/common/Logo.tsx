import React from "react";
import logo from "../../public/assets/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="mr-auto">
      <Image src={logo} width={45} height={45} alt="logo" priority />
    </Link>
  );
};

export default Logo;
