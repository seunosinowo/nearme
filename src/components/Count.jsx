import React from 'react'
import zuma from '../assets/zuma.jpg'
import { useState, useEffect } from 'react'

const Count = () => {
    const [listings, setListings] = useState(1)
    const [categories, setCategories] = useState(1)
    const [visitors, setVisitors] = useState(1)
    const [clients, setClients] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            if(listings < 150) {
                setListings((prevCount) => prevCount + 1)
            } else {
                clearInterval(interval)
            }
        }, [100])
        
        return () => clearInterval(interval)
    }, [listings])

    useEffect(() => {
        const interval = setInterval(() => {
            if (categories < 85) {
                setCategories((prevCount) => prevCount + 1)
            } else {
                clearInterval(interval)
            }
        }, [100])
        return() => clearInterval(interval)
    }, [categories])

    useEffect(() => {
        const interval = setInterval(() => {
            if (visitors < 100){
                setVisitors((prevCount) => prevCount + 1)
            } else {
                clearInterval(interval)
            }
        }, [100])
        return() => clearInterval(interval)
    }, [visitors])

    useEffect(() => {
        const interval = setInterval(() => {
            if (clients < 95) {
                setClients((prevCount) => prevCount + 1)
            } else {
                clearInterval(interval)
            }
        }, 100)
        return() => clearInterval(interval)
    }, [clients])

   

  return (
    <div className='bg-cover lg:h-44 h-96 lg:pt-0 pt-6 bg-blend-overlay bg-red-800/80 mb-40' style={{backgroundImage: `url(${zuma})`}}>
        <div className='grid lg:grid-cols-4 w-full justify-center items-center lg:p-14'>

            <div className='flex flex-col text-white justify-center'>
                <h1 className='text-6xl'>{listings}k+</h1>
                <p className='lg:text-2xl text-[1.0rem] mx-4'>Listings</p>
            </div>

            <div className='flex flex-col text-white justify-center'>
                <h1 className='text-6xl w-'>{categories}k+</h1>
                <p className='lg:text-2xl text-[1.0rem] lg:-mx-9'>Listings Categories</p>
            </div>

            <div className='flex flex-col text-white justify-center'>
                <h1 className='text-6xl'>{visitors}k+</h1>
                <p className='lg:text-2xl text-[1.0rem] mx-4'>Visitors</p>
            </div>

            <div className='flex flex-col text-white justify-center'>
                <h1 className='text-6xl'>{clients}k+</h1>
                <p className='lg:text-2xl text-[1.0rem] lg:mx-2'>Happy Clients</p>
            </div>
            
        </div>
    </div>
  )
}

export default Count
