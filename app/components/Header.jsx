import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";
import User from "@/assets/users.png";  
import Link from "next/link";

const Header = () => {

  return (
    <div className="w-screen h-20 px-[75px]  flex flex-row justify-between items-center">
        <div className="flex gap-1">
          <Link href="/">
            <Image data-cy="h-logo" src={Logo} width={45} height={45} alt="Logo" style={{width: 'auto', height: 'auto'}}/>
          </Link>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Ravel</h1>
            <span className="text-xs">Travel Solution by Randy</span>
          </div>
        </div>
        <div className="flex gap-5 font-bold">
          <Link href="/" className="text-green-500" data-cy="h-nav-home">
            Home
          </Link>
          <a href="" data-cy="h-nav-other-place">Tempat Lain</a>
          <a href="" data-cy="h-nav-testimoni">Testimoni</a>
        </div>
        <div className="flex items-center gap-2">
          <span>Halo, Reza</span>
          <Image src={User} width={45} height={45} alt="user"/>
        </div>
      </div>
  );
};

export default Header
