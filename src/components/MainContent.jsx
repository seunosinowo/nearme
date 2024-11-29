import React from 'react'
import sky from '../assets/sky.jpg'
import { Logs } from 'lucide-react'
import { Focus } from 'lucide-react'
import { Search } from 'lucide-react'
import { CookingPot, LocateFixed, Hotel, Hospital, Car } from 'lucide-react'

const MainContent = () => {
  return (
    <div className='bg-cover h-[735px] min-w-full' style={{backgroundImage: `url(${sky})`}}>
      <div className='flex items-center justify-center w-full'>
        <h1 className='uppercase text-white font-bold tracking-wide lg:text-5xl pt-40 lg:w-[900px] items-center justify-center text-2xl w-[450px]'>
            Best place to find and explore {""}
            <span className='lg:flex justify-center lg:mt-7 flex bg-gradient-to-r'>that all you need</span>
        </h1>
      </div>
 
        <p className='text-white lg:text-[1.3rem] w-full justify-center items-center mt-8 lg:flex flex'>
            Find Best Place, Restaurant, Hotel, Real State and many more think in just One click
        </p>

        <div className='flex flex-wrap h-16 mx-11 lg:mt-10 mt-10 lg:space-x-1 justify-center md:flex-row'>

            <div className='flex flex-row border border-white bg-white rounded-md w-[400px]'>
                <p className='p-5 mx-3 font-bold'>What?</p>

                <input src='text' name='message' 
                placeholder='Ex: Palce, Resturant, Food, Automobile' 
                className='bg-transparent justify-center outline-none'
                />

                <Logs className='my-5 w-52 cursor-pointer' />

            </div>


            <div className='flex flex-row border border-white bg-white rounded-md w-[400px]'>
                <p className='p-5 font-bold'>Location?</p>

                <input src='text' name='message' 
                placeholder='Ex: Abuja, London, Lagos' 
                className='bg-transparent justify-center outline-none '
                />

                <Focus className='my-5 w-52 cursor-pointer' />

            </div>

            <div className='bg-red-700 w-44 flex justify-center items-center space-x-3 cursor-pointer rounded-md text-white'>
                <h2 className=''>Search</h2>
                <Search className='w-5'/>
            </div>
        </div>

        {/* Boxes down */}

        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-col-3 mt-48 mb-10 w-full justify-center items-center lg:max-w-[80%] mx-auto gap-3'>

        {/* <div className='flex flex-wrap mt-48 mb-10 w-full justify-center items-center sm:space-x-3 md:space-x-3 lg:space-x-5'> */}
          
            <div className='bg-white h-40 w-48 rounded-md shadow-2xl'>

              <div className='flex flex-col w-full rounded-md justify-center items-center h-40 space-y-2 text-neutral-600 hover:bg-red-600 hover:text-white hover:transition hover:duration-150'>
                <CookingPot className='h-12 w-12'/>
                  <h2 className='text-[1.1rem] cursor-pointer'>Restaurant</h2>
                  <p className='font-extralight'>150 Listings</p>
              </div>

            </div>

            <div className='bg-white h-40 w-48 rounded-md shadow-2xl'>

              <div className='flex flex-col w-full rounded-md justify-center items-center h-40 space-y-2 text-neutral-600 hover:bg-red-600 hover:text-white hover:transition hover:duration-150'>
                <LocateFixed className='h-12 w-12' />
                  <h2 className='text-[1.1rem] cursor-pointer'>Destination</h2>
                  <p className='font-extralight'>150 Listings</p>
              </div>

            </div>

            <div className='bg-white h-40 w-48 rounded-md shadow-2xl'>

              <div className='flex flex-col w-full rounded-md justify-center items-center h-40 space-y-2 text-neutral-600 hover:bg-red-600 hover:text-white hover:transition hover:duration-150'>
                <Hotel className='h-12 w-12' />
                  <h2 className='text-[1.1rem] cursor-pointer'>Hotels</h2>
                  <p className='font-extralight'>150 Listings</p>
              </div>

            </div>

            <div className='bg-white h-40 w-48 rounded-md shadow-2xl'>

              <div className='flex flex-col w-full rounded-md justify-center items-center h-40 space-y-2 text-neutral-600 hover:bg-red-600 hover:text-white hover:transition hover:duration-150'>
                <Hospital className='h-12 w-12' />
                  <h2 className='text-[1.1rem] cursor-pointer'>Healthcare</h2>
                  <p className='font-extralight'>150 Listings</p>
              </div>

            </div>

            <div className='bg-white h-40 w-48 rounded-md shadow-2xl'>

              <div className='flex flex-col w-full rounded-md justify-center items-center h-40 space-y-2 text-neutral-600 hover:bg-red-600 hover:text-white hover:transition hover:duration-150'>
                <Car className='h-12 w-12' />
                  <h2 className='text-[1.1rem] cursor-pointer'>Automation</h2>
                  <p className='font-extralight'>150 Listings</p>
              </div>

            </div>

        </div>

</div>
  )
}

export default MainContent
