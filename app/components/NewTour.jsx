import React from 'react'
import Image from "next/image";
import dataTour from '@/app/data/newTour.json'
import ImgNewTour from '@/assets/new-tour.png'

function NewTour() {

  // try {
  //   const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/tours/new-tour`,{
  //     headers: {
  //       'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  //     }
  //   })
  //   const newTour = await response.json()

  //   return newTour
  // } catch (error) {
  //   return null;
  // }
    
    
  const {name,slug, description} = dataTour;

  return (
    <div className="flex flex-row pt-14 pb-[75px] justify-center gap-5" id="header-new-tour">
        <div className="relative w-[440px] h-[315px]">
          <Image src={ImgNewTour} 
              alt={`${""} Image`}
              fill
              sizes='auto'
          style={{ objectFit: "cover", objectPosition: '50% 45%' }}
          className="mix-blend-darken rounded-[36px] shadow"/> 
        </div>
        <div className="w-3/6 flex flex-col gap-[15px]">
          <h1 className="text-2xl font-bold"  >Tujuan <span className="text-green-400">Baru</span>!</h1>
          <h2 className="font-bold ">{name}, <span className="text-green-400">{slug}</span></h2>
          <p>{description}</p>
        </div>
      </div>
  )
}

export default NewTour