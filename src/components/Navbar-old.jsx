import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState('home');
  return (
    <nav className='sm:h-24 h-[80px] fixed w-full flex justify-between items-center flex-wrap top-0 z-[50] animated bg-[#acddde] shadow-lg'>
      <img id='logo' src='' type='image/svg+xml' alt="mirai" className='sm:w-[123px] w-[80px] h-[64px]' />
      <div className='flex flex-1 items-center justify-center'>
        <h1 className='flex-1 font-poppins font-semibold sm:text-[15px] text-[12px] text-white justify-center items-center'>
          <span className='text-gradient sm:text-[20px] text[15px] justify-center'>Mirai</span><br/>
          International Education<br/>
        </h1>
      </div>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, idx) => (
          <li key={nav.id} className={`${nav.path === selected ? 'bg-[#ff0000] py-1 px-2 transition' : ''} font-poppins cursor-pointer text-[14px] text-white mr-10 transform hover:scale-150 transition duration-500 ease-in-out font-bold rounded-lg`} onClick={() => setSelected(nav.path)}>
            <Link to={nav.path} key={`${nav.id}-link`} className='group text-black transition duration-300 hover:text-white'>
              {nav.title}
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-900'></span>
            </Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex justify-end'>
        <img src={toggle ? close : menu} alt='menu' className={`${toggle ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]'} object-contain mr-2`} onClick={() => setToggle((val) => !val)} />
      </div>

      <div className={`sm:hidden ${toggle ? 'flex' : '-translate-x-80 overflow-hidden ease-in-out'} z-[50] flex-col fixed left-0 top-0 w-[65%] h-full border-r border-r-gray-900 bg-primary-0 duration-500`}>
        <img src='' alt="mirai" className='w-[124px] h-[64px]' />
        <ul className='uppercase p-1 mt-10'>
          {navLinks.map((nav, idx) => (
            <li key={nav.id} className='p-4 cursor-pointer text-white border-b border-gray-800 group hover:bg-gray-800 hover:rounded-lg hover:text-black rounded-sm duration-50' onClick={() => setToggle(val => !val)}>
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