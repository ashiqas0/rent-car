import React from 'react'
import Brands from '../Brands/Brands'
import CarSlider from '../CarSlider/CarSlider'

const Cars = () => {
  return (

    <section className='drop-shadow-sm flex items-center' id='cars'>
      <div className='sec container mx-auto'>

        <div className='flex flex-col justify-center items-center h-full w-full'>
          <Brands />
          <CarSlider />
        </div>


      </div>
    </section>
  )

}

export default Cars