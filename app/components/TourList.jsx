import Image from 'next/image'
import React from 'react'

function TourList({id, images, name, description}) {
  return (
    <div className="flex flex-col justify-center items-center w-40 text-sm text-center mx-[30px]" key={id} id={`header-top-tour-${id}`}>
          <div className="relative h-40 w-full">
            <Image
              src={images}
              alt={`${name} Image`}
              fill
              sizes='auto'
              style={{ objectFit: "cover" }}
              className="rounded-[7px]"
            />
          </div>
          <span className="font-bold">{name}</span>
          <p className='line-clamp-3'>{description}</p>
        </div>
  )
}

export default TourList