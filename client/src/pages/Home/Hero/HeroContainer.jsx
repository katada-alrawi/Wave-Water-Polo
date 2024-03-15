import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import Hero from './Hero';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import Hero4 from './Hero4';

export default () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1} // Set slidesPerView to 1 to display one slide at a time
      effect={"creative"}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Hero /></SwiperSlide>
      <SwiperSlide><Hero2 /></SwiperSlide>
      <SwiperSlide><Hero3 /></SwiperSlide>
      <SwiperSlide><Hero4 /></SwiperSlide>
    </Swiper>
  );
};



// function HeroContainer() {
//   return (
//     <section>
//         <Swiper  
//         grabCursor={true}
//         effect={"creative"}
//         creativeEffect={{
//             prev:{
//                 shadow: true,
//                 translate:["-120%", 0, -500]
//             },
//             next:{
//                 shadow: true,
//                 translate:["-120%", 0, -500]
//             },
//         }}
//         modules={[EffectCreative]}
//         className='mySwiper5'
//         loop={true}
//         autoplay={
//             {
//                 delay: 250,
//                 disableOnInteraction: false,
//             }
//         }>
//             <SwiperSlide>
//                 <Hero/>
//             </SwiperSlide>
//         </Swiper>
//         <Swiper>
//             <SwiperSlide>
//                 <Hero2/>
//             </SwiperSlide>
//         </Swiper>

//     </section>
//   )
// }

// export default HeroContainer;
