import React from 'react'
import hiking from "../assets/hiking.jpg"
import backpacker from "../assets/backpacker.jpg"
import rear from "../assets/rear.jpg"

const News = () => {
  return (
    <div className='mb-16 grid'>
      <div className='grid w-full justify-center space-y-5 text-neutral-600 mb-16'>
            <h1 className='grid w-full justify-center uppercase lg:text-3xl text-[1.3rem] font-bold'>News and articles</h1>
            <p>Always upto date with our latest News and Artcles</p>
      </div>

        <div className='grid lg:grid-cols-3 p-7 gap-7'>

            {/* First One */}
            <div className=' h-[520px] shadow-lg hover:shadow-2xl'>
                <img src={hiking} alt='hiking'/>

                <div className='px-5 pt-5 space-y-2'>
                    <h1 className='text-black text-[1.2rem] hover:text-red-500 cursor-pointer'>How to find your Desired Place Quickly</h1>
                    <div className='flex space-x-7'>
                        <h1 className='text-neutral-500'>Posted BY 
                            <span className='text-black cursor-pointer'>{" "}ADMIN</span>
                        </h1>
                        <p>|</p>
                        <p className='text-neutral-500'>March 2045</p>
                    </div>
                        <p className='text-neutral-500 text-[0.9rem] pt-5 text-justify'>
                            Explore a universe of possibilities, from local gems to global wonders, all tailored to your preferences. Your perfect adventure awaits. Discover the world, one click at a time.
                        </p>
                </div>
                

            </div>
            {/* End of 1st */}

            {/***********/}

            {/* Second One */}
            <div className=' h-[520px] shadow-lg hover:shadow-2xl'>
                <img src={backpacker} alt='hiking'/>

                <div className='px-5 pt-5 space-y-2'>
                    <h1 className='text-black text-[1.2rem] hover:text-red-500 cursor-pointer'>Your Way: Discover Your Perfect Place</h1>
                    <div className='flex space-x-7'>
                        <h1 className='text-neutral-500'>Posted BY 
                            <span className='text-black cursor-pointer'>{" "}ADMIN</span>
                        </h1>
                        <p>|</p>
                        <p className='text-neutral-500'>March 2045</p>
                    </div>
                        <p className='text-neutral-500 text-[0.9rem] pt-5 text-justify'>
                             Unleash the explorer within you. With NearMe, finding your ideal destination is effortless. Whether you're seeking a cozy local café or a luxurious international resort, our platform offers a vast array of options tailored to your unique tastes.
                        </p>
                </div>
                

            </div>
            {/* End of 2nd */}

             {/* Third One */}
             <div className=' h-[520px] shadow-lg hover:shadow-2xl'>
                <img src={rear} alt='hiking'/>

                <div className='px-5 pt-5 space-y-2'>
                    <h1 className='text-black text-[1.2rem] hover:text-red-500 cursor-pointer'>Your Ultimate Travel Companion</h1>
                    <div className='flex space-x-7'>
                        <h1 className='text-neutral-500'>Posted BY 
                            <span className='text-black cursor-pointer'>{" "}ADMIN</span>
                        </h1>
                        <p>|</p>
                        <p className='text-neutral-500'>March 2045</p>
                    </div>
                        <p className='text-neutral-500 text-[0.9rem] pt-5 text-justify'>
                            Tired of endless scrolling and overwhelming choices? NearMe is your ultimate travel companion, simplifying your search for the perfect destination. With just a few clicks, you can discover a world of possibilities, from bustling cities to serene countryside retreats.
                        </p>
                </div>
                

            </div>
            {/* End of 3rd */}

        </div>

    </div>
  )
}

export default News
