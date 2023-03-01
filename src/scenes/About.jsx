import React, { useEffect } from 'react';
import { founder, director, teacher, aboutus } from '../assets';
import { Top } from '../components';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='mt-[100px]'>
      <Top text='About Us' />
      <div className='flex sm:flex-row flex-col sm:p-10 p-5 justify-center space-x-20'>
        <motion.p initial={{x: '-100vw'}} animate={{x: 0}} transition={{type:'spring', duration:1.2, bounce:0.25}} className='text-white font-poppins sm:text-[18px] text-[14px] text-start p-2'>
          We are delighted to welcome you to <br className='sm:hidden flex'></br><b className='text-gradient sm:text-[20px] text[18px] z-[2]'>Mirai International Education</b>.<br className='sm:block hidden'/><br/>
          First of all being a student, we all know how study is very crucial to an individual’s <br className='sm:flex hidden'/>
          future, so nowadays students are migrating and planning to overseas for better <br className='sm:flex hidden'/>
          future/studies and open up their ways towards a brighter future, work opportunity <br className='sm:flex hidden'/>
          & career abroad. With us you can get a full satisfaction about Japan, Japanese <br className='sm:flex hidden'/>
          education, Japanese culture & traditions and will build more confidence at all level <br className='sm:flex hidden'/>
          so that they can feel less nervous and feel more comfortable in India. <br className='sm:flex hidden'/><br/>
          Our goal is to provide the students a traffic-free environment so they can get easily <br className='sm:flex hidden'/>
          settled in Japan. And also included encompasses everything that’s needed to reach <br className='sm:flex hidden'/>
          the Japanese school/college/University and other educational institute of your <br className='sm:flex hidden'/>
          choice, with the minimum time, effort and expenditure.
        </motion.p>
        <motion.img initial={{x: '100vw'}} animate={{x: 0}} transition={{type:'spring', duration:1.2, bounce:0.25}} src={aboutus} className='sm:inline hidden w-1/3 p-2 bg-opacity-[0.5] bg-gray-400 rounded-[180px] z-[2]' />
      </div>
      <div className='flex flex-col flex-1 sm:pl-5 sm:pr-5 sm:ml-5 ml-1 sm:mr-5 mr-1 bg-white/10 z-10'>
        <div className='font-poppins font-extrabold text-white text-center text-[25px] pt-1 z-10'>FOUNDER</div>
        <div className='flex sm:flex-row flex-col flex-1 justify-center items-center text-center sm:px-10 px-2 sm:py-10 py-5 rounded z-10'>
          <div className='flex rounded-full sm:w-1/3 justify-center z-10'>
              <img src={founder} alt='name' className='object-cover sm:w-[240px] w-[100px] sm:h-[240px] h-[100px] justify-center bg-[#64C0FF] rounded-full p-1'/>
          </div>
          <div className='flex flex-col sm:w-2/3 z-[10]'>
            <h6 className="font-poppins font-semibold xs:text-[22px] text-[15px] xs:leading-[53px] leading-[40px] text-white">Naveen Chauhan</h6>
            <div className='flex justify-center'>
              <p className="font-poppins font-normal xs:text-[15px] text-[12px] xs:leading-[26px] leading-[21px] text-gradient text-start">
                I am the founder of Mirai International Education. also, I am a teacher at the <br className='sm:flex hidden'/>
                management college in Japan. I have been right here for 18 years. Japan is a <br className='sm:flex hidden'/>
                very friendly country for foreign Students who come from different countries to <br className='sm:flex hidden'/>
                build their future. I also came here from India with the same vision or dreams <br className='sm:flex hidden'/>
                and made them true. <br/>
                I have a vision that I make a suitable platform for those students who want to <br className='sm:flex hidden'/>
                study abroad, especially from India I can put my 18 years of experience to good <br className='sm:flex hidden'/>
                use for students who really want to come here and continue their studies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col flex-1 sm:my-10 my-5 sm:pl-5 sm:pr-5 sm:ml-5 ml-1 sm:mr-5 mr-1 bg-white/10 '>
        <div className='font-poppins font-extrabold text-white text-center text-[25px] pt-1'>DIRECTOR</div>
        <div className='flex sm:flex-row flex-col-reverse flex-1 justify-center items-center text-center sm:px-10 px-2 sm:py-10 py-5 rounded'>
          <div className='flex flex-col sm:w-2/3'>
            <h6 className="font-poppins font-semibold xs:text-[22px] text-[15px] xs:leading-[53px] leading-[40px] text-white">Junichi Nishite</h6>
            <div className='flex justify-center'>
              <p className="font-poppins font-normal xs:text-[15px] text-[12px] xs:leading-[26px] leading-[21px] text-gradient text-start">
                Namaste, My name is Junichi Nishite, Director of Mirai International Education <br className='sm:flex hidden'/>
                Center. Japan is an island country surrounded by the sea on all sides, and <br className='sm:flex hidden'/>
                cultures that have been introduced from other countries have taken root in a <br className='sm:flex hidden'/>
                unique way. Because Japanese have a long tradition of not interacting with <br className='sm:flex hidden'/>
                other ethnic groups, they tend to be cautious and reserved in their <br className='sm:flex hidden'/>
                communication. Quite the opposite. Japan is such a country, so I think it's safe. <br className='sm:flex hidden'/>
                As Japanese nationals, many people tend to prioritize coordination and harmony <br className='sm:flex hidden'/>
                with their surroundings. Of course, this is not true for everyone, but not many <br className='sm:flex hidden'/>
                people have a Western mind-set that respects the individual. Therefore, I think <br className='sm:flex hidden'/>
                that the spirit of hospitality that considers people is being nurtured. I hope <br className='sm:flex hidden'/>
                everyone in India can live comfortably in such a safe and friendly Japan. Please <br className='sm:flex hidden'/>
                rest assured that we have a complete support system.
              </p>
            </div>
          </div>
          <div className='flex rounded-full sm:w-1/3 justify-center'>
              <img src={director} alt='name' className='object-cover object-top-1 sm:w-[240px] w-[100px] sm:h-[240px] h-[100px] bg-[#64C0FF] rounded-full p-1'/>
          </div>
        </div>
      </div>
      <div className='flex flex-col flex-1 sm:my-10 my-5 sm:pl-5 sm:pr-5 sm:ml-5 ml-1 sm:mr-5 mr-1 bg-white/10'>
        <div className='font-poppins font-extrabold text-white text-center text-[25px] pt-1'>LEAD EDUCATOR</div>
        <div className='flex sm:flex-row flex-col flex-1 justify-center items-center text-center sm:px-10 px-2 sm:py-10 py-5 rounded'>
          <div className='flex rounded-full justify-center sm:w-1/3'>
              <img src={teacher} alt='name' className='flex object-cover object-bottom sm:w-[240px] w-[100px] sm:h-[240px] h-[100px] justify-center bg-[#64C0FF] rounded-full p-1'/>
          </div>
          <div className='flex flex-col sm:w-2/3'>
            <h6 className="font-poppins font-semibold xs:text-[22px] text-[15px] xs:leading-[53px] leading-[40px] text-white">Asano</h6>
            <div className='flex justify-center'>
              <p className="font-poppins font-normal xs:text-[15px] text-[12px] xs:leading-[26px] leading-[21px] text-gradient text-start">
                My name is Asano. I am a Japanese and teacher by profession. I believe that it <br className='sm:flex hidden'/>
                is very important to interact with students in Japanese and make studying <br className='sm:flex hidden'/>
                interesting in Japan.<br/>
                I start class with a smile. In Japan, teachers and students say "yoroshiku <br className='sm:flex hidden'/>
                onegaishimasu" to each other. It means to be together or co-operate with each <br className='sm:flex hidden'/>
                other, and say “Arigatou gozaimasita” when the class is over, which means thank <br className='sm:flex hidden'/>
                you so much.<br/>
                Also, I love to interact with foreign and it's always fun to be with them. <br className='sm:flex hidden'/>
                If you are interested in Japan or the Japanese language, join with us; we will <br className='sm:flex hidden'/>
                guide you perfectly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
