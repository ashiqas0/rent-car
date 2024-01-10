import React, { useState } from 'react'

import Navbar from '../Navbar/Navbar'
import ToggleBtn from '../ToggleBtn/ToggleBtn'

import { Link } from 'react-router-dom'
import { FaXmark, FaBars } from 'react-icons/fa6'
import MobileMenu from '../MobileMenu/MobileMenu'

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
    
    <div className='header bg-white w-full mx-auto fixed top-0 left-0 right-0 drop-shadow-xl'>
      <div className='flex mx-auto items-center justify-between container text-primary font-semibold'>

        <div className=''>
          <Link
            className=' flex flex-col p-2 items-center leading-3'
            to='/'>
            <p className='font-extrabold text-red-900 text-lg tracking-widest'>Thasneem</p>
            <span className=' text-xs'>Rent A Car</span>
          </Link>
        </div>

        <div className=' hidden sm:flex items-center px-2 gap-x-4 py-3'>
          <Navbar />
        </div>

        <div className=' p-2 flex space-x-3 items-center'>

          <div className=''>
            <ToggleBtn />
          </div>

          <div className=' sm:hidden mx-auto'>
            <button
              className=' text-white focus:outline-none focus:text-gray-300'
              onClick={toggleMenu}
            >
              {
                isMenuOpen
                  ? (<FaXmark className=' w-5 h-5 text-primary' />)
                  : (<FaBars className=' w-5 h-5 text-primary' />)
              }
            </button>
          </div>

        </div>


      </div>
    </div>

    <div className=' flex flex-col'>
     <MobileMenu isMenuOpen={isMenuOpen}/>
    </div>

    </>

  )
}

export default Header