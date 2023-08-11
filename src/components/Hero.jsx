import React from 'react';
import { useSpring, animated } from 'react-spring';
import bgvideo from '../assets/bgvideo1.mp4';
import About from './About';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const toursRef = React.useRef();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const toursTop = toursRef.current ? toursRef.current.offsetTop : 0;
  const heroHeight = 0; // Change this value based on your Hero component height

  // Parallax animation for translateY
  const parallaxProps = useSpring({
    transform: `translate3d(0, ${scrollPosition * 0.6}px, 0)`,
    config: { tension: 180, friction: 20 },
  });

  // Opacity animation for the text
  const opacityProps = useSpring({
    opacity: scrollPosition >= toursTop - heroHeight ? 0 : 1, // Adjust the opacity value as needed
    config: { tension: 180, friction: 20 },
  });

  // Text 

  return (
    <div className=''>
      <div className='w-full h-[100vh] relative'>
        <video src={bgvideo} className="absolute top-0 left-0 object-cover w-full h-full z-0" muted loop autoPlay></video>

        <div className='h-full mx-auto w-11/12  flex '>
          <div className='flex justify-between w-full items-end pb-20'>
            <animated.h1 style={{ ...parallaxProps, ...opacityProps }} className='text-8xl text text-white tracking-wide font-forum z-10 '>
              DO IT <br /> <span className='text-main'>THE <br /> MOROCCAN</span> <br /> WAY.
            </animated.h1>
            <div className='z-10 '>
              <span className='text-white scroll font-forum'>scroll down</span>
            </div>
          </div>
        </div>
      </div>
      <div ref={toursRef} className='tours-section'>
        <About />
      </div>
    </div>
  );
};

export default Hero;