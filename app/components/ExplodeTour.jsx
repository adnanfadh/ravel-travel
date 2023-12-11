import React from 'react'
import TourList from './TourList'
import dataTour from '@/app/data/explodeTour.json'


function ExplodeTour() {

  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/tours/top-5-tour`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  //     },
  //   }
  // );
  // const tour = await response.json();
  // console.log(tour.data);

  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl pb-[44px]">
          <span className="text-green-400">Explode</span> Tempat Lainnya
        </h1>
        <div className="flex justify-center items-start bg-neutral-50 w-full pt-[64px] pb-[62px]">
          {dataTour.data.map(data => {
            return <TourList id={data._id} images={data.image} name={data.name} description={data.description} />
          })}
        </div>
      </div>
  )
}

export default ExplodeTour