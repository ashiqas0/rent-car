import React from 'react'

import { Link } from 'react-scroll'

const Navbar = () => {

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Cars", path: "cars" },
    { link: "Contact", path: "contact" },
  ]

  return (

    <nav>
      <ul className=' flex space-x-4'>
        {
          navItems.map(({ link, path }) =>
            <Link
              to={path}
              key={link}
              className=' block hover:text-gray-300 cursor-pointer'
            >
              {link}
            </Link>
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar