import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { contacts, SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../constants';
import { Top } from '../components';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            alert("Email sent successfully");
        }, (error) => {
            console.log(error.text);
            alert("Something went wrong.");
        });
        e.target.reset();
    };

  return (
    <section className="bg-white dark:bg-gray-900 mt-20">
        <Top image='https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg' text='Contact Us' />
        <div className='flex flex-1 justify-start items-center sm:flex-row flex-col-reverse'>
            <div className='sm:w-1/2 w-full grid grid-cols-2 gap-1 rounded'>
                {contacts.map(contact => (
                    <div key={contact.id} className='flex flex-1 flex-col justify-center items-center sm:px-20 px-8 sm:py-10 py-4 rounded'>
                        <img src={contact.img} alt='icon' className='flex sm:w-[80px] w-[40px] justify-center' />
                        <h6 className='text-gray-500'>{contact.title}</h6>
                        <p className="flex flex-1 font-poppins font-normal text-center items-center justify-center sm:text-[14px] text-[10px] xs:leading-[26px] leading-[21px] text-gradient">
                            {contact.data}
                        </p>
                    </div>
                ))}
            </div>
            <div className={`sm:flex hidden bg-white w-[1px] h-[500px] mr-5`}></div>
            <div className="sm:w-1/2 w-full py-2 lg:py-16 px-4 sm:mx-auto mx-0 max-w-screen-md items-start justify-start rounded">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Send Us A Message</h2>
                <form ref={form} className="space-y-8" onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" name='email' id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="student@gmail.com" required />
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                        <input type="text" name='name' id="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" name='message' rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <div className='flex flex-1 items-center justify-center'>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </div>
                </form>
            </div>
        </div>
        <div className='flex flex-1 mt-10 mb-10 m-2 justify-center flex-col items-center'>
            <iframe className='h-[450px] w-full p-2 border-2' src="https://maps.google.com/maps?q=durga%20chowk,%20bhaniyawala,%20dehradun,%20uttarakhand,%20india&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="1" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        </div>
    </section>
  )
}

export default Contact;