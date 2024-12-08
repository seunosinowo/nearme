import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='grid h-96 grid-cols-1 bg-gradient-to-br from-slate-200 to-slate-100 w-full justify-items-center group hover:shadow-2xl'>
        <div className='space-y-4 p-7 text-center'>
            <h1 className='lg:text-[1.7rem] text-[1.3rem] uppercase'>List your business with NearMe and reach a wider audience !!</h1>
            <p className='lg:text-[1.2rem] text-[1.0rem] text-neutral-500'>We'll help you connect with potential customers and boost your online visibility</p>
        </div>

        <div className='grid rounded-md lg:flex'>
            <input src='text' name='text' placeholder='Enter your Name' 
            className='ps-7 text-neutral-500 outline-none h-14 w-[25rem] group-hover:shadow-2xl'/>
            
            <div className='flex justify-items-center mx-auto cursor-pointer bg-red-500 hover:bg-red-600 w-44 lg:h-14 lg:flex-shrink-0 group-hover:shadow-2xl'>
                <p className='flex w-full justify-center items-center text-white lg:text-[1rem]'>Create Account</p>
            </div>
        </div>
        </div>
        {/* End */}

        <div className='grid lg:grid-cols-2 bg-white mb-10'>
            <div className='pt-8 mx-7'>
                <h1 className='text-black font-bold text-[1.5rem] w-1/2'>Near
                        <span className='text-red-700'>Me</span>
                </h1>
            </div>

            <div className='uppercase text-[0.93rem] pt-8 mx-7 lg:mx-0'>
              <ul className='text-black space-x-6 cursor-pointer flex flex-row'>
                    <li><a href="#top" className='hover:text-red-700 text-neutral-700'>Home</a></li>
                    <li><a href="#works" className='hover:text-red-700 text-neutral-700'>How it works</a></li>
                    <li><a href="#explore" className='hover:text-red-700 text-neutral-700'>Explore</a></li>
                    <li><a href="#reviews" className='hover:text-red-700 text-neutral-700'>Review</a></li>
                    <li><a href="#blog" className='hover:text-red-700 text-neutral-700'>Blog</a></li>
                    <li><a href="#" className='hover:text-red-700 text-neutral-700'>Contact</a></li>
              </ul>
            </div>

          

        </div>
    </div>
  )
}

export default Footer
