import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import {
  contacts,
  SERVICE_ID,
  QUERY_TEMPLATE_ID,
  PUBLIC_KEY,
} from "../constants";
import { Top, Map, ContactLinkBar } from "../components";
import { contactus, indianOffice, japaneseOffice, contact, location } from "../assets";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);


  const loc = {
    address: "Mirai International Education",
    lat: 37.42216,
    lng: -122.08427,
  };
  const zoomLevel = 10;

  const defaultValues = {
    email: "",
    name: "",
    message: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required("*").email("Invalid Email"),
    name: yup
      .string()
      .required("*")
      .matches(/^[a-zA-Z\s]+$/, "Invalid Name"),
    message: yup
      .string()
      .required("*")
      .min("10", "Message is too short"),
  });

  const sendEmail = (values, actions) => {
    setLoading(true);
    emailjs
      .sendForm(SERVICE_ID, QUERY_TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          alert("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong.");
        }
      );
    form.current.reset();
  };

  return (
    <section className="mt-[100px]">
      <Top
        text="Contact Us"
      />
      <ContactLinkBar />
      <div className="flex sm:flex-row flex-col justify-center items-center">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", durat7037972600ion: 1.2, bounce: 0.3 }}
          className="sm:w-1/2 w-full py-1 lg:py-6 sm:px-10 px-2 sm:mx-auto mx-0 max-w-screen-md items-start justify-start rounded z-[10]"
        >
          <h2 className="mb-4 sm:text-3xl text-2xl font-poppins tracking-tight font-semibold text-center text-white">
            Get In Touch With Us
          </h2>
          <Formik
            initialValues={defaultValues}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            <Form ref={form} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  <div className="flex flex-row justify-between">
                    Your Email
                    <p className="text-[#ff0000] justify-end pr-4">
                      <ErrorMessage name="email" />
                    </p>
                  </div>
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  <div className="flex flex-row justify-between">
                    Your Name
                    <p className="text-[#ff0000] justify-end pr-4">
                      <ErrorMessage name="name" />
                    </p>
                  </div>
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="block p-3 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                  placeholder="Enter your name"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  <div className="flex flex-row justify-between">
                    Your Message
                    <p className="text-[#ff0000] justify-end pr-4">
                      <ErrorMessage name="message" />
                    </p>
                  </div>
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm resize-none rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let us know how can we help you"
                />
              </div>
              <div className="flex flex-1 sm:pb-0 pb-10">
                <button
                  type="submit"
                  disabled={loading}
                  className="font-semibold py-2 text-lg text-center text-white rounded-lg w-full bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                >
                  {loading && <span>Sending...</span>}
                  {!loading && <span>Send Message</span>}
                </button>
              </div>
            </Form>
          </Formik>
        </motion.div>
        <motion.img
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1.2, bounce: 0.3 }}
          src={contactus}
          loading='eager'
          className="sm:inline hidden w-2/5 bg-opacity-[0.5] z-[3] mr-10"
        />
      </div>
      <div className="flex flex-1 sm:w-4/7 mt-10 mb-10 m-2 justify-center flex-col z-[10]">
        <div className="sm:flex hidden bg-white/10 right-0 top-0 sm:w-96 w-[350px] h-5"></div>
        <div className="flex flex-row">
          <div className="sm:flex hidden bg-white/10 right-0 top-0 w-[60px] h-[250px]"></div>
          {/* <Map location={loc} zoomLevel={zoomLevel} /> */}
          <iframe
            className="z-[10] h-[450px] bg-white/10 w-full border-2"
            src="https://maps.google.com/maps?q=Mirai international education, donali, Dehradun, Uttarakhand&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="1"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <div className="sm:flex hidden flex-col-reverse">
            <div className="bg-white/10 right-0 top-0 sm:w-[60px] w-[35px] h-[250px]"></div>
          </div>
        </div>
        <div className="sm:flex hidden flex-row-reverse">
          <div className="bg-white/10 left-0 top-0 sm:w-96 w-[350px] h-5"></div>
        </div>
      </div>
      <div className="sm:flex flex-1 grid grid-cols-2 w-full gap-1 rounded justify-between items-center">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex sm:flex-1 flex-col justify-center items-center py-4 rounded"
          >
            <div className="bg-[#0087E0] p-2 rounded-full sm:mr-2 mr-0">
              <img
                src={contact.img}
                loading='lazy'
                alt="icon"
                className="flex h-[40px] w-[40px] justify-center"
              />
            </div>
            <div className="flex flex-col items-center">
              <h6 className="text-gray-500">{contact.title}</h6>
              <a href={contact.ref} className="flex flex-1 font-poppins font-normal text-center items-center justify-center sm:text-[14px] text-[9px] xs:leading-[26px] leading-[21px] text-gradient" target="_blank">
                {contact.data}
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <hr className='text-blue h-1 bg-[#0087E0] mt-5 sm:mb-10' /> */}
      <div className="flex msm:flex-row flex-col ustify-between msm:space-x-3 msm:space-y-0 space-y-3 group msm:p-6 p-2 msm:mx-8">
        <div className="h-[400px] flex flex-1 flex-col justify-start bg-white/10 duration-500 group-hover:blur-0 hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 pl-4 pr-4 pt-8 rounded-xl cursor-pointer">
          <div className="flex flex-1 flex-col h-1/2 items-center justify-center ">
            <img
              src={indianOffice}
              loading='lazy'
              alt=""
              className="flex sm:h-[200px] h-[100px] sm:w-[200px] w-[100px] bg-cover justify-center mb-2 rounded-full border-none"
            />
            <h5 className="text-xl font-bold text-white opacity-70">
              Our Office In India
            </h5>
            <h4 className="text-[15px] text-white xs:flex hidden pt-1">
              <img src={contact} loading='lazy' className="h-[30px] w-[30px]"/>
              <span>
                +91-7037972600, +91-8077063794
              </span>
            </h4>
            <h6 className="flex flex-row text-[15px] text-white xs:hidden">
              <img src={contact} loading='lazy' className="h-[30px] w-[30px]"/>
              <span>
                +91-8077063794
              </span>
            </h6>
          </div>
          <div className="flex flex-col text-start h-1/4 justify-center items-center p-1">
            <img src={location} loading='lazy' className="h-[30px] w-[30px] items-center"/>
            <p className="text-[14px] text-white leading-[20px] font-bold opacity-80 text-center">
              Ranipokhari-Donali, Dehradun,
              <br />
              Uttarakhand INDIA – 248145
            </p>
          </div>
        </div>
        <div className="h-[400px] flex flex-1 flex-col justify-start bg-white/10 duration-500 group-hover:blur-0 hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 pl-4 pr-4 pt-8 rounded-xl cursor-pointer">
          <div className="flex flex-1 flex-col h-1/2 items-center justify-center ">
            <img
              src={japaneseOffice}
              loading='lazy'
              alt=""
              className="flex sm:h-[200px] h-[100px] sm:w-[200px] w-[100px] bg-cover justify-center mb-2 rounded-full border-none"
            />
            <h5 className="text-xl font-bold text-white opacity-70">
              Our Office In Japan
            </h5>
            <h4 className="flex text-[15px] text-white pt-1">
              <img src={contact} loading='lazy' className="h-[30px] w-[30px] justify-center"/>
              <span>
                +81-7084488810
              </span>
            </h4>
          </div>
          <div className="flex flex-col text-start h-1/4 justify-center items-center p-1">
            <img src={location} loading='lazy' className="h-[30px] w-[30px] items-center"/>
            <p className="text-[14px] text-white leading-[20px] font-bold opacity-80 text-center">
              Osaka Fu Osaka Shi,
              <br />
              Suminoe ku Nanko Nana 3-3, Japan
            </p>
          </div>
        </div>
      </div>
      {/* <div className={`sm:flex hidden bg-gray-400 dark:bg-white w-[1px] h-[550px] mr-5`}></div> */}
    </section>
  );
};

export default Contact;
