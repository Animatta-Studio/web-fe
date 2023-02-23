import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { contacts, SERVICE_ID, QUERY_TEMPLATE_ID, PUBLIC_KEY } from '../constants';
import { Top, Map } from '../components';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const location = {
        address: 'Mirai International Education',
        lat: 37.42216,
        lng: -122.08427,
    };
    const zoomLevel = 10;

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
        setLoading(true);
        emailjs.sendForm(SERVICE_ID, QUERY_TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setLoading(false);
            alert("Email sent successfully");
        }, (error) => {
            console.log(error.text);
            alert("Something went wrong.");
        });
        form.current.reset();
    };

  return (
    <section className="mt-[100px]">
        <Top image='https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg' text='Contact Us' />
        <div className='absolute z-[1] w-[80%] h-[42%] left-20 top-0 pink__gradient' />
        <div className='absolute z-[0] w-[40%] h-[30%] rounded-full bottom-40 white__gradient' />
        <div className='sm:flex hidden absolute z-[0] w-[50%] h-[40%] right-20 bottom-20 blue__gradient' />
        <div className='flex sm:flex-row flex-col'>
            <div className="sm:w-1/2 w-full py-1 lg:py-8 px-10 sm:mx-auto mx-0 max-w-screen-md items-start justify-start rounded z-[10]">
                <h2 className="mb-4 sm:text-3xl text-2xl font-poppins tracking-tight font-semibold text-center text-white">Get In Touch With Us</h2>
                <Formik initialValues={defaultValues} validationSchema={validationSchema} onSubmit={sendEmail} >
                    <Form ref={form} className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
                                <div className='flex flex-row justify-between'>
                                    Your email
                                    <p className='text-[#ff0000] justify-end'>
                                        <ErrorMessage name='email'/>
                                    </p>
                                </div>
                            </label>
                            <Field type="text" name='email' id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your email"/>
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
                        <div className='flex flex-1 sm:pb-0 pb-10'>
                            <button type="submit" disabled={loading} className="font-semibold py-4 text-lg text-center text-white rounded-lg bg-primary-700 w-full hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                { loading && <span>Sending...</span> }
                                { !loading && <span>Send Message</span> }
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
            <div className='flex flex-1 mt-10 mb-10 m-2 justify-center flex-col z-[10]'>
                <div className=' bg-[#0087E0] right-0 top-0 sm:w-96 w-[350px] h-5'></div>
                <div className='flex flex-row'>
                    <div className='bg-[#0087E0] right-0 top-0 w-[60px] h-[250px]'></div>
                    {/* <Map location={location} zoomLevel={zoomLevel} /> */}
                    <iframe defer className='z-[10] h-[450px] bg-[#0087E0] w-full border-2' src="https://maps.google.com/maps?q=durga%20chowk,%20bhaniyawala,%20dehradun,%20uttarakhand,%20india&t=m&z=15&ie=UTF8&iwloc=&output=embed&mrt=kmlkmz" frameBorder="1" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    <div className='flex flex-col-reverse'>
                        <div className='bg-[#0087E0] right-0 top-0 sm:w-[60px] w-[35px] h-[250px]'></div>
                    </div>
                </div>
                <div className='flex flex-row-reverse'>
                    <div className=' bg-[#0087E0] left-0 top-0 sm:w-96 w-[350px] h-5'></div>
                </div>
            </div>
        </div>
        <div className='w-full sm:flex grid grid-cols-2 gap-1 rounded sm:pb-10'>
            {contacts.map(contact => (
                <div key={contact.id} className='flex flex-1 sm:flex-row flex-col justify-center items-center sm:px-5 px-5 sm:py-10 py-4 rounded'>
                    <div className='bg-[#0087E0] p-2 rounded-full mr-2'>
                        <img src={contact.img} alt='icon' className='flex h-[40px] w-[40px] justify-center' />
                    </div>
                    <div className='flex flex-col sm:items-start items-center'>
                        <h6 className='text-gray-500'>{contact.title}</h6>
                        <p className="flex flex-1 font-poppins font-normal text-center items-center justify-center sm:text-[14px] text-[10px] xs:leading-[26px] leading-[21px] text-gradient">
                            {contact.data}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <div className='flex sm:flex-row flex-col max-full justify-between sm:space-x-3 sm:space-y-0 space-y-3 group p-10'>
            <div className='sm: h-[300px] flex flex-1 flex-col justify-start bg-white/10 duration-500 group-hover:blur-[1px] hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 pl-4 pr-4 pt-8 pb-8 rounded-xl cursor-pointer'>
                <div className='flex flex-1 flex-col h-1/5 items-center justify-center '>
                    <img src='' alt='' className='flex h-[100px] w-[100px] bg-cover justify-center mb-2 rounded-full border-none' />
                    <h5 className='text-xl font-bold text-white opacity-70'>Our Office In India</h5>
                    <h6 className='text-[15px] text-gray-500'>Telephone- 9999999999</h6>
                </div>
                <div className='text-start h-2/5'>
                    <p className='text-[12px] text-white leading-6 font-bold opacity-40 text-center'>
                        Ranipokhari Donali, Dehradun, Uttarakhand INDIA – 248145
                    </p>
                </div>
            </div>
            <div className='sm: h-[300px] flex flex-1 flex-col justify-start bg-white/10 duration-500 group-hover:blur-[1px] hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 pl-4 pr-4 pt-8 pb-8 rounded-xl cursor-pointer'>
                <div className='flex flex-1 flex-col h-1/5 items-center justify-center '>
                    <img src='' alt='' className='flex h-[100px] w-[100px] bg-cover justify-center mb-2 rounded-full border-none' />
                    <h5 className='text-xl font-bold text-white opacity-70'>Our Office In Japan</h5>
                    <h6 className='text-[15px] text-gray-500'>Telephone- 00817084488810</h6>
                </div>
                <div className='text-start h-2/5'>
                    <p className='text-[12px] text-white leading-6 font-bold opacity-40 text-center'>
                        Osaka Fu Osaka Shi Suminoe ku Nanko Nana 3-3
                    </p>
                </div>
            </div>
        </div>
        {/* <div className={`sm:flex hidden bg-gray-400 dark:bg-white w-[1px] h-[550px] mr-5`}></div> */}
    </section>
  )
};

export default Contact;
