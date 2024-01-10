import React from 'react'

import appStore from '../../assets/icons/buttons/app-store.svg'
import googlePlay from '../../assets/icons/buttons/google-play.svg'
import heroCar from '../../assets/images/hero/car.svg'

import { motion, } from 'framer-motion'
import { fadeIn } from '../../variants'

const Home = () => {
  return (
    <section className='drop-shadow-md flex items-center' id='home'>
      <div className=' sec container mx-auto'>
        <div
          className='flex flex-col justify-center items-center h-full w-full
        md:flex-row md:justify-start'>

          <div className=' p-1 text-center'>

            <motion.h1
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeIn('down', 0.2)}
              className=' md:text-[40px] md:font-extrabold
              lg:text-[50px]'>Explore the Finest
              <span className=' text-red-800'> Global</span> Offers
            </motion.h1>

            <motion.p
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeIn('down', 0.4)}
              className='description my-2
            lg:my-8'>Find Your Ideal Ride for any adventure with our divers
              range of affordable and depandable car rentals
            </motion.p>

            <motion.div
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              variants={fadeIn('down', 0.6)}
              className=' flex gap-x-3 justify-center'>
              <button className='btnSm'>
                <img
                  src={appStore}
                  width={110}
                  height={20}
                  alt="ima" />
              </button>

              <button className='btnSm'>
                <img
                  src={googlePlay}
                  width={110}
                  height={20}
                  alt="ima" />
              </button>
            </motion.div>

          </div>

          <motion.div
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            variants={fadeIn('up', 0.6)}
            className='relative
              max-h-[70vh] max-w-[50vh]
              lg:max-h-[80vh] lg:max-w-[60vh]
              xl:max-h-[100vh] xl:max-w-[80vh]'>
            <img
              src={heroCar}
              style={{ objectFit: "contain" }}
              alt="" />
          </motion.div>

        </div>
      </div>

    </section>
  )
}

export default Home