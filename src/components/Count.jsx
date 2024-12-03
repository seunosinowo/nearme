import React from 'react'
import zuma from '../assets/zuma.jpg'
import { useEffect } from 'react'

const Count = () => {
  return (
    
    <div className='bg-cover lg:h-44 h-96 lg:pt-0 pt-6 bg-blend-overlay bg-red-800/80 mb-40' style={{backgroundImage: `url(${zuma})`}}>
        <div className='grid lg:grid-cols-4 w-full justify-center items-center lg:p-14'>

            <div className='flex flex-col text-white justify-center'>
                <h1 className='text-6xl'>90k+</h1>
                <p className='lg:text-2xl text-[1.0rem] mx-4'>Listings</p>
            </div>

            <div className='flex flex-col text-white justify-center'>
                <h1 className='text-6xl w-'>40k+</h1>
                <p className='lg:text-2xl text-[1.0rem] lg:-mx-9'>Listings Categories</p>
            </div>

            <div className='flex flex-col text-white justify-center'>
                <h1 className='text-6xl'>65k+</h1>
                <p className='lg:text-2xl text-[1.0rem] mx-4'>Visitors</p>
            </div>

            <div className='flex flex-col text-white justify-center'>
                <h1 className='text-6xl'>50k+</h1>
                <p className='lg:text-2xl text-[1.0rem] lg:mx-2'>Happy Clients</p>
            </div>
            
        </div>
    </div>
  )
}

export default Count
