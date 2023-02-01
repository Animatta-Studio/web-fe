import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState(0);
  return (
    <nav className='sm:h-24 h-[80px] fixed w-full flex items-center flex-wrap top-0 z-[50] bg-[#acddde] shadow-lg'>
      <img id='logo' src='' type='image/svg+xml' alt="mirai" className='sm:w-[123px] w-[80px] h-[64px]' />
      <div className='flex flex-1 items-center justify-center'>
        <h1 className='flex-1 font-poppins font-semibold sm:text-[15px] text-[12px] text-white justify-center items-center'>
          <span className='text-gradient sm:text-[20px] text[15px] justify-center'>Mirai</span><br/>
          International Education<br/>
        </h1>
      </div>

      <ul className="sm:flex hidden relative">
        <span
          className={`bg-rose-600 duration-500 ${navLinks[selected].dist} border-[3px] border-gray-900 h-[40px] w-[100px] absolute
         top-3 rounded-[40px]`}
        >
        </span>
        {navLinks.map((nav, idx) => (
          <li key={idx} className="w-[100px]">
            <Link
              to={nav.path}
              className="flex flex-col text-center pt-6"
              onClick={() => setSelected(idx)}
            >
              <span
                className={`text-xl font-bold cursor-pointer duration-500 z-[1] ${
                  idx === selected && "-mt-2 text-white"
                }`}
              >
                {nav.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex justify-end'>
        <img src={toggle ? close : menu} alt='menu' className={`${toggle ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]'} object-contain mr-2`} onClick={() => setToggle((val) => !val)} />
      </div>

      <div className={`sm:hidden ${toggle ? 'flex' : '-translate-x-[500px] overflow-hidden ease-in-out'} z-[50] flex-col fixed left-0 top-0 w-[62%] h-full border-r border-r-gray-900 bg-primary-0 duration-500`}>
        <img src='' alt="mirai" className='w-[124px] h-[64px]'/>
        <ul className='uppercase p-1 mt-10'>
          {navLinks.map((nav, idx) => (
            <li key={nav.id} className='group p-4 cursor-pointer text-white border-b border-gray-800 group hover:bg-gray-800 hover:rounded-lg hover:text-black rounded-sm duration-50' onClick={() => setToggle(val => !val)}>
              <Link to={nav.path} key={`${nav.id}-linking`} className='p-0 flex transition duration-400'>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;