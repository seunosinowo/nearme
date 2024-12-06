import React from 'react'
import { Lightbulb, Target, Compass } from 'lucide-react'

const Workflow = () => {
  return (
    <div className='grid w-full justify-center mb-6'>
        <div className='lg:mt-48 mt-[50rem] space-y-8'>
            <h1 className='lg:text-3xl text-[1.5rem] text-neutral-600 uppercase w-full justify-center flex font-bold'>How it work</h1>
            <p className='text-neutral-500 flex justify-center'>Learn More about how our website works</p>
        </div>

        <div className='mt-28 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-0 gap-4'>
          <div className='flex flex-col items-center justify-center bg-white shadow-2xl rounded-md min-h-96 w-[20rem] space-y-9 group hover:bg-red-600 group hover:text-white transition-opacity duration-1000
          '>
             
              <Lightbulb className='bg-slate-200 p-5 group-hover:bg-white rounded-full h-20 w-20 text-neutral-700 group-hover:text-red-600'/>
              <h1 className='text-center text-[1.3rem] text-neutral-800  group-hover:text-white'>Choose what to do</h1>
              <p className='text-center text-sm text-neutral-500 group-hover:text-white'>Unlock your next adventure by selecting your destination</p>
              <button className='border border-neutral-500 rounded-sm p-1 text-neutral-500 group-hover:text-red-600 text-[0.8rem] w-24 group-hover:bg-white group-hover:border-none'>Read More</button>
              
            
          </div>

          <div className='flex flex-col items-center justify-center bg-white shadow-2xl rounded-md min-h-96 w-[20rem] space-y-9 group hover:bg-red-600 group hover:text-white 
          '>
             
              <Target className='bg-slate-200 p-5 group-hover:bg-white rounded-full h-20 w-20 text-neutral-700 group-hover:text-red-600'/>
              <h1 className='text-center text-[1.3rem] text-neutral-800 group-hover:text-white'>Find what you want</h1>
              <p className='text-center text-sm text-neutral-500 group-hover:text-white'>By diligently searching and exploring, individuals can uncover the specific information or resources they seek</p>
              <button className='border border-neutral-500 rounded-sm p-1 text-neutral-500 group-hover:text-red-600 text-[0.8rem] w-24 group-hover:bg-white group-hover:border-none'>Read More</button>
              
            
          </div>

          <div className='flex flex-col items-center justify-center bg-white shadow-2xl rounded-md min-h-96 w-[20rem] space-y-9 group hover:bg-red-600 group hover:text-white 
          '>
             
              <Compass className='bg-slate-200 p-5 group-hover:bg-white rounded-full h-20 w-20 text-neutral-700 group-hover:text-red-600'/>
              <h1 className='text-center text-[1.3rem] text-neutral-800 group-hover:text-white'>Choose what to do</h1>
              <p className='text-center text-sm text-neutral-500 group-hover:text-white'>Embarking on journeys to unfamiliar places allows individuals to step outside their comfort zones</p>
              <button className='border border-neutral-500 rounded-sm p-1 text-neutral-500 group-hover:text-red-600 text-[0.8rem] w-24 group-hover:bg-white group-hover:border-none'>Read More</button>
              
            
          </div>

        </div>
    </div>
  )
}

export default Workflow
