import React from 'react'
import bgImg from '../../../assets/home/under.jpeg';
function Hero4() {
  return (
    <div className='min-h-screen bg-cover' style={{backgroundImage: `url(${bgImg})`}}>
    <div className='min-h-screen flex items-center justify-start pl-11 text-white bg-black bg-opacity-60'>
        <div className='space-y-4'>
            
            <h1 className='md:text-7xl text-4xl font-bold'>Elite aquatic excellence awaits</h1>
            <div className='md:w-1/2'>
                <p>Join us in the pool and discover the difference of unmatched expertise tailored to suit your water polo journey. From beginners to seasoned players, our training program offers a winning combination of skill refinement and strategic prowess.</p>
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

export default Hero4