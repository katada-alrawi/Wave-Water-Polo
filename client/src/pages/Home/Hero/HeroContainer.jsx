import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative'
import {EffectCreative} from 'swiper'
import Hero from './Hero';
import Hero2 from './Hero2';

function HeroContainer() {
  return (
    <section>
        <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
            prev:{
                shadow: true,
                translate:["-120%", 0, -500]
            },
            next:{
                shadow: true,
                translate:["-120%", 0, -500]
            },
        }}
        modules={[EffectCreative]}
        className='mySwiper5'
        loop={true}
        autoplay={
            {
                delay: 250,
                disableOnInteraction: false,
            }
        }
        >
            <SwiperSlide>

                <Hero/>
            </SwiperSlide>
        </Swiper>
        <Swiper>
            <SwiperSlide>
                <Hero2/>
            </SwiperSlide>
        </Swiper>

    </section>
  )
}

export default HeroContainer

// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

 
// import 'swiper/css';

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide><Hero /> </SwiperSlide>
//       <SwiperSlide><Hero2 /></SwiperSlide>
      
      
//     </Swiper>
//   );Import Swiper styles
// };