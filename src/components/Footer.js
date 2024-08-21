import React from 'react'

import mobileIcon from '../assets/images/mainImages/mobileIcon.png'
import mailIcon from '../assets/images/mainImages/mailIcon.png'
import whatsappIcon from '../assets/images/mainImages/whatsapicon.png'
import facebookIcon from '../assets/images/mainImages/facebookIcon.png'
import instagramIcon from '../assets/images/mainImages/instagramIcon.png'

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
              <p className='xl:text-lg font-medium'>shop no 11, <br /> Hamdoun building near Mussaffah Bus Station, <br /> Bustan, <br /> Ajman, U.A.E </p>
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
                  <span className='xl:text-lg font-medium'>{item.name}</span>
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
          <h1>LOgo</h1>
        </div>

        <div className='md:w-1/2 flex items-center justify-center'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15679.69560932279!2d76.02758545!3d10.74034835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721492758040!5m2!1sen!2sin"
            width="300" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        </div>
      </div>


    </section>
  )
}

export default Footer