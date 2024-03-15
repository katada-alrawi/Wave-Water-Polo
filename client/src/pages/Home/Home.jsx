import React from 'react'
import HeroContainer from './Hero/HeroContainer'
import Gallary from './Gallery/Gallery'


function Home() {
  return (
    <div>
      <HeroContainer />
      <div className='max-w-screen-xl mx-auto'>
      <Gallary />
      </div>
    </div>
  )
}


export default Home