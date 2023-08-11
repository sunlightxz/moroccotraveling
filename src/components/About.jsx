import React from 'react';
import { useSpring, animated } from 'react-spring';
import hero from '../assets/hero.png';

const About = () => {
  const toursRef = React.useRef();
  return (
    <div className='h-full mx-auto w-11/12  flex py-6'  ref={toursRef}>
      <div className="flex justify-between items-center h-full ">
        <div className="pl-4 py-5 pr-28 w-1/2 mt-7 ">
          <h1  className='text-8xl text tracking-wide font-forum z-10  mb-10'>
              {/*flex justify-end items-center */}
              DO IT <br /> <span className='text-main'>THE <br /> MOROCCAN</span> <br /> WAY.
            </h1>
          <p className='mb-7'>Morocco, a captivating North African gem, blends ancient 
              traditions with modern allure. Its diverse landscapes span
              from the majestic Atlas Mountains to the golden Sahara 
              Desert, attracting adventurous souls. Bustling souks offer a 
              kaleidoscope of colors,scents, and handicrafts, while historic
              cities like Marrakech and Fez boast breathtaking architecture. 
              Experience the warm hospitality,and immerse yourself in the 
              rhythmic beats of Moroccan music.
            </p>
            <p>
            Whether wandering through blue-hued Chefchaouen 
            or surfing the Atlantic waves in Essaouira, Morocco leaves an
            indelible mark on every traveler's heart.       
            </p>
        </div>
        <img src={hero} alt="" />
      </div>
      <div className="text-target" />

    </div>
  )
}

export default About