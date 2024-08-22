import React from 'react'

import mobileIcon from '../assets/images/mainImages/mobileIcon.png'
import mailIcon from '../assets/images/mainImages/mailIcon.png'
import whatsappIcon from '../assets/images/mainImages/whatsapicon.png'
import facebookIcon from '../assets/images/mainImages/facebookIcon.png'
import instagramIcon from '../assets/images/mainImages/instagramIcon.png'

import logoImg from "../assets/images/mainImages/THASNEEM123_page-0001.jpg"

const Footer = () => {

  const socialLinkInfo = [
    {
      icon: mobileIcon,
      name: '06731 5006, 056-5012800',
    },
    {
      icon: mailIcon,
      name: 'jafer@thasneemrentacar.com',
    },
    {
      icon: whatsappIcon,
      name: 'Whatsapp',
    },
    {
      icon: facebookIcon,
      name: 'Facebook'
    },
    {
      icon: instagramIcon,
      name: 'Instagram'
    },

  ]

  return (
    <section className='container bg-primary flex flex-col p-6'>

      <div className=' md:flex md:w-full md:h-full md:items-start md:justify-center md:ms-6 md:mt-6'>
        <div className=' mb-4 md:mb-0 w-1/2'>
          <h3 className=' md:hidden'>Thasneem Rent A Car</h3>

          <div className=' mb-6 mt-3'>
            <h4 className=' xl:text-4xl xl:font-bold'>Address</h4>
            <div className=' flex w-full h-full mb-8'>
              <span className=' w-[60px] h-[1px] bg-white xl:w-[135px]'></span>
            </div>
            <div className=' flex w-full h-full xl:w-[390px]'>
              <p className='xl:text-lg font-medium'>shop no 11, <br /> Hamdoun building near Mussaffah Bus Station, <br /> Bustan, <br /> Ajman, U.A.E <br />055 9475837 </p>
            </div>


          </div>
          <div className=' flex w-full h-full items-center justify-center mb-3  md:hidden'>
            <span className=' w-[360px] h-[1px] bg-gray-500'></span>
          </div>

        </div>

        <div className=' mb-7 md:mb-0 w-1/2'>
          <h4 className=' xl:text-4xl xl:font-bold'>Conect With Us</h4>
          <div className=' flex w-full h-full mb-10'>
            <span className=' w-[112px] h-[1px] bg-white xl:w-[260px]'></span>
          </div>

          <div className='mb-5'>
            {
              socialLinkInfo.map((item, index) => (
                <div className='flex items-center justify-start mb-3 space-x-2 cursor-pointer' key={index}>
                  <img src={item.icon} alt={item.name} height={26} width={26} className=' rounded-full' />
                  <span className='xl:text-lg font-medium sm:break-before-auto'>{item.name}</span>
                  
                </div>
              ))
            }
          </div>
          <div className=' flex w-full h-full items-center justify-center mb-3 md:hidden'>
            <span className=' w-[360px] h-[1px] bg-gray-500'></span>
          </div>

        </div>
      </div>

      <div className='md:flex w-full h-full items-center justify-center mb-10'>
        <span className=' w-[460px] h-[1px] bg-gray-500'></span>
      </div>

      <div className=' md:flex md:w-full md:h-full md:items-center md:justify-center '>
        <div className='hidden md:w-1/2 md:flex md:items-center md:justify-center ' >
          <img className=' w-[210px] h-[140px] rounded-xl' src={logoImg} alt="" />
        </div>

        <div className='md:w-1/2 flex items-center justify-center'>
          <iframe src="https://www.google.com/maps/place/Thasneem+Rent+A+Car/@25.4104378,55.4470197,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f57ccb1ef9b05:0x3fa9dfd6a8f5f0c5!8m2!3d25.4104378!4d55.4470197!16s%2Fg%2F11vjzshwmz?entry=ttu"
            width="300" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        </div>
      </div>


    </section>
  )
}

export default Footer