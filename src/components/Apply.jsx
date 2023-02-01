import React, { useRef } from 'react';

const Apply = () => {
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
    <section className="bg-white dark:bg-gray-900 rounded mt-20">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <p className="mb-8 lg:mb-16 text-center text-gray-500 font-bold dark:text-gray-400 sm:text-xl">ONLINE APPLICATION FORM</p>
            <form ref={form} className="space-y-8" onSubmit={sendEmail}>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full sm:w-1/2 px-3 mb-6 md:mb-0'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
                        <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your name"  />
                    </div>
                    <div className='w-full sm:w-1/4 px-3 mb-6 md:mb-0'>
                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sex</label>
                        <input type="text" id="gender" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Male or Female"  />
                    </div>
                    <div className='w-full sm:w-1/4 px-3 mb-6 md:mb-0'>
                        <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date of Birth</label>
                        <input type="text" id="dob" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="YYYY-MM-DD"  onFocus={(e) => e.target.type ='date'} onBlur={(e) => e.target.type='text'} />
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full sm:w-1/2 px-3 mb-6 md:mb-0'>
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                        <input type="text" id="address" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your address"  />
                    </div>
                    <div className='w-full sm:w-1/2 px-3 mb-6 md:mb-0'>
                        <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cell Number</label>
                        <input type="tel" id="mobile" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your mobile number"  />
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full sm:w-1/2 px-3 mb-6 md:mb-0'>
                        <label htmlFor="alt-mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Alternate Cell Number</label>
                        <input type="tel" id="alt-mobile" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your alternate mobile number"  />
                    </div>
                    <div className='w-full sm:w-1/2 px-3 mb-6 md:mb-0'>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input type="email" id="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your email address"  />
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full sm:w-1/2 px-3 mb-6 md:mb-0'>
                        <label htmlFor="qualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Qualification</label>
                        <input type="text" id="qualification" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your Qualification"  />
                    </div>
                    <div className='w-full sm:w-1/2 px-3 mb-6 md:mb-0'>
                        <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Applying For</label>
                        <select name="course" id="course" className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'>
                            <option value="">--</option>
                            <option value="NAT">NAT</option>
                            <option value="JLPT">JLPT</option>
                            <option value="TOP-J">TOP-J</option>
                            <option value="Japanese">Japanese</option>
                        </select>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Additional Information or Query"></textarea>
                </div>
                <div className='flex flex-1 items-center justify-center'>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">APPLY NOW</button>
                </div>
            </form>
        </div>
    </section>
  );
}

export default Apply