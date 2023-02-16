import React from 'react';
import { Top } from '../components';

const About = () => {
  return (
    <div className='mt-20'>
      <Top image='https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg' text='About' />
      <div className='sm:p-10 p-5'>
        <p className='text-white font-poppins sm:text-[20px] text-[16px] text-center'>
          We are delighted to welcome you to <b className='text-gradient'>Mirai International Education</b>.<br/><br/>
          First of all being a student, we all know how study is very crucial to an individual’s <br/>
          future, so nowadays students are migrating and planning to overseas for better<br/>
          future /studies and open up their ways towards a brighter future, work opportunity<br/>
          & career abroad. With us you can get a full satisfaction about Japan, Japanese<br/>
          education, Japanese culture & traditions and will build more confidence at all level<br/>
          so that they can feel less nervous and feel more comfortable in India.<br/><br/>
          Our goal is to provide the students a traffic-free environment so they can get easily<br/>
          settled in Japan. And also included encompasses everything that’s needed to reach<br/>
          the Japanese school/college/University and other educational institute of your<br/>
          Choice, with the minimum time, effort and expenditure.
        </p>
      </div>
    </div>
  )
}

export default About;