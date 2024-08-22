import React, { useState } from 'react'

import bgImage from '../assets/images/mainImages/car-track-bg.jpg'

import CarDetails from '../assets/data/CarDetails'

const ProductPage = () => {
    const [product, setProduct] = useState(CarDetails)

    const filterProducts = (product) => {
        const update = CarDetails.filter((cars) => {
            return cars.brandName === product;
        })

        setProduct(update)
    }

    const allProducts = () => {
        setProduct(CarDetails);
    }

    return (
        <section className=' relative flex items-center justify-center'>
            <img className=' bg-cover bg-center w-full h-full absolute top-0 bottom-0  brightness-[0.3]' src={bgImage} alt="themeImage" />
            <div className='container flex-col p-4 h-full w-full z-10'>
                <div className='flex flex-col w-full h-full items-center justify-center space-y-4 pb-5'>
                    <h2 className=' text-center'>CONNECT WITH CARS</h2>
                    <div className=' space-x-7 flex flex-wrap items-center justify-center font-bold'>

                        <span className=' cursor-pointer' onClick={() => allProducts()} >ALL</span>
                        <span className=' cursor-pointer' onClick={() => filterProducts("Toyota")} >TOYOTA</span>
                        <span className=' cursor-pointer' onClick={() => filterProducts("Mitsubishi")} >MITSUBISHI</span>
                        <span className=' cursor-pointer' onClick={() => filterProducts("Nissan")} >NISSAN</span>
                        <span className=' cursor-pointer' onClick={() => filterProducts("Jac")} >JAC</span>
                        <span className=' cursor-pointer' onClick={() => filterProducts("Renault")} >RENAULT</span>

                    </div>
                </div>

                <div className='flex flex-wrap items-center justify-center rounded-tl-md rounded-tr-md bg-primary py-9 rounded-br-[80px]'>
                    {
                        product.map((item, index) => (
                            <div
                                key={index}
                                className='w-[280px] h-[285px] bg-gray-600 m-4 rounded-md sm:min-w-48 md:min-w-[280px] lg:min-w-[320px]'
                            >
                                <div className='b'>
                                    <img src={item.imgUrl} alt="" width={192} height={260} className='rounded-md w-full h-52' />
                                </div>

                                <div className=' flex items-center justify-between mt-2 mx-3'>

                                    <div>
                                        <h3 className=' text-white font-semibold text-lg cursor-pointer'>
                                            {item.brandName}
                                        </h3>
                                        <span className=' font-semibold capitalize'>{item.carName}</span>
                                    </div>


                                    <div className=' flex justify-between px-2'>
                                        <span className='text-lg text-orange-400'>{item.color}</span>
                                        <span className='text-lg text-orange-400'>{item.Year}</span>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductPage