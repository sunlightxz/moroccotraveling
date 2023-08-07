import React from 'react';
import { useSpring, animated } from 'react-spring';
import hero from '../assets/hero.png';

const Tours = () => {
  const toursRef = React.useRef();
  return (
    <div className='h-full mx-auto w-11/12  flex py-6'  ref={toursRef}>
      <div className="flex justify-between items-center">
        <div className="">
          
          <p>Morocco, a captivating North African gem, blends ancient 
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

export default Tours