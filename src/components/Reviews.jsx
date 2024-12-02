import React from 'react'
import face from "../assets/face.jpg"
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className='mb-60 p-5'>
        
      <div className='grid w-full justify-center text-neutral-600'>
            <h2 className='text-3xl uppercase'>Clients Reviews</h2>
            <p className='grid w-full justify-center'>What our client say about us</p>
      </div>

    {/* Start */}
    <div className='grid lg:grid-cols-3 w-full justify-center items-center'>
      <div className='bg-white shadow-lg w-[23rem] h-[20rem] mt-32'>
        <div className='flex space-x-5 p-4 my-11'>
        <img src={face} alt = "My Face" className='w-10 h-10 rounded-full my-7'/>
        <div className=''>
            <h1 className='font-bold lg:text-[1.3rem] text-[1rem]'>Tom Leakar</h1>
            <h5>London, UK</h5>
            {Array.from({length:5}, () => (
                <FaStar key={Math.random} className='text-yellow-400 inline-block'/>
            ))}
        </div>
        </div>
            <div className='p-4 -my-8'>
            <p>
                Exploring new locations allows individuals to discover unique cultures
                and experience different ways of life. Whether traversing through vibrant cities.
            </p>
            </div>

      </div>
      {/* End */}

      {/* Second */}
      <div className='bg-white shadow-lg w-[23rem] h-[20rem] mt-32'>
        <div className='flex space-x-5 p-4 my-11'>
        <img src={face} alt = "My Face" className='w-10 h-10 rounded-full my-7'/>
        <div className=''>
            <h1 className='font-bold lg:text-[1.3rem] text-[1rem]'>Tom Leakar</h1>
            <h5>London, UK</h5>
            {Array.from({length:5}, () => (
                <FaStar key={Math.random} className='text-yellow-400 inline-block'/>
            ))}
        </div>
        </div>
            <div className='p-4 -my-8'>
            <p>
                Exploring new locations allows individuals to discover unique cultures
                and experience different ways of life. Whether traversing through vibrant cities.
            </p>
            </div>

      </div>
      {/* End of Second */}

      {/* 3rd */}
      <div className='bg-white shadow-lg w-[23rem] h-[20rem] mt-32'>
        <div className='flex space-x-5 p-4 my-11'>
        <img src={face} alt = "My Face" className='w-10 h-10 rounded-full my-7'/>
        <div className=''>
            <h1 className='font-bold lg:text-[1.3rem] text-[1rem]'>Tom Leakar</h1>
            <h5>London, UK</h5>
            {Array.from({length:5}, () => (
                <FaStar key={Math.random} className='text-yellow-400 inline-block'/>
            ))}
        </div>
        </div>
            <div className='p-4 -my-8'>
            <p>
                Exploring new locations allows individuals to discover unique cultures
                and experience different ways of life. Whether traversing through vibrant cities.
            </p>
            </div>

      </div>
      {/* End of 3rd */}
      </div>
    </div>
  )
}

export default Reviews