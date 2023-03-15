import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../constants';
import { menu, close, logo } from '../assets';

const Navbar = () => {
  const loc = useLocation();
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState('home');
  const ref = useRef(null);
  const handleEvent = (e) => {
    if(ref.current && !ref.current.contains(e.target)) setToggle(false);
  };
  useEffect(() => {
    document.addEventListener('click', handleEvent, true);
    return () => {
      document.removeEventListener('click', handleEvent, true);
    };
  }, []);
  useEffect(() => {
    let [path] = loc?.pathname?.split('/')?.filter(v => !!v) || [];
    if(!navLinks.map(nl => nl.path).includes(path)) path = 'home';
    setSelected(path);
    document.documentElement.scrollTo(0, 0);
  }, [loc.pathname]);
  return (
    <nav className='sm:h-[120px] h-[100px] fixed w-full flex items-center flex-wrap top-0 z-[50] bg-[#0087E0] shadow-lg select-none'>
      <Link to='/home' onClick={() => setSelected('home')}>
        <img id='logo' src={logo} loading='eager' alt="mirai" className='sm:w-[90px] w-[80px] sm:h-[90px] h[80px] sm:mr-10 mr-2 sm:ml-5 ml-2 cursor-pointer' />
      </Link> 
      <div className='flex flex-1 items-center justify-center'>
        <h1 className='flex-1 font-poppins font-semibold sm:text-[15px] text-[12px] text-white justify-center items-center'>
          <span className='sm:text-[40px] text-[25px] justify-center'>Mirai</span><br/>
          International Education<br/>
        </h1>
      </div>

      <ul className="md:flex hidden relative justify-end">
        <span
          className={`bg-[#2A2220] duration-500 ${navLinks.find(nl => nl.path === selected).dist} border-[3px] border-gray-500 h-[37px] ${selected === 'abroad' ? 'w-[130px]' : 'w-[85px]'} absolute
         top-[10px] rounded-[40px]`}
        >
        </span>
        {navLinks.map((nav, idx) => (
          <li key={idx} className={`${idx == 1 ? 'w-[112px]' : ([0, 2].includes(idx) ? 'w-[68px]' : 'w-[80px]')} select-none mr-4`}>
            <Link
              to={nav.path}
              className="flex flex-col text-center pt-6"
              onClick={() => setSelected(nav.path)}
            >
              <span
                className={`${idx < 1 ? 'text-start': 'text-end'} text-md font-extrabold cursor-pointer duration-500 z-[1] text-[16px] ${
                  nav.path === selected ? "-mt-2 text-white" : "text-[#2A2220]"
                }`}
              >
                {nav.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className='md:hidden flex justify-end'>
        <img src={toggle ? close : menu} loading='eager' alt='menu' className={`${toggle ? 'w-[20px] h-[20px] hidden' : 'w-[24px] h-[24px]'} object-contain mr-2 duration-500`} onClick={() => setToggle((val) => !val)} />
      </div>

      <div ref={ref} className={`md:hidden ${toggle ? 'flex' : '-translate-x-[720px] overflow-hidden ease-in-out'} z-[50] flex-col fixed left-0 top-0 sm:w-[50%] w-[69%] h-full border-r border-r-gray-900 bg-primary-0 duration-500`}>
        <div className='flex flex-row mt-2'>
          <img src={logo} alt="mirai" loading='eager' className='w-[80px] h-[80px] ml-2 mr-2'/>
          <div className='flex flex-1 items-center justify-center'>
            <h1 className='flex-1 font-poppins font-semibold sm:text-[17px] text-[12px] text-white justify-center items-center'>
              <span className='text-gradient sm:text-[40px] text-[25px] justify-center'>Mirai</span><br/>
              International Education<br/>
            </h1>
          </div>
        </div>
        <ul className='uppercase p-1 mt-10'>
          {[...navLinks, { id: 999, path: 'event-list', title: 'News & Events'}].map((nav, idx) => (
            <li key={nav.id} className='group cursor-pointer text-white border-b border-gray-800 group hover:bg-gray-800 hover:rounded-lg hover:text-black rounded-sm duration-50' onClick={() => setToggle(val => !val)}>
              <Link to={nav.path} key={`${nav.id}-linking`} className='flex transition duration-400 p-4'>
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
