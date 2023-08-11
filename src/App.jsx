import { useEffect, useState } from "react";

import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Tours from './components/Tours'
import About from './components/About'
import Sust from './components/Sust'
import Map from './components/Map'
import Footer from './components/Footer'
import Experience from './components/Experience'

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(()=>{
    const handleScroll = () => {
     if(window.scrollY === 0){
       setIsTopOfPage(true);
     }
     else if (window.scrollY !== 0) {
       setIsTopOfPage(false);
     }
    }
     window.addEventListener("scroll",handleScroll );
     return ()=> window.removeEventListener("scroll",handleScroll)
   },[])

  return (
    <div className="">
        <Nav
          isTopOfPage= {isTopOfPage}   
        />
        <Hero/>
        <Tours/>
        <Map/>
        <Sust/>
        <Experience/>
        <Footer/>
    </div>
  )
}

export default App
