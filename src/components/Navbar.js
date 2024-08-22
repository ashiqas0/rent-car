import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
        <div className='flex flex-col text-gray-400 items-center justify-center leading-[1px]'>
          <span className=' text-lg font-medium'>THASNEEM</span>
          <span className=' text-xs'>Rent A Car</span>
        </div>

        <div className=' hidden sm:flex space-x-5 font-medium'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>

        <div className='sm:hidden'>
          <button className=' text-lg ' onClick={toggleNavbar}>
            {isOpen ? <IoMdClose className='flex items-end justify-end' /> : <IoMdMenu />}
          </button>

          {isOpen && (
            <div className='flex flex-col bg-gray-400 items-center justify-center gap-y-3 h-32 w-full absolute top-10 left-0 right-0 '>
              <NavLink onClick={closeNavbar} to='/'>Home</NavLink>
              <NavLink onClick={closeNavbar} to='/about'>About</NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
