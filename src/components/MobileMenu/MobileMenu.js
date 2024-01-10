import React from 'react'

import { Link } from 'react-scroll'

const MobileMenu = ({ isMenuOpen }) => {

    const navItems = [
        { link: "Home", path: "home" },
        { link: "About", path: "about" },
        { link: "Cars", path: "cars" },
        { link: "Contact", path: "contact" },
    ]

    return (

        <nav>
            <ul className=
                {`b flex flex-col space-y-4 py-24 items-center backdrop-blur-sm
                        ${isMenuOpen
                        ? " block fixed top-0 right-0 left-0"
                        : "hidden"
                    }`}>
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

export default MobileMenu