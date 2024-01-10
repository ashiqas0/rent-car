import React from 'react';

import vwCar from '../../assets/icons/brands/vw.svg';
import fordCar from '../../assets/icons/brands/ford.svg';
import skodaCar from '../../assets/icons/brands/skoda.svg';
import mercedesCar from '../../assets/icons/brands/mercedes.svg';
import mazdaCar from '../../assets/icons/brands/mazda.svg';
import bmwCar from '../../assets/icons/brands/bmw.svg';
import audiCar from '../../assets/icons/brands/audi.svg';

const brandImages = [vwCar, fordCar, bmwCar, skodaCar, mercedesCar, mazdaCar, audiCar];

const Brands = () => {
    return (
        <div className='items-center flex mb-6'>
            <div className=' mx-auto '>
                <div className='grid grid-cols-4 items-center justify-center place-items-center gap-6 
                    md:grid-cols-5
                    lg:grid-cols-6
                    xl:grid-cols-7'>
                    {
                        brandImages.map((brand, index) => (
                            <div key={index}>
                                <img
                                    className=''
                                    width={90}
                                    height={40}
                                    src={brand}
                                    alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Brands;
