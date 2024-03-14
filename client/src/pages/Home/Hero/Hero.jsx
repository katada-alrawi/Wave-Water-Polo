import React from 'react'
import bgImg from '../../../assets/home/UNDERWATER.jpg'



function Hero() {
  return (
    <div className='min-h-screen bg-cover' style={{backgroundImage: `url(${bgImg})`}}>
        <div className='min-h-screen flex items-center justify-start pl-11 text-white bg-black bg-opacity-60'>
            <div className='space-y-4'>
                <p className='md:text-4xl text-2xl'>We Provide</p>
                <h1 className='md:text-7xl text-4xl font-bold'>Best Water Polo Training</h1>
                <div className='md:w-1/2'>
                    <p>Dive into excellence with our premier water polo training program, tailored to elevate your skills and propel you to victory. Join us for unmatched coaching and unparalleled expertise in the pool.</p>
                </div>
                <div className='flex flex-warp items-center gap-5'>
                    <button className='px-7 py-3 rounded-lg bg-secondary font-bold uppercase'>Join Today</button>
                    <button className='px-7 py-3 rounded-lg border hover:bg-secondary font-bold uppercase'>View Course</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero