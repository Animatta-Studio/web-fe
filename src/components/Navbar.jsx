import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../constants';
import { menu, close, logo } from '../assets';

const Navbar = () => {
  const loc = useLocation();
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState('home');
  useEffect(() => {
    let [path] = loc?.pathname?.split('/')?.filter(v => !!v) || [];
    if(!navLinks.map(nl => nl.path).includes(path)) path = 'home';
    setSelected(path);
    document.documentElement.scrollTo(0, 0);
  }, [loc.pathname]);
  return (
    <nav className='sm:h-[120px] h-[80px] fixed w-full flex items-center flex-wrap top-0 z-[50] bg-[#0087E0] shadow-lg select-none'>
      <Link to='/home' onClick={() => setSelected('home')}>
        <img id='logo' src={logo} alt="mirai" className='sm:w-[90px] w-[80px] sm:h-[90px] h[80px] sm:mr-10 mr-2 sm:ml-5 ml-2 cursor-pointer' />
      </Link> 
      <div className='flex flex-1 items-center justify-center'>
        <h1 className='flex-1 font-poppins font-semibold sm:text-[15px] text-[12px] text-white justify-center items-center'>
          <span className='text-gradient sm:text-[40px] text-[25px] justify-center'>Mirai</span><br/>
          International Education<br/>
        </h1>
      </div>

      <ul className="msm:flex hidden relative justify-end space-x-0">
        <span
          className={`bg-black duration-500 ${navLinks.find(nl => nl.path === selected).dist} border-[3px] border-gray-400 h-[40px] ${selected === 'abroad' ? 'w-[150px]' : 'w-[100px]'} absolute
         top-3 rounded-[40px]`}
        >
        </span>
        {navLinks.map((nav, idx) => (
          <li key={idx} className="w-[124px]">
            <Link
              to={nav.path}
              className="flex flex-col text-center pt-6"
              onClick={() => setSelected(nav.path)}
            >
              <span
                className={`text-lg font-extrabold cursor-pointer duration-500 z-[1] ${
                  nav.path === selected && "-mt-2 text-white"
                }`}
              >
                {nav.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className='msm:hidden flex justify-end'>
        <img src={toggle ? close : menu} alt='menu' className={`${toggle ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]'} object-contain mr-2`} onClick={() => setToggle((val) => !val)} />
      </div>

      <div className={`sm:hidden ${toggle ? 'flex' : '-translate-x-[520px] overflow-hidden ease-in-out'} z-[50] flex-col fixed left-0 top-0 w-[67%] h-full border-r border-r-gray-900 bg-primary-0 duration-500`}>
        <div className='flex flex-row'>
          <img src={logo} alt="mirai" className='w-[80px] h-[80px] ml-2 mr-2'/>
          <div className='flex flex-1 items-center justify-center'>
            <h1 className='flex-1 font-poppins font-semibold sm:text-[17px] text-[12px] text-white justify-center items-center'>
              <span className='text-gradient sm:text-[40px] text-[25px] justify-center'>Mirai</span><br/>
              International Education<br/>
            </h1>
          </div>
        </div>
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