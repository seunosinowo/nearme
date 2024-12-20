import React from 'react'
import bar from "../assets/bar.jpg"
import face from "../assets/face.jpg"
import swim from "../assets/swim.jpg"
import tour from "../assets/tour.jpg"

import { MapPin, Download, Heart, Fullscreen, ArrowDownToLine } from 'lucide-react'

const Explore = () => {
  return (
    <div className='grid w-full justify-center min-h-[30rem] bg-slate-100 mt-32 mb-24' id='explore'>
        <div className='mt-16 space-y-5 text-neutral-600'>
            <h1 className='grid text-3xl uppercase justify-center w-full font-bold'>Expore</h1>
            <p className='lg:text-[1.2rem] text-[1rem] text-center'>Explore New place, food, culture around the world and many more</p>
        </div>

        {/* Each Section */}

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-16 mx-16 mb-10'>
            <div className='hover: group '>
                <img src={bar} alt='BarPlace' className='rounded-t-md' />

                <div className='flex'>
                    <div className='hidden group-hover:block px-4 w-36 justify-start items-center cursor-pointer'>
                        <p className='-mt-9 rounded bg-red-600 text-white text-sm justify-center items-center flex
                        '>Best Rated</p>
                    </div> 
                            
                    <div className='flex flex-row w-full justify-end -mt-9 px-7 space-x-3'>
                        <Fullscreen className='hidden group-hover:block text-white bg-black hover:text-blue-600 p-1' />
                        <ArrowDownToLine className='hidden group-hover:block text-white bg-black hover:text-blue-600 p-1' />
                    </div>
                </div>
                <div/>
                
            

            <div className='bg-white rounded-b-md h-80'>
                <h1 className='text-[1.1rem] px-7 pt-7 font-bold'>Tommy Hilfinger Bar</h1>
                <div className='flex text-neutral-500 px-7 pt-7 space-x-3 text-sm'>
                    <div className='bg-sky-400 w-8 rounded-md'>
                        <h2 className='text-white text-center'>5.0</h2>
                    </div>
                    <div className='flex space-x-1'>
                        <p>10 Ratings</p>
                        <p>|</p>
                        <p>Form <span className='text-red-600'>5$ - 300$</span></p>
                        <p>|</p>
                        <p>Resturant</p>
                    </div>
                </div>

                <div className='flex mt-4 px-7 pt-2'>
                    <img src={face} className='w-12 h-12 rounded-full'/>
                    <p className='text-sm px-5 text-neutral-500'>Indulge in a sophisticated blend of style and substance at the Tommy Hilfiger Bar. This chic establishment offers more than just a drink; it's an experience.</p>
                </div>

                <div className='px-7 pt-7'>
                    <hr/>
                    

                    <div className='flex mt-6 cursor-pointer'>
                        <div className='justify-start flex w-full flex-row'>
                             <p className='text-red-600 text-sm'>Close Now</p>
                        </div>

                        <div className='justify-end flex flex-row space-x-9'>
                            <MapPin className='w-4 hover:text-red-600' />
                            <Download className='w-4 hover:text-red-600' />
                            <Heart className='w-4 hover:text-red-600' />
                        </div>


                    </div>
                    
                </div>

            </div>
            </div>

        

        {/* End of Section */}

        {/* Second one */}

        <div className='hover:shadow-2xl group'>
                <img src={swim} alt='BarPlace' className='rounded-t-md' />

                <div className='flex'>
                    <div className='hidden group-hover:block px-4 w-36 justify-start items-center cursor-pointer'>
                        <p className='-mt-9 rounded bg-red-600 text-white text-sm justify-center items-center flex
                        '>Best Rated</p>
                    </div> 
                            
                    <div className='flex flex-row w-full justify-end -mt-9 px-7 space-x-3'>
                        <Fullscreen className='hidden group-hover:block text-white bg-black hover:text-blue-600 p-1' />
                        <ArrowDownToLine className='hidden group-hover:block text-white bg-black hover:text-blue-600 p-1' />
                    </div>
                </div>
                
            

            <div className='bg-white rounded-b-md h-80'>
                <h1 className='text-[1.1rem] px-7 pt-7 font-bold'>Swim and Dine Resort</h1>
                <div className='flex text-neutral-500 px-7 pt-7 space-x-3 text-sm'>
                    <div className='bg-green-700 w-8 rounded-md'>
                        <h2 className='text-white text-center'>4.5</h2>
                    </div>
                    <div className='flex space-x-1'>
                        <p>10 Ratings</p>
                        <p>|</p>
                        <p>Form <span className='text-red-600'>5$ - 300$</span></p>
                        <p>|</p>
                        <p>Resturant</p>
                    </div>
                </div>

                <div className='flex mt-4 px-7 pt-2'>
                    <img src={face} className='w-12 h-12 rounded-full'/>
                    <p className='text-sm px-5 text-neutral-500'>Escape the ordinary and discover paradise at the Swim and Dine Resort. This idyllic retreat offers the ultimate luxury experience</p>
                </div>

                <div className='px-7 pt-7'>
                    <hr/>
                    

                    <div className='flex mt-6 cursor-pointer'>
                        <div className='justify-start flex w-full flex-row'>
                             <p className='text-green-600 text-sm'>Open Now</p>
                        </div>

                        <div className='justify-end flex flex-row space-x-9'>
                            <MapPin className='w-4 hover:text-red-600' />
                            <Download className='w-4 hover:text-red-600' />
                            <Heart className='w-4 hover:text-red-600' />
                        </div>


                    </div>
                    
                </div>

            </div>
            </div>

        {/* End of Second */}



        {/* 3rd one */}

        <div className='hover:shadow-2xl group'>
                <img src={tour} alt='BarPlace' className='rounded-t-md' />

                <div className='flex'>
                    <div className='hidden group-hover:block px-4 w-36 justify-start items-center cursor-pointer'>
                        <p className='-mt-9 rounded bg-red-600 text-white text-sm justify-center items-center flex
                        '>Best Rated</p>
                    </div> 
                            
                    <div className='flex flex-row w-full justify-end -mt-9 px-7 space-x-3'>
                        <Fullscreen className='hidden group-hover:block text-white bg-black hover:text-blue-600 p-1' />
                        <ArrowDownToLine className='hidden group-hover:block text-white bg-black hover:text-blue-600 p-1' />
                    </div>
                </div>
                
            

            <div className='bg-white rounded-b-md h-80'>
                <h1 className='text-[1.1rem] px-7 pt-7 font-bold'>Europe Tour</h1>
                <div className='flex text-neutral-500 px-7 pt-7 space-x-3 text-sm'>
                    <div className='bg-yellow-500 w-8 rounded-md'>
                        <h2 className='text-white text-center'>5.0</h2>
                    </div>
                    <div className='flex space-x-1'>
                        <p>10 Ratings</p>
                        <p>|</p>
                        <p>Form <span className='text-red-600'>5$ - 300$</span></p>
                        <p>|</p>
                        <p>Resturant</p>
                    </div>
                </div>

                <div className='flex mt-4 px-7 pt-2'>
                    <img src={face} className='w-12 h-12 rounded-full'/>
                    <p className='text-sm px-5 text-neutral-500'>Embark on an unforgettable journey through the heart of Europe.</p>
                </div>

                <div className='px-7 pt-7'>
                    <hr/>
                    

                    <div className='flex mt-6 cursor-pointer'>
                        <div className='justify-start flex w-full flex-row'>
                             <p className='text-red-600 text-sm'>Close Now</p>
                        </div>

                        <div className='justify-end flex flex-row space-x-9'>
                            <MapPin className='w-4 hover:text-red-600' />
                            <Download className='w-4 hover:text-red-600' />
                            <Heart className='w-4 hover:text-red-600' />
                        </div>


                    </div>
                    
                </div>
                </div>

            </div>

        </div>
      

        
    </div>
  )
}

export default Explore
