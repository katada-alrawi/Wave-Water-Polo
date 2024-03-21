import React from 'react'
import HeroContainer from './Hero/HeroContainer'
import Gallery from './Gallery/Gallery'
import Popular from './popularClasses/Popular'


function Home() {
  return (
    <div>
      <HeroContainer />
      <div className='max-w-screen-xl mx-auto'>
      <Gallery />
      <Popular />
      </div>
    </div>
  )
}


export default Home