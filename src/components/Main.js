import React from 'react'

import car1 from '../assets/images/mainImages/car-vertical-1.jpg'
import car2 from '../assets/images/mainImages/car-vertical-2.jpg'
import car3 from '../assets/images/mainImages/car-vertical-3.jpg'

const Main = () => {
  return (
    <section className=' bg-primary items-center justify-center mx-auto rounded-md'>
      <div className=' flex h-full w-full items-center justify-center p-12'>

        <div className='space-y-10 w-[410px] lg:w-[380px] xxl:w-[450px] xxl:ps-10'>
          <div className=' space-y-5'>
            <h1 className=' leading-[42px]'>THE BEST <span className=' text-red-700'>CAR DEALER</span> IN YOUR DREAM</h1>
            <h3 className=' text-lg leading-6'>Our rent-a-car website offers a wide selection of vehicles to suit every travel need and budget.
              With easy booking and competitive rates, renting a car has never been more convenient.
              Explore new destinations with confidence and comfort by choosing from our reliable fleet of cars.</h3>
          </div>
          <div className=''>
            <button className='btn bg-blue-900 '>ABOUT US</button>
          </div>

        </div>

        <div className='hidden lg:flex grow items-center justify-center space-x-8'>
          <img src={car1} alt="car1" className=' lg:w-[125px] xl:w-[190px] lg:h-[240px] xl:h-[300px] -skew-x-[24deg]' />
          <img src={car2} alt="car2" className=' lg:w-[125px] xl:w-[190px] lg:h-[300px] xl:h-[360px] -skew-x-[24deg]' />
          <img src={car3} alt="car3" className=' lg:w-[125px] xl:w-[190px] lg:h-[240px] xl:h-[300px] -skew-x-[24deg]' />
        </div>

      </div>

    </section>
  )
}

export default Main