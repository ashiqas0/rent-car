import React, { useState } from 'react'

import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  const closeNavbar = () => {
    setIsOpen(false);
  };


  return (
    <nav className=' bg-primary w-full h-[4rem] mx-auto flex items-center justify-center sticky top-0 z-[20]'>
      <div className=' container flex h-full w-full items-center justify-between px-6'>

        <div>
          C. Name
        </div>

        <div>
          <p className=' hidden sm:flex md:hidden lg:hidden xl:hidden'>S</p>
          <p className=' hidden sm:hidden md:flex lg:hidden xl:hidden'>M</p>
          <p className=' hidden sm:hidden md:hidden lg:flex xl:hidden'>L</p>
          <p className=' hidden sm:hidden md:hidden lg:hidden xl:flex'>XL</p>
        </div>

        <div>
      
            <div className=' hidden sm:flex space-x-5 font-medium'>
              <p to='/'>Home</p>
              <p to='/about'>About</p>
            </div>
      
        </div>

        <div className='sm:hidden'>
          <button className=' text-lg ' onClick={toggleNavbar}>
            {isOpen ? <IoMdClose className='flex items-end justify-end' /> : <IoMdMenu />}
          </button>

          {
            isOpen && (
              <div>
         
                  <div className='flex flex-col bg-gray-400 items-center justify-center gap-y-3
                    b h-32 w-full absolute top-10 left-0 right-0 '>
                    <p onClick={closeNavbar} to='/'>Home</p>
                    <p onClick={closeNavbar} to='/about'>About</p>
                  </div>
             
              </div>
            )}

        </div>
      </div>
    </nav>
  )
}

export default Navbar
