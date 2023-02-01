import React from 'react';
import { offerGrid } from '../constants';

const Offer = () => {
  return (
    <section className="bg-white dark:bg-gray-900 rounded mt-10">
        <div className="pt-8 lg:pt-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">We Offer You</h2>
            <p className="mb-4 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">We provide you quality service in very affordable fee</p>
        </div>
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-1 rounded'>
            {
                offerGrid.map((offer) => (
                        <div key={offer.id} className='flex flex-1 justify-center items-center flex-col sm:px-20 px-2 sm:py-10 py-5 border rounded bg-[#acddde]'>
                            <img src={`../assets/${offer.svg}`} alt='name' className='flex sm:w-[800px] w-[400px] sm:h-[80px] h-[40px] justify-center'/>
                            <h6 className="font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[53px] leading-[40px] text-white">{offer.title}</h6>
                            <p className="font-poppins font-normal xs:text-[16px] text-[10px] xs:leading-[26px] leading-[21px] text-gradient">{offer.text}</p>
                        </div>
                    )
                )
            }
        </div>
        <div className='flex flex-1 items-center justify-center pt-10 pb-5'>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Know More</button>
        </div>
    </section>
  );
}

export default Offer;