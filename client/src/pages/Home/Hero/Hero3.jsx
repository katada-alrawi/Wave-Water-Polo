import React from 'react'
import bgImg from '../../../assets/home/KK-.jpg';

function Hero3() {
  return (
    <div className='min-h-screen bg-cover' style={{backgroundImage: `url(${bgImg})`}}>
        <div className='min-h-screen flex items-center justify-start pl-11 text-white bg-black bg-opacity-60'>
            <div className='space-y-4'>
                
                <h1 className='md:text-7xl text-4xl font-bold'>Champion-level polo mastery</h1>
                <div className='md:w-1/2'>
                    <p>Experience the pinnacle of water polo training excellence as you immerse yourself in our premier program. Dive into personalized coaching designed to elevate your skills and take your game to new heights.</p>
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
  
export default Hero3