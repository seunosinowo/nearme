import React from 'react'
import { useState } from 'react'
import { X, Menu } from 'lucide-react'


const Navbar = () => {

  const [isMobileView, setisMobileView] = useState(false)
  const toggleBar = () => {
    setisMobileView(!isMobileView)
  }

  return (
    <div className='flex flex-col fixed backdrop-blur-md w-full h-20'>
        <nav className='bg-white flex'>

            <div className='lg:hidden text-black flex py-7 ms-2'>
                <button onClick={toggleBar}
                className='border border-red-700 rounded-md text-red-800'>
                    {isMobileView ? <X/> : <Menu/>}
                </button>
              </div>

            <h1 className='text-black py-5 lg:ms-9 ms-1 font-bold text-[1.5rem]'>Near
                <span className='text-red-700'>Me</span>
              </h1> 


            <div className='hidden w-full lg:flex justify-end items-center me-7 px-5 uppercase text-[0.93rem]'>
              <ul className='text-black space-x-6 cursor-pointer flex flex-row'>
                    <li href="#" className='hover:text-red-700 text-neutral-700'>Home</li>
                    <li href="#" className='hover:text-red-700 text-neutral-700'>How it works</li>
                    <li href="#" className='hover:text-red-700 text-neutral-700'>Explore</li>
                    <li href="#" className='hover:text-red-700 text-neutral-700'>Review</li>
                    <li href="#" className='hover:text-red-700 text-neutral-700'>Blog</li>
                    <li href="#" className='hover:text-red-700 text-neutral-700'>Contact</li>
              </ul>
            </div>

            {isMobileView && (
              <div className='fixed left-0 z-20 bg-white w-full p-2 mt-14 flex flex-col lg:hidden pt-5 pb-9'>
                <ul className='uppercase space-y-5 text-[0.9rem] text-neutral-800 cursor-pointer '>
                    <li href="#" className='text-red-800'>Home</li>
                    <li href="#" className='hover:text-red-800'>How it works</li>
                    <li href="#" className='hover:text-red-800'>Explore</li>
                    <li href="#" className='hover:text-red-800'>Review</li>
                    <li href="#" className='hover:text-red-800'>Blog</li>
                    <li href="#" className='hover:text-red-800'>Contact</li>
                </ul>
              </div>
            )}

        </nav>

    </div>
  )
}

export default Navbar
