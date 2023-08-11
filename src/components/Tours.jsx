import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import { Pagination } from 'swiper/modules';


const Tours = () => {
  const toursRef = React.useRef();
  return (
    <div className='h-full w-full py-6'ref={toursRef}>
        <div className="flex justify-center items-center mx-auto">
            <h1 className='font-forum text-[70px] mb-4'>Tours</h1>
        </div>
        <div className="flex h-full justify-between gap-24 ">
          <div className="items-center my-auto mr-10">
            <p className='text-[24px]'><span className='text-[92px]'>1</span>/3</p>
          </div>
          <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
            type: 'fraction',

          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />  
          </SwiperSlide>  
          <SwiperSlide>
            <img src={slide2} alt="" />  
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />  
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} alt="" />  
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />  
          </SwiperSlide>  
        </Swiper>
        </div>
    </div>
  )
}

export default Tours