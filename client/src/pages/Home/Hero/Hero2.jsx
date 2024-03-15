import bgImg from '../../../assets/home/PV2_8761.jpeg';

function Hero2() {
  return (
    <div className='min-h-screen bg-cover' style={{backgroundImage: `url(${bgImg})`}}>
        <div className='min-h-screen flex items-center justify-start pl-11 text-white bg-black bg-opacity-60'>
            <div className='space-y-4'>
                
                <h1 className='md:text-7xl text-4xl font-bold'>Dive into winning waters</h1>
                <div className='md:w-1/2'>
                    <p>Embark on a transformative aquatic adventure with our unrivaled water polo training regimen. From refining fundamentals to mastering advanced techniques, our coaching staff is committed to guiding you towards victory with unparalleled dedication and expertise</p>
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

export default Hero2
