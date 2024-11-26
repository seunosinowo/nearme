import React from 'react'
import sky from '../assets/sky.jpg'

const MainContent = () => {
  return (
    <div className='bg-cover h-screen w-full' style={{backgroundImage: `url(${sky})`}}>
      <div className='flex items-center justify-center w-full'>
        <h1 className='uppercase text-white font-bold tracking-wide lg:text-5xl pt-40 lg:w-[900px] items-center justify-center text-2xl w-[450px]'>
            Best place to find and explore {""}
            <span className='lg:flex justify-center lg:mt-7 flex bg-gradient-to-r'>that all you need</span>
        </h1>
      </div>
 
        <p className='text-white lg:text-[1.3rem] w-full justify-center items-center lg:mt-8 mt-6 lg:flex flex'>
            Find Best Place, Restaurant, Hotel, Real State and many more think in just One click
        </p>

    </div>
  )
}

export default MainContent
