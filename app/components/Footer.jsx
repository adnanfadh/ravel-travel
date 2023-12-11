import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around text-white bg-zinc-800 py-5 items-center' id='f-ravel'>
        <div className='flex flex-col items-center'>
            <span className='text-3xl font-bold'>Ravel</span>
            <span className='text-1xl'>Travel Solution</span>
        </div>
        <div>
            <span className='text-1xl'>Copyright &copy; All rights Reserved</span>
        </div>
        <div></div>
    </div>
  )
}

export default Footer