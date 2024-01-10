import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import car01 from '../../assets/images/carSlider/car01.svg'
import car02 from '../../assets/images/carSlider/car02.svg'
import car03 from '../../assets/images/carSlider/car03.svg'

import gearshift from '../../assets/icons/carSlider/gearshift.svg'
import seat from '../../assets/icons/carSlider/seat.svg'
import gas from '../../assets/icons/carSlider/gas.svg'
import engine from '../../assets/icons/carSlider/engine.svg'
import wheel from '../../assets/icons/carSlider/wheel.svg'

const cars = [
    {
        type: 'Hatchback',
        name: 'Ford Focus',
        price: '25,000',
        stars: '3.5',
        image: car01,
        info: [
            {
                icon: gearshift,
                text: 'manuel'
            },
            {
                icon: seat,
                text: '5 Seats'
            },
            {
                icon: gas,
                text: 'Gas'
            },
            {
                icon: engine,
                text: '1600 hp'
            },
            {
                icon: wheel,
                text: 'Front'
            },
        ]
    },
    {
        type: 'Sadan',
        name: 'Toyota Corolla',
        price: '28,000',
        stars: '4.0',
        image: car02,
        info: [
            {
                icon: gearshift,
                text: 'manuel'
            },
            {
                icon: seat,
                text: '5 Seats'
            },
            {
                icon: gas,
                text: 'Gas'
            },
            {
                icon: engine,
                text: '1600 hp'
            },
            {
                icon: wheel,
                text: 'Front'
            },

        ]
    },
    {
        type: 'SUV',
        name: 'Honda CR-V',
        price: '35,000',
        stars: '5.0',
        image: car03,
        info: [
            {
                icon: gearshift,
                text: 'manuel'
            },
            {
                icon: seat,
                text: '5 Seats'
            },
            {
                icon: gas,
                text: 'Gas'
            },
            {
                icon: engine,
                text: '1600 hp'
            },
            {
                icon: wheel,
                text: 'Front'
            },

        ]
    },
    {
        type: 'Convertable',
        name: 'Maxda MX-5',
        price: '28,000',
        stars: '4.0',
        image: car02,
        info: [
            {
                icon: gearshift,
                text: 'manuel'
            },
            {
                icon: seat,
                text: '5 Seats'
            },
            {
                icon: gas,
                text: 'Gas'
            },
            {
                icon: engine,
                text: '1600 hp'
            },
            {
                icon: wheel,
                text: 'Front'
            },

        ]
    },
]

const CarSlider = () => {
    return (
        <div className='container'>
            <Swiper
                className=''
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 15 },
                    640: { slidesPerView: 2, spaceBetween: 32 },
                    1260: { slidesPerView: 3, spaceBetween: 32 },
                }}>
                {
                    cars.map((car, index) => {
                        return (
                            <SwiperSlide
                                className='flex'
                                key={index}>

                                <div className=' max-w-[350px] h-[420px] bg-gray-300 mx-auto p-2 rounded-lg'>
                                    <img
                                        src={car.image}
                                        width={280}
                                        height={240}
                                        alt="" />

                                    <div className='flex justify-between mb-3'>
                                        <div className=' uppercase'>
                                            <h3 className=' text-secondary text-[13px]'>{car.type}</h3>
                                            <h3 className=' text-lg font-bold'>{car.name}</h3>
                                            <h3 className=' font-semibold text-red-700'>{car.price}</h3>
                                        </div>
                                        <div>stars</div>
                                    </div>

                                    <div className='flex gap-x-2 mb-2'>
                                        {car.info.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center">
                                                <div className=' bg-primary p-2 rounded-full items-center justify-center'>
                                                    <img
                                                        src={item.icon}
                                                        width={18}
                                                        height={18}
                                                        alt="" />
                                                </div>
                                                <div className="uppercase font-medium text-xs">
                                                    {item.text}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button className='btnMd items-center w-full'>See Details</button>

                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default CarSlider