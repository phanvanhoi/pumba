"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
      alt="logo.png"
      src="/images/logo.png"
    />
  );
};

export default Logo;
