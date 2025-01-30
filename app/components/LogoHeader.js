import React from "react";
import Image from "next/image";
import logo from "../../public/images/sig-blk-en.svg"

import Link from "next/link";
const LogoHeader = () => {
  return (
    <div className="p-4 border-b border-gray-200">
      <Link href="/">
        <Image height={33} src={logo} alt="Logo" />

      </Link>
    </div>
  );
};

export default LogoHeader;
