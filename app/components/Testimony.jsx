import React from 'react'
import testimony from '@/assets/testimony.png'
import Image from 'next/image'

function Testimony() {
  return (
    <div className="flex flex-row py-24 justify-center gap-4" id="header-new-tour">
        <div className="relative w-[440px] h-[333px]">
          <Image src={testimony} 
              alt="testimony"
              fill
              sizes='auto'
          style={{ objectFit: "cover" }}
          /> 
        </div>
        <div className="w-3/6 flex flex-col gap-[15px] items-start justify-between" >
            <div>
                <h1 className="text-2xl font-bold"  >Experience Nomor  <span className="text-green-400">Satu</span>!</h1>
                <span className="font-bold ">Dipercaya Seluruh Dunia</span>
            </div>
          <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate erat sit amet malesuada lacinia. Maecenas hendrerit, nunc ac finibus interdum, metus nibh pharetra elit, in efficitur est sem ut nunc. Cras bibendum turpis tempor, eleifend leo vel, sodales ligula. Vestibulum pulvinar fringilla justo, ac dignissim sapien vulputate eu. Quisque bibendum sagittis orci, id dapibus quam tincidunt eget. Aenean suscipit ex ac ex facilisis, at ullamcorper nibh ultricies. Sed porttitor mi at leo suscipit tincidunt. Fusce molestie pharetra velit ac luctus. Donec feugiat dictum tellus, vitae vestibulum erat tempus quis. Maecenas suscipit porta ligula, ut mattis lacus ultrices sit amet. In scelerisque nibh at odio lobortis, ut venenatis eros cursus. Sed molestie purus ut eros pretium, et auctor tellus accumsan. Etiam posuere suscipit mi ac aliquet.</p>
        <button className='bg-[#4BFF72] pb-[23px] pl-[29px] pr-[28px] pt-[22px] rounded-xl text-white font-bold' id="btn-testimoni">
            <i></i>Testimoni -{'>'}</button>
        </div>
      </div>
  )
}

export default Testimony