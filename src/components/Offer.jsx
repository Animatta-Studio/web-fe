import React from 'react';
import { Link } from 'react-router-dom';
import { offerGrid } from '../constants';

const Offer = () => {
  return (
    <section className="bg-primary-0 rounded mt-10">
        <div className="pt-8 lg:pt-16 px-4 mx-auto max-w-screen-md">
            <h2 className="font-poppins mb-4 text-4xl tracking-tight font-extrabold text-center text-white">We Offer You</h2>
            <hr className='w-40 mx-auto h-1 bg-[#0087E0] mb-10 rounded' />
            <p className="mb-4 lg:mb-8 font-bold text-center text-gray-500 dark:text-gray-400 sm:text-xl">We provide you quality service in very affordable fee</p>
        </div>
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-2 rounded group'>
            {
                offerGrid.map((offer) => (
                        <div key={offer.id} className='bg-white/10 flex flex-1 justify-center items-center text-center flex-col sm:px-10 px-2 sm:py-10 py-5 rounded duration-500 group-hover:blur-[1px] hover:!blur-none group-hover:scale-[0.85] hover:!scale-100'>
                            <div className='bg-gray-400 rounded-full'>
                                <img src={offer.img} alt='name' className='flex sm:w-[100px] w-[40px] sm:h-[100px] h-[40px] justify-center bg-[#64C0FF] rounded-full p-3'/>
                            </div>
                            <h6 className="font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[53px] leading-[40px] text-white">{offer.title}</h6>
                            <p className="font-poppins font-normal xs:text-[16px] text-[10px] xs:leading-[26px] leading-[21px] text-gradient">{offer.text}</p>
                        </div>
                    )
                )
            }
        </div>
        <div className='flex flex-1 items-center justify-center pt-10 pb-5'>
            <button type="submit" className="font-poppins py-3 px-8 text-sm text-[20px] text-extrabold text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <Link to='/courses'>
                    Know More
                </Link>
            </button>
        </div>
    </section>
  );
}

export default Offer;