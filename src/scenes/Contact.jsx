import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { contacts, SERVICE_ID, QUERY_TEMPLATE_ID, PUBLIC_KEY } from '../constants';
import { Top } from '../components';

const Contact = () => {
    const form = useRef();

    const defaultValues = {
        email: '',
        name: '',
        message: '',
    };

    const validationSchema = yup.object().shape({
        email: yup.string().required('required').email('Invalid Email'),
        name: yup.string().required('required').matches(/^[a-zA-Z\s]+$/, 'Invalid Name'),
        message: yup.string().required('required').min('10', 'Message is too short'),
    });

    const sendEmail = (values, actions) => {
        emailjs.sendForm(SERVICE_ID, QUERY_TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            alert("Email sent successfully");
        }, (error) => {
            console.log(error.text);
            alert("Something went wrong.");
        });
        form.current.reset();
    };

  return (
    <section className="bg-white/10 dark:bg-gray-900 mt-20">
        <Top image='https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg' text='Contact Us' />
        <div className='flex flex-1 justify-start items-center sm:flex-row flex-col-reverse'>
            <div className='sm:w-1/2 w-full grid grid-cols-2 gap-1 rounded pb-10'>
                {contacts.map(contact => (
                    <div key={contact.id} className='flex flex-1 flex-col justify-center items-center sm:px-20 px-8 sm:py-10 py-4 rounded'>
                        <div className='bg-gray-400 p-2 rounded-full'>
                            <img src={contact.img} alt='icon' className='flex sm:w-[100px] sm:h-[100px] h-[40px] w-[40px] justify-center' />
                        </div>
                        <h6 className='text-gray-500'>{contact.title}</h6>
                        <p className="flex flex-1 font-poppins font-normal text-center items-center justify-center sm:text-[14px] text-[10px] xs:leading-[26px] leading-[21px] text-gradient">
                            {contact.data}
                        </p>
                    </div>
                ))}
            </div>
            <div className={`sm:flex hidden bg-gray-400 dark:bg-white w-[1px] h-[550px] mr-5`}></div>
            <div className="sm:w-1/2 w-full py-1 lg:py-16 px-2 sm:mx-auto mx-0 max-w-screen-md items-start justify-start rounded">
                <h2 className="mb-4 sm:text-4xl text-2xl font-poppins tracking-tight font-semibold text-center text-white">Get In Touch With Us</h2>
                <Formik initialValues={defaultValues} validationSchema={validationSchema} onSubmit={sendEmail} >
                    <Form className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
                                <div className='flex flex-row justify-between'>
                                    Your email
                                    <p className='text-[#ff0000] justify-end'>
                                        <ErrorMessage name='email'/>
                                    </p>
                                </div>
                            </label>
                            <Field type="email" name='email' id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your email"/>
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
                                <div className='flex flex-row justify-between'>
                                    Your Name
                                    <p className='text-[#ff0000] justify-end'>
                                        <ErrorMessage name='name'/>
                                    </p>
                                </div>
                            </label>
                            <Field type="text" name='name' id="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your name"/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">
                                <div className='flex flex-row justify-between'>
                                    Your message
                                    <p className='text-[#ff0000] justify-end'>
                                        <ErrorMessage name='message'/>
                                    </p>
                                </div>
                            </label>
                            <Field as='textarea' id="message" name='message' rows="6" className="block p-2.5 w-full text-sm resize-none text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Let us know how can we help you"/>
                        </div>
                        <div className='flex flex-1 items-center justify-center sm:pb-0 pb-10'>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
        <div className='flex justify-center items center text-center group max-w-10xl mx-auto gap-2 hover:z-[1] sm:ml-10 ml-1 sm:mr-10 mr-1'>
            <div key='india-office' className='w-1/2 bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-[1.25] hover:!translate-x-80 group-hover:opacity-0 hover:!opacity-100 hover:!z-[2] sm:p-8 p-2 rounded-xl mix-blend-luminosity cursor-pointer'>
                <h6 className='text-xl bold font-poppins'>Our Office In India</h6>
                <img src='' alt='' className='sm:flex hidden h-20 mx-auto mb-2' />
                <h5 className='sm:text-2xl text-normal font-bold'>Telephone- 9999999999</h5>
                <p className='text-[14px] text-white leading-7 my-3 font-light opacity-50'>
                    Ranipokhari Donali, Dehradun, Uttarakhand INDIA – 248145
                </p>
            </div>
            <div key='japan-office' className='w-1/2 bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-[1.25] hover:!-translate-x-80 group-hover:opacity-0 hover:!opacity-100 hover:!z-[2] sm:p-8 p-2 rounded-xl mix-blend-luminosity cursor-pointer'>
                <h6 className='text-xl bold font-poppins'>Our Office In Japan</h6>
                <img src='' alt='' className='sm:flex hidden h-20 mx-auto mb-2' />
                <h5 className='sm:text-2xl text-normal font-bold'>Telephone- 00817084488810</h5>
                <p className='text-[14px] text-white leading-7 my-3 font-light opacity-50'>
                    Osaka Fu Osaka Shi Suminoe ku Nanko Nana 3-3
                </p>
            </div>
        </div>
        <div className='flex flex-1 mt-10 mb-10 m-2 justify-center flex-col items-center'> 
            <iframe defer className='h-[450px] w-full p-2 border-2' src="https://maps.google.com/maps?q=durga%20chowk,%20bhaniyawala,%20dehradun,%20uttarakhand,%20india&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="1" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        </div>
    </section>
  )
}

export default Contact;