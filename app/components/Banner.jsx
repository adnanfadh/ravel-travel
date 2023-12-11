import React from 'react'
import Image from "next/image";
import BannerImage from "@/assets/banner2.png";

function Banner() {
  return (
    <div className="relative h-[575px] w-auto">
        <Image
          src={BannerImage}
          alt="Banner"
          sizes='auto'
          fill
          style={{ objectFit: "fill" }}
          priority
        />
        <div className="absolute bottom-5 left-24 text-stone-300 font-bold flex flex-col">
          <h1 className="text-[40px] leading-none">Ravel</h1>
          <h1 className="text-[24px] leading-none">Travel Solution</h1>
        </div>
      </div>
  )
}

export default Banner