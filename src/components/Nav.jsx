import React, { useState } from 'react'
import logo from '../assets/logo.png'
import logo1 from '../assets/blacklogo.png'
import useMediaQuery from '../hooks/useMediaQuery'
import{Bars3Icon ,XMarkIcon} from '@heroicons/react/24/solid'


const Nav = ({isTopOfPage}) => {

    const isAboveScreen = useMediaQuery("(min-width: 1060px)")
    const navbarBg = isTopOfPage ? "text-white" : "bg-white text-black";
    const [menuToglled,setMenuToglled] = useState(false)
  return (
    <div className={`${navbarBg}  py-6 flex justify-between items-center fixed top-0 z-30 w-full`}>
        <div className="mx-auto w-5/6 flex justify-between items-center gap-16">
           {isTopOfPage ?
             <img src={logo} alt="logo" />
             :
             <img src={logo1} alt="logo1" />

           }
           

           {isAboveScreen ?
            (
                <div className="flex justify-end items-center gap-14 w-full  font-forum text-xl ">
                    <div className="flex justify-between items-center gap-9 text-md ">
                        <p className='hover:text-main cursor-pointer'>Experiences</p>
                        <p className='hover:text-main cursor-pointer'>Tours</p>
                        <p className='hover:text-main cursor-pointer'>Need to know</p>
                        <p className='hover:text-main cursor-pointer'>About</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className='hover:text-main cursor-pointer'>Call Us</p>
                    </div>
                </div>
            ): (
                <button 
                    className="rounded-full bg-secondary-500 p-2"
                    onClick={()=>setMenuToglled(!menuToglled)}
                >
                    <Bars3Icon className={`h-7 w-7 ${isTopOfPage ? 'text-white' : 'text-black'}`}/>
                </button>
            )
           }
        </div>
    </div>
  )
}

export default Nav